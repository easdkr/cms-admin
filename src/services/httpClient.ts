import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
}
  from "axios";


const httpClient: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  timeout: 10000
})

//request interceptor
httpClient.interceptors.request.use((config: AxiosRequestConfig) => {
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