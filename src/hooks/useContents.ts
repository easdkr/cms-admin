import { getList } from "apis/contents"

export default function useContents() {

    const handleGetList = async () => {
        return await getList(0, 20);
    }

    return { handleGetList };
};
