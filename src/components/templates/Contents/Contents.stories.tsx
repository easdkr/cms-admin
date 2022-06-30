import { ThemeProvider } from "@mui/material";
import { Meta, Story } from "@storybook/react";

import { darktheme, GlobalStyle } from "styles";
import Contents from ".";
import { ContentsDefaultData } from "./Contents.datas";

export default {
    title: 'Templates/Contents',
    component: Contents,
} as Meta;

const Template: Story<any> = (args) => {
    return (
        <ThemeProvider theme={darktheme}>
            <GlobalStyle />
            <Contents {...args} />
        </ThemeProvider>
    )
}

export const Default = Template.bind({});

Default.args = {
    contents: ContentsDefaultData
}