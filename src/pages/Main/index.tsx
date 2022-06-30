import Header from "components/organisms/Header";
import useContents from "hooks/useContents";
import useMount from "hooks/useMount";
import ContentsPage from "pages/ContentsPage";
import { useEffect, useState } from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";

export default function Main() {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/contents" element={<ContentsPage />} />
                </Routes>
            </main>
        </>
    )
};
