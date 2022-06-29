import Header from "components/organisms/Header";
import useContents from "hooks/useContents";
import useMount from "hooks/useMount";
import ContentsPage from "pages/ContentsPage";
import { useEffect, useState } from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";

export default function Main() {
    const { handleGetList } = useContents();
    const [init, setInitialize] = useState<any>();
    const isMount = useMount();
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
    }, [])

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
