import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const CardContainer = styled(Card) <{ maxWidth: string | number, padding: any }>`
    max-width: ${props => props.maxWidth};
    padding: ${props => props.padding};
`