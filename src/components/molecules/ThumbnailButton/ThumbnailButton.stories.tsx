import { Box, ThemeProvider } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import { darktheme, GlobalStyle } from 'styles'
import ThumbnailButton from '.'

export default {
  title: 'Molecules/ThumbnailButton',
  component: ThumbnailButton,
} as Meta

// eslint-disable-next-line react/function-component-definition
const Template: Story = () => {
  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <Box sx={{ width: '50%' }}>
        <ThumbnailButton sx={{ width: 165 }} />
      </Box>
    </ThemeProvider>
  )
}

export const Default = Template.bind({})
