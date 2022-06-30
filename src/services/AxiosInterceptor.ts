import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStorage } from "services/storages";

const httpClient: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
    timeout: 10000
})
//request interceptor
httpClient.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = AuthStorage.get();
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
);

const AxiosInterceptor = ({ children }: any) => {
    const navigate = useNavigate();
    const [intercepted, setIntercepted] = useState(false);

    useEffect(() => {
        const resInterceptor = (response: AxiosResponse<any>) => {
            return response;
        };

        const errInterceptor = (error: AxiosError) => {
            if (error.response.status === 401) {
                navigate('/signin');
            }
            return Promise.reject();
        };

        const interceptor = httpClient.interceptors.response.use(
            resInterceptor, errInterceptor
        );

        setIntercepted(true);

        //CleanUp
        return () => httpClient.interceptors.response.eject(interceptor);
    }, [navigate]);

    return intercepted && children;
};

export default httpClient;
export { AxiosInterceptor };
// https://dev.to/arianhamdi/react-hooks-in-axios-interceptors-3e1h