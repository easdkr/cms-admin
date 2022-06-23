import { AxiosResponse } from "axios";
import httpClient from "services/httpClient";
import paths from "utils/constants/paths"

interface Payload {
    username: string;
    password: string;
}

export const getToken = async ({ username, password }: Payload) => {
    return await httpClient.post(
        paths.SIGN_IN, { username, password }) as AxiosResponse<any>;
}