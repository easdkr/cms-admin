import { Button, ButtonProps } from "@mui/material";
import { MouseEventHandler } from "react";
import { StyledTextButton } from "./styles";

export interface SimpleButtonProps extends ButtonProps {
    text: string;
    fontColor?: any;
    fontSize?: any;
}

export default function index(props: SimpleButtonProps) {
    return (
        <StyledTextButton
            variant={props.variant}
            color={props.color}
            fontColor={props.fontColor}
            fontSize={props.fontSize}
            onClick={props.onClick}
        >
            {props.text}
        </StyledTextButton>
    )
};
