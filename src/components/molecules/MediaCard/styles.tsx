import { Card, CardMedia, styled, Typography } from "@mui/material";
import Colors from "utils/styles/colors";
import Size from "utils/styles/size";

export const CardLayout = styled(Card)({
    width: Size.card.CONTAINER_WIDTH,
    padding: Size.card.CONTAINER_PADDING,
    margin: Size.card.CONTAINER_MARGIN,
    backgroundColor: Colors.Card.CONTAINER,
})

export const CardTitle = styled(Typography)({
    height: Size.card.HEADER_HEIGHT,
    fontSize: Size.card.HEADER_FONT,
});