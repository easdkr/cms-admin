import { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Colors from "utils/styles/colors";

export const ContentsDetailLayout = styled(Box)({
    padding: 1,
    display: "flex",
    width: "50%",
    top: '50%',
    left: '50%',
    backgroundColor: Colors.Modal.BACKGROUND,
    transform: 'translate(-50%, -50%)',
    position: 'absolute' as 'absolute',
})

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};