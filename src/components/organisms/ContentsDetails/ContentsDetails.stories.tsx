import { createTheme, ThemeProvider } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "styles";
import ContentsDetails from ".";

export default {
    title: 'Organisms/ContentsDetails',
    component: ContentsDetails,
} as Meta

const darktheme = createTheme({
    palette: {
        mode: 'dark',
    }
})

const Template: Story<any> = (args) => {
    return (
        <ThemeProvider theme={darktheme}>
            <GlobalStyle />
            {/* <ContentsDetails /> */}
        </ThemeProvider>
    )
}

export const Default = Template.bind({});

Default.args = {

}