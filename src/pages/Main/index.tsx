import Header from "components/organisms/Header";
import ContentsPage from "pages/ContentsPage";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AuthStorage } from "services/storages";
import { GlobalStyle } from "styles";

export default function Main() {
    const nav = useNavigate();

    useEffect(() => {
        const token = AuthStorage.get();
        if (!token) nav('/signin')
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
