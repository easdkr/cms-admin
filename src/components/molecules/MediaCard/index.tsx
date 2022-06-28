
import { Card, CardMedia, Typography } from "@mui/material";
import Size from "utils/styles/size";
import { CardTitle, CardLayout } from "./styles";

export interface MediaCardProps {
    imageSource: string;
    title: string;
}

export default function MediaCard({ imageSource, title }: MediaCardProps) {
    return (
        <>
            <CardLayout>
                <CardTitle>{title}</CardTitle>
                <CardMedia
                    component="img"
                    height={Size.card.MEDIA_HEIGHT}
                    image={imageSource}
                    alt={title}
                />
            </CardLayout>
        </>
    )
};

