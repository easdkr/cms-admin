import { Box, createTheme, Modal, Typography } from "@mui/material";
import Strings from "utils/constants/strings";
import { ContentsDetailLayout } from "./styles";

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
interface Props {
    open: boolean;
    onClose: any;
}

export default function ContentsDetails({ open, onClose }: Props) {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <ContentsDetailLayout>
                <Typography
                    variant="h6"
                    color="HighlightText"
                    component={"div"}
                    gutterBottom
                >
                    {Strings.contents.DETAIL_HEADER}
                </Typography>
            </ContentsDetailLayout>
        </Modal>
    )
};
