import "bootstrap/dist/css/bootstrap.min.css";
import { AppLogoImage } from "./styles";
import useAuth from "./hooks/useAuth";
import FormInput from "components/molecules/FormInput";
import FormButton from "components/molecules/FormButton";


export default function Login() {
    const { handleInputChange, handleLogin, handleEnterKeyDown } = useAuth();

    return (
        <>
            <AppLogoImage width="100%" src="app_logo.png" alt="App Logo Image" />
            <FormInput
                name="username"
                type="text"
                placeholder="username"
                onChange={handleInputChange}
            />

            <FormInput
                name="password"
                type="password"
                placeholder="password"
                onChange={handleInputChange}
                onKeyDown={handleEnterKeyDown}
            />

            <FormButton
                text="Login"
                onClick={handleLogin}
            />
        </>
    )
}

