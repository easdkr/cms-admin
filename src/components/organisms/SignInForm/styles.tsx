import { SxProps } from "@mui/material";
import Colors from "utils/styles/colors";
import Size from "utils/styles/size";

export const ButtonBoxStyle = {
    marginTop: "0.5rem"
} as SxProps;

export const ButtonStyle = {
    color: Colors.SignIn.BUTTON_FONT_COLOR,
    fontWeight: "bolder",
} as SxProps;

export const SignInBoxStyles = {
    width: Size.signIn.BOX_WIDTH,
    height: Size.signIn.BOX_HEIGHT,
    margin: Size.signIn.BOX_MARGIN,
    background: Colors.SignIn.BACKGROUND,
    padding: Size.signIn.BOX_PADDING,
    borderRadius: Size.signIn.BOX_BORDER_RADIUS,
    transition: "all 0.3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
} as SxProps;
