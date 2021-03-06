import { AxiosResponse } from "axios";
import httpClient from "services/AxiosInterceptor";
import { ListResponse } from "models/commons";
import { Content, ContentDetails } from "models/contents";
import paths from "utils/constants/paths"


export const getList = async (
    offset?: number, page_size?: number, query?: any) => {

    const payload = {
        offset: offset.toString(),
        page_size: page_size.toString(),
        query: query
    }

    return await httpClient.get(
        paths.contents.LIST, { params: payload }) as AxiosResponse<ListResponse<Content>>;
}

export const getDetail = async (id: number) => {
    return await httpClient.get(
        `${paths.contents.DETAIL}/${id}`
    ) as AxiosResponse<ContentDetails>
}