import { AxiosResponse } from "axios";
import { ListResponse } from "models/commons";
import { Content } from "models/contents";
import httpClient from "services/httpClient"
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