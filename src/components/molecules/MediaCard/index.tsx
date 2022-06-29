
import { Card, CardMedia, Typography } from "@mui/material";
import Size from "utils/styles/size";
import { CardTitle, CardLayout } from "./styles";

export interface MediaCardProps {
    imageSource: string;
    title: string;
    onClick: any;
}

export default function MediaCard({ imageSource, title, onClick }: MediaCardProps) {
    return (
        <>
            <CardLayout onClick={onClick}>
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

