import { memo } from 'react'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import LogoImage from 'components/atoms/LogoImage'
import useAuth from 'hooks/useAuth'
import { ButtonBoxStyle, ButtonStyle, SignInBoxStyles } from './styles'

function SignInForm() {
  const { handleInputChange, handleEnterKeyDown, handleLogin } = useAuth()

  return (
    <Box sx={SignInBoxStyles}>
      <LogoImage />

      <TextField
        label="username"
        name="username"
        type="text"
        onChange={handleInputChange}
      />

      <TextField
        label="password"
        name="password"
        type="password"
        onChange={handleInputChange}
        onKeyDown={handleEnterKeyDown}
      />

      <Box sx={ButtonBoxStyle}>
        <Button
          sx={ButtonStyle}
          color="info"
          variant="contained"
          onClick={handleLogin}
        >
          SIGN IN
        </Button>
      </Box>
    </Box>
  )
}

export default memo(SignInForm)
