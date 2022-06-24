
import { Translate } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, SxProps, Theme, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import Size from "utils/styles/size";
import { CardContainer } from "./styled";
// import Size from "utils/styles/size";

export interface MediaCardProps {
    imageSource: string;
    width?: any;
    title: string;
}

export default function MediaCard({ imageSource, width, title }: MediaCardProps) {
    return (
        <>
            <CardContainer maxWidth={width} padding={Size.card.CONTAINER_PADDING}>
                <CardMedia
                    component="img"
                    height="200"
                    image={imageSource}
                    alt="Paella dish"
                />
                {/* <CardContent>
                    <Typography variant="body2" component={"div"}>
                        {`${title}`}
                    </Typography>
                    <Typography variant="caption" component={"div"}>
                        Category
                    </Typography>
                </CardContent> */}
            </CardContainer>
        </>
    )
};

