import { AxiosResponse } from 'axios'
import httpClient from 'services/AxiosInterceptor'
import { ListResponse } from 'models/commons'
import { Category, Content, ContentDetails } from 'models/contents'

const BASE_PATH = '/contents'

export const getList = async (
  offset?: number,
  // eslint-disable-next-line camelcase
  page_size?: number,
  query?: any,
) => {
  const payload = {
    offset: offset.toString(),
    // eslint-disable-next-line camelcase
    page_size: page_size.toString(),
    query,
  }

  return (await httpClient.get(BASE_PATH, {
    params: payload,
  })) as AxiosResponse<ListResponse<Content>>
}

export const getDetail = async (id: number) => {
  return (await httpClient.get(
    `${BASE_PATH}/${id}`,
  )) as AxiosResponse<ContentDetails>
}

export const getCategories = async () => {
  return (await httpClient.get(`${BASE_PATH}/categories`)) as AxiosResponse<
    ListResponse<Category>
  >
}
