
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Meta, Story } from "@storybook/react";
import SignInForm from ".";
import { BrowserRouter } from "react-router-dom";
export default {
    title: 'Organisms/SignInForm',
    component: SignInForm
} as Meta

const darktheme = createTheme({
    palette: {
        mode: 'dark',
    }
})

const Template: Story<any> = (args) => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={darktheme}>
                <SignInForm {...args} />
            </ThemeProvider >
        </BrowserRouter >
    )
}
export const Default = Template.bind({});

