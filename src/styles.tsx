import { createTheme } from '@mui/material'
import { createGlobalStyle } from 'styled-components'
import Colors from 'utils/styles/colors'
import Size from 'utils/styles/size'

export const GlobalStyle = createGlobalStyle`
#root,
html,
body {
    width: 100%;
    height: 100%;
    background: ${Colors.BACKGROUND};
    min-width: ${Size.MIN_WIDTH};
}
`

export const darktheme = createTheme({
  palette: {
    mode: 'dark',
  },
})
