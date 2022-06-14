
import { fireEvent, render } from "@testing-library/react";
import LoginPage from "./pages/LoginPage";

describe("<LoginPage/>", () => {
    it("login test", () => {
        const { getByPlaceholderText, getByText } = render(
            <LoginPage />
        );
        const usernameInput = getByPlaceholderText("username");
        const passwordInput = getByPlaceholderText("password");
        const loginButton = getByText("Login");

        fireEvent.change(usernameInput, { target: { value: "admin" } });
        fireEvent.change(passwordInput, { target: { value: "@circle" } });
        fireEvent.click(loginButton);
    })
})