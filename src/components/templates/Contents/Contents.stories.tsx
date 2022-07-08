import { ThemeProvider } from '@mui/material'
import { Meta, Story } from '@storybook/react'

import { darktheme, GlobalStyle } from 'styles'
import Contents from '.'

export default {
  title: 'Templates/Contents',
  component: Contents,
} as Meta

// // eslint-disable-next-line react/function-component-definition
// const Template: Story<any> = args => {
//   return (
//     <ThemeProvider theme={darktheme}>
//       <GlobalStyle />
//       <Contents {...args} />
//     </ThemeProvider>
//   )
// }

// export const Default = Template.bind({})

// Default.args = {
//   contents: ContentsDefaultData,
// }
