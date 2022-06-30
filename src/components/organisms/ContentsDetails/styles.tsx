import { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Colors from "utils/styles/colors";

export const ContentsDetailLayout = styled(Box)({
    display: "flex",
    width: "50%",
    top: '50%',
    left: '50%',
    backgroundColor: Colors.Modal.BACKGROUND,
    transform: 'translate(-50%, -50%)',
    position: 'absolute' as 'absolute',
})
