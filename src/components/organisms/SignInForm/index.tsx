
import useAuth from "hooks/useAuth";
import { Link } from "react-router-dom";
import LogoImage from "components/atoms/LogoImage";
import SimpleButton from "components/atoms/SimpleButton";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
    onInputChange: (e: any) => void;
    onLogin: () => Promise<void>;
    onEnterKeyDown: (e: any) => void;
}

export default function SignInForm({
    onInputChange,
    onLogin,
    onEnterKeyDown
}: Props) {

    const fieldStyle = {
        display: "flex",
        justifyContent: "center",
        margin: "0.5rem"
    }

    return (
        <>
            <LogoImage />

            <TextField
                label="username"
                name="username"
                type="text"
                onChange={onInputChange}
            />

            <TextField
                label="password"
                name="password"
                type="password"
                onChange={onInputChange}
                onKeyDown={onEnterKeyDown}
            />
            <Box
                sx={{ marginTop: "0.5rem" }}
            >

                <SimpleButton
                    text="Sign in"
                    fontColor={'#FFF'}
                    color={'info'}
                    variant={"contained"}
                    onClick={onLogin}
                />
            </Box>
        </>
    )
}

