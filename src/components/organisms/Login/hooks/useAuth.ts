import { AxiosResponse } from "axios";
import React, { useState } from "react";
import httpClient from "services/httpClient";
import routes from "utils/constants/routes";

export default function useAuth() {
    const [account, setAccount] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setAccount({ ...account, [name]: value });
    }

    const handleLogin = async () => {
        const res = await httpClient.post(routes.LOGIN, { username: account.username, password: account.password }) as AxiosResponse<any>
        if (res) {
            console.log(res.data.token);
        }
    }

    const handleEnterKeyDown = (e: any) => {
        if (e.key === 'Enter') handleLogin();
    }

    return {
        handleInputChange,
        handleLogin,
        handleEnterKeyDown
    };
};
