import { AxiosResponse } from "axios";
import httpClient from "services/AxiosInterceptor";
import paths from "utils/constants/paths"

interface Payload {
    username: string;
    password: string;
}

export const getToken = async ({ username, password }: Payload) => {
    return await httpClient.post(
        paths.auths.SIGN_IN, { username, password }) as AxiosResponse<any>;
}

export const tokenCheck = async () => {
    return await httpClient.get(paths.auths.CHECK) as AxiosResponse<any>;
}