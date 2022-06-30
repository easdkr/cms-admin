import { Box, Modal } from "@mui/material";
import ContentsDetails from "components/organisms/ContentsDetails";
import Contents from "components/templates/Contents";
import useContents from "hooks/useContents"
import { Content } from "models/contents";
import { useEffect, useState } from "react";



export default function ContentsPage() {
    const {
        contents,
        handleContentsCardClick,
        handleModalClose, modalOpen,
        contentDetails
    } = useContents();

    return (
        <>
            <Contents
                onCardClick={handleContentsCardClick}
                contents={contents}
            />
            <ContentsDetails contentDetails={contentDetails} open={modalOpen} onClose={handleModalClose} />
            {/* <Modal
                open={modalOpen}
                onClose={handleModalClose}
            >
                <Box sx={style}>
                    <ContentsDetails />
                </Box>
            </Modal> */}
        </>
    )
};
