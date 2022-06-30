
import { Card, CardMedia, Typography } from "@mui/material";
import Size from "utils/styles/size";
import { CardBoxStyles, CardTitleStyles } from "./styles";

export interface MediaCardProps {
    imageSource: string;
    title: string;
    onClick: any;
}

export default function MediaCard({ imageSource, title, onClick }: MediaCardProps) {
    return (
        <Card sx={CardBoxStyles}>
            <Typography sx={CardTitleStyles}>{title}</Typography>
            <CardMedia
                component="img"
                height={Size.card.MEDIA_HEIGHT}
                image={imageSource}
                alt={title}
            />
        </Card>
    )
};

