import axios, { AxiosInstance } from "axios";


const requestor: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
    timeout: 10000
})

