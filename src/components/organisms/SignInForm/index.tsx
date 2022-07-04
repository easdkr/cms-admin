import LogoImage from 'components/atoms/LogoImage'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { ButtonBoxStyle, ButtonStyle, SignInBoxStyles } from './styles'

interface Props {
  onInputChange: (e: any) => void
  onLogin: () => Promise<void>
  onEnterKeyDown: (e: any) => void
}

export default function SignInForm({ onInputChange, onLogin, onEnterKeyDown }: Props) {
  return (
    <Box sx={SignInBoxStyles}>
      <LogoImage />
      <TextField label="username" name="username" type="text" onChange={onInputChange} />

      <TextField label="password" name="password" type="password" onChange={onInputChange} onKeyDown={onEnterKeyDown} />

      <Box sx={ButtonBoxStyle}>
        <Button sx={ButtonStyle} color="info" variant="contained" onClick={onLogin}>
          SIGN IN
        </Button>
      </Box>
    </Box>
  )
}
