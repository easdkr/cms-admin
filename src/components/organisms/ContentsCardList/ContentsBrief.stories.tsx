import { createTheme, ThemeProvider } from '@mui/material'
import { Meta, Story } from '@storybook/react'
import { GlobalStyle } from 'styles'
import { ContentsData } from './ContentsBrief.datas'
import ContentsBriefView, { ContentsBriefProps } from './ContentsBrief.views'

export default {
  title: 'Organisms/ContentsBrief',
  component: ContentsBriefView,
} as Meta

const darktheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

// eslint-disable-next-line react/function-component-definition
const Template: Story<ContentsBriefProps> = (args: ContentsBriefProps) => {
  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <ContentsBriefView {...args} />
    </ThemeProvider>
  )
}
export const Default = Template.bind({})

Default.args = {
  contents: ContentsData,
}
