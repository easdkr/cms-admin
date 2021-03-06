import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Header from ".";


export default {
    title: 'Organisms/Header',
    component: Header
} as Meta

const Template: Story = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}

export const Default = Template.bind({});