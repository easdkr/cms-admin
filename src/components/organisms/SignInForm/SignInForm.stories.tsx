
import { SignInBox, SignInContainer } from "components/templates/SignIn/styles";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Meta, Story } from "@storybook/react";
import SignInForm from ".";
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
        <ThemeProvider theme={darktheme}>
            <SignInContainer>
                <SignInBox>
                    <SignInForm {...args} />
                </SignInBox>
            </SignInContainer>
        </ThemeProvider>
    )
}
export const Default = Template.bind({});

