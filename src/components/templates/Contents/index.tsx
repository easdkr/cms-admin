import MediaCard from "components/molecules/MediaCard";
import { Box, Grid, SxProps } from "@mui/material";
import { Content } from "models/contents";
import Size from "utils/styles/size";
import { ContentsLayoutStyle } from "./styles";

interface Props {
    contents: Content[];
}

export default function Contents({ contents }: Props) {
    return (
        <Box sx={ContentsLayoutStyle}>
            {
                contents &&
                contents.map((item, index) => (
                    <MediaCard
                        imageSource={item.banner}
                        title={item.title}
                        key={`contents, ${index}`}
                    />
                ))
            }
        </Box>
    )
};
