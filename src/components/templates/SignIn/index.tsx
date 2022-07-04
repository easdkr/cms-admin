import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/system'
import SignInForm from 'components/organisms/SignInForm'
import Colors from 'utils/styles/colors'
import { SignInLayoutStyles } from './styles'

interface Props {
  onInputChange: (e: any) => void
  onLogin: () => Promise<void>
  onEnterKeyDown: (e: any) => void
}
const darkTheme = createTheme
function SignIn({ onInputChange, onLogin, onEnterKeyDown }: Props) {
  return (
    <Box sx={SignInLayoutStyles}>
      <SignInForm onInputChange={onInputChange} onLogin={onLogin} onEnterKeyDown={onEnterKeyDown} />
    </Box>
  )
}

export default SignIn
