import { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HttpClient from "services/httpClient";
import { AuthStorage } from "services/storages";
import routes from "utils/constants/routes";

export default function useAuth() {
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setAccount({ ...account, [name]: value });
    }

    const handleEnterKeyDown = (e: any) => {
        if (e.key === 'Enter') handleLogin();
    }

    const handleLogin = async () => {
        const url = routes.LOGIN;
        const payload = {
            username: account.username,
            password: account.password
        }

        const res = await HttpClient.post(url, payload) as AxiosResponse<any>

        if (res && res.data.token) {
            AuthStorage.set(res.data.token);
            navigate('/contents');
        }
    }

    const handleLogout = () => {
        AuthStorage.remove();
        navigate('/')
    }

    return {
        handleInputChange,
        handleLogin,
        handleEnterKeyDown,
        handleLogout
    };
};
