import { Meta, Story } from "@storybook/react";
import SimpleButton, { SimpleButtonProps } from ".";

export default {
    title: 'SimpleButton',
    component: SimpleButton
} as Meta

const Template: Story<SimpleButtonProps> = (args) => <SimpleButton {...args} />

export const Default = Template.bind({});

Default.args = {
    variant: "outlined",
    color: "error",
    text: "Sign Out"
}
