import { AxiosResponse } from "axios";
import httpClient from "services/AxiosInterceptor";
import { ListResponse } from "models/commons";
import { Content } from "models/contents";
import paths from "utils/constants/paths"


export const getList = async (
    offset?: number, page_size?: number, query?: any) => {

    const payload = {
        offset: offset.toString(),
        page_size: page_size.toString(),
        query: query
    }

    return await httpClient.get(
        paths.CONTENTS_LIST, { params: payload }) as AxiosResponse<ListResponse<Content>>;
}