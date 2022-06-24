
import { Translate } from "@mui/icons-material";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import Size from "utils/styles/size";

interface Props {
    imageSource: string;
    width?: any;
    title: string;
}

export default function MediaCard({ imageSource, width, title }: Props) {
    return (
        <>
            <Card sx={{
                maxWidth: `${Size.card.WIDTH}`,
            }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={imageSource}
                    alt="Paella dish"
                />
                {/* <CardMedia>
                    <div style={{ margin: "0.5rem 0.5rem 0rem 0.5rem", display: "flex", justifyContent: "center", height: `15vh` }}>
                        <img width={"100%"} src={imageSource} />
                    </div>
                </CardMedia> */}

                <CardContent >
                    <Typography variant="body2" component={"div"}>
                        {`${title}(Category)`}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
};

