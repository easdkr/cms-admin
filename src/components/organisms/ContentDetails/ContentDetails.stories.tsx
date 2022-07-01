import { createTheme, ThemeProvider } from "@mui/material";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "styles";
import ContentsDetails from ".";
import { CategoryDefaultData, ContentDetailsDefaultData } from "./ContentDetails.data";

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
            <ContentsDetails {...args} />
        </ThemeProvider>
    )
}

export const Default = Template.bind({});

Default.args = {
    open: true,
    onClose: () => { },
    contentDetailsData: ContentDetailsDefaultData,
    categories: CategoryDefaultData,
}