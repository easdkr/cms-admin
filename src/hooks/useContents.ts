import { getDetail, getList } from "apis/contents"
import { Content, ContentDetails } from "models/contents";
import { useEffect, useState } from "react";

export default function useContents() {
    const [contents, setContents] = useState<Content[]>();
    const [contentDetails, setContentDetails] = useState<ContentDetails>();
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        handleGetList();
    }, [])

    const handleGetList = async () => {
        const list = await getList(0, 20);
        if (list?.data?.items) {
            setContents(list.data.items);
        }
    }

    const handleContentsCardClick = async (id: number) => {
        const details = await getDetail(id);
        if (details?.data) {
            console.log(details.data);
            setModalOpen(true);
            setContentDetails(details.data);
        }
    }

    const handleModalClose = () => setModalOpen(false);

    return {
        handleContentsCardClick,
        contents,
        modalOpen,
        handleModalClose,
        contentDetails,
    };
};
