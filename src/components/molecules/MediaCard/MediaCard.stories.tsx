import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { Meta, Story } from '@storybook/react'
import { darktheme, GlobalStyle } from 'styles'
import Size from 'utils/styles/size'
import MediaCard, { MediaCardProps } from '.'

export default {
  title: 'Molecules/MediaCard',
  component: MediaCard,
} as Meta

// eslint-disable-next-line react/function-component-definition
const Template: Story<MediaCardProps> = args => {
  return (
    <div>
      <ThemeProvider theme={darktheme}>
        <GlobalStyle />
        <MediaCard {...args} />
      </ThemeProvider>
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  imageSource: 'https://d1lbsellgkzwc6.cloudfront.net/a36736b4320f40bb97c84a1f65ee97c0',
  title: 'BACKSTAGE',
}
