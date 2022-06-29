import MediaCard from "components/molecules/MediaCard";
import { Box, Grid, SxProps } from "@mui/material";
import { Content } from "models/contents";
import Size from "utils/styles/size";
import { ContentsLayout } from "./styles";

interface Props {
    contents: Content[];
    onCardClick: any;
}

export default function Contents({ contents, onCardClick }: Props) {

    return (
        <ContentsLayout>
            {
                contents &&
                contents.map((item, index) => (
                    <MediaCard
                        imageSource={item.banner}
                        title={item.title}
                        key={`contents, ${index}`}
                        onClick={() => { onCardClick(item.id) }}
                    />
                ))
            }
        </ContentsLayout>
    )
};
