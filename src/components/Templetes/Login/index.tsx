import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css";
import { SubmitButton } from "../../Atoms/SubmitButton";

const ItemBox = styled.div`
    margin-bottom:1rem!important;
    display:flex;
    justify-content:center;
`;

const AppLogoImage = styled.img`
    align-items: center;
    margin-bottom: 1rem;
`;

export default function Login() {
    return (
        <form>
            <AppLogoImage width="100%" src="app_logo.png" alt="App Logo" />
            <ItemBox>
                <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                />
            </ItemBox>

            <ItemBox>
                <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    />
            </ItemBox>

            <ItemBox>
                <SubmitButton type="submit">
                    Login
                </SubmitButton>
            </ItemBox>
        </form>
    )
}

