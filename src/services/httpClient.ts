import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
}
  from "axios";
import { useRecoilValue } from "recoil";
import { tokenState } from "stores/token";
import { AuthStorage } from "./storages";


const httpClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  timeout: 10000
})

//request interceptor
httpClient.interceptors.request.use((config: AxiosRequestConfig) => {

  const token = AuthStorage.get();
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

//response interceptor
httpClient.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response;
  },
  (error: AxiosError & { config: { _retry: boolean } }) => {
    return Promise.reject(error);
  },
);


export default httpClient;