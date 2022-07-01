import Header from "components/organisms/Header";
import useAuth from "hooks/useAuth";
import ContentsPage from "pages/ContentsPage";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

export default function Main() {
    //TODO 
    const { checkAuth } = useAuth();

    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/contents" element={<ContentsPage />} />
                </Routes>
            </main>
        </>
    )
};
