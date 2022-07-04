import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { Meta, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import SignInForm from '.'

export default {
  title: 'Organisms/SignInForm',
  component: SignInForm,
} as Meta

const darktheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

// eslint-disable-next-line func-names
const Template = function (args : any) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darktheme}>
        <SignInForm {...args} />
      </ThemeProvider>
    </BrowserRouter>
  )
}
export const Default = Template.bind({})
