import { ThemeProvider } from '@emotion/react'
import { Meta, Story } from '@storybook/react'
import { darktheme, GlobalStyle } from 'styles'
import SignIn from '.'

export default {
  title: 'Templates/SignIn',
  component: SignIn,
} as Meta

// eslint-disable-next-line react/function-component-definition
const Template: Story<any> = args => {
  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <SignIn {...args} />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})

Default.args = {
  // onInputChange: () => {},
  // onLogin: () => {},
  // onEnterKeyDown: () => {},
}
