import { Button, ButtonProps, styled, Theme } from "@mui/material";
import { FontStyle } from "@mui/material/styles/createTypography";
import { SystemStyleObject, ResponsiveStyleValue, ColorObject } from "@mui/system";

interface Props extends ButtonProps {
    fontColor: SystemStyleObject<Theme> | ResponsiveStyleValue<any>;
    fontSize?: SystemStyleObject<Theme> | ResponsiveStyleValue<any>;
}

export const StyledTextButton = ({
    fontColor, children, variant, color, fontSize, onClick }: Props) => (
    <Button
        sx={{
            color: fontColor,
            fontWeight: 'bolder',
            fontSize: fontSize
        }}
        variant={variant}
        color={color}
        onClick={onClick}
    >
        {children}
    </Button >
)
