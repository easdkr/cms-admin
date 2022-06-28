import Contents from "components/templates/Contents";
import useContents from "hooks/useContents"
import { Content } from "models/contents";
import { useEffect, useState } from "react";


export default function ContentsPage() {
    const { handleGetList } = useContents();
    const [contents, setContents] = useState<Content[]>();

    const onGetList = async () => {
        const list = await handleGetList();
        if (list?.data) {
            console.log(list.data.items);
            setContents(list.data.items);
        }
    }

    useEffect(() => {
        onGetList();
    }, [])

    return (
        <>
            <Contents contents={contents} />
        </>
    )
};
