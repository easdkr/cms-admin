import { Box, createTheme, Modal, Typography } from "@mui/material";
import { ContentDetails } from "models/contents";
import Strings from "utils/constants/strings";
import { ContentsDetailLayout } from "./styles";

interface Props {
    open: boolean;
    onClose: any;
    contentDetails: ContentDetails
}

export default function ContentsDetails({ open, onClose, contentDetails }: Props) {
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
                    {contentDetails && contentDetails.title}
                </Typography>
            </ContentsDetailLayout>
        </Modal>
    )
};
