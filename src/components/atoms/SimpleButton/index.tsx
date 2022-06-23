import { Button, ButtonProps } from "@mui/material";
import { MouseEventHandler } from "react";
import { StyledTextButton } from "./styles";

interface Props extends ButtonProps {
    text: string;
    fontColor: any;
    fontSize?: any;
}

export default function index(props: Props) {
    return (
        <StyledTextButton
            variant={props.variant}
            onClick={props.onClick}
            color={props.color}
            fontColor={props.fontColor}
            fontSize={props.fontSize}
        >
            {props.text}
        </StyledTextButton>
    )
};
