import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthStorage } from './Storages'

const httpClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  timeout: 10000,
})

// request interceptor
httpClient.interceptors.request.use((config: AxiosRequestConfig) => {
  const snakeParseConfig = { ...config }
  const token = AuthStorage.get()
  // eslint-disable-next-line no-param-reassign
  snakeParseConfig.headers.Authorization = `Bearer ${token}`
  if (snakeParseConfig.headers['Content-Type'] === 'multipart/form-data')
    return snakeParseConfig

  if (snakeParseConfig.params)
    snakeParseConfig.params = decamelizeKeys(config.params)
  if (snakeParseConfig.data) snakeParseConfig.data = decamelizeKeys(config.data)
  return snakeParseConfig
})

const AxiosInterceptor = ({ children }: any) => {
  const navigate = useNavigate()
  const [intercepted, setIntercepted] = useState(false)

  useEffect(() => {
    const resInterceptor = (response: AxiosResponse<any>) => {
      if (
        response.data &&
        response.headers['content-type'] === 'application/json'
      ) {
        response.data = camelizeKeys(response.data)
      }
      return response
    }

    const errInterceptor = (error: AxiosError) => {
      if (error.response.status === 401) {
        navigate('/signin')
      }
      return Promise.reject()
    }

    const interceptor = httpClient.interceptors.response.use(
      resInterceptor,
      errInterceptor,
    )

    setIntercepted(true)

    // CleanUp
    return () => httpClient.interceptors.response.eject(interceptor)
  }, [navigate])

  return intercepted && children
}

export default httpClient
export { AxiosInterceptor }

// https://dev.to/arianhamdi/react-hooks-in-axios-interceptors-3e1h
