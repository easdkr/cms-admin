import { Meta, Story } from '@storybook/react'
import Dropzone from '.'

export default {
  title: 'Atoms/Dropzone',
  component: Dropzone,
} as Meta

// eslint-disable-next-line react/function-component-definition
const Template: Story<any> = (args: any) => {
  return <Dropzone {...args} />
}

export const Default = Template.bind({})

Default.args = {}
