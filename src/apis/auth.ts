import { Credentials } from 'aws-sdk'
import { AxiosResponse } from 'axios'
import { TemporaryCredentialResponse } from 'models/auth'
import httpClient from 'services/AxiosInterceptor'

interface Payload {
  username: string
  password: string
}
const BASE_PATH = '/auth'
/* signin 시 사용하는 request,
username, password 를 보내서 jwt를 받아온다. 
*/
export const token = async ({ username, password }: Payload) => {
  return (await httpClient.post(`${BASE_PATH}/login`, {
    username,
    password,
  })) as AxiosResponse<any>
}

/*
현재 가지고 있는 jwt가 유효한지 체크
*/
export const tokenCheck = async () => {
  return (await httpClient.get(`${BASE_PATH}/check`)) as AxiosResponse<any>
}

/*
AWS STS로 임시 토큰을 받아온다.  
*/
export const temporaryCredential = async () => {
  return (await httpClient.get(
    `${BASE_PATH}/temp-credential`,
  )) as AxiosResponse<TemporaryCredentialResponse>
}
