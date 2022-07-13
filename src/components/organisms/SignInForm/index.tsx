import { FormEvent, memo } from 'react'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import LogoImage from 'components/atoms/LogoImage'
import useAuth from 'hooks/useAuth'
import { ButtonBoxStyle, ButtonStyle, SignInBoxStyles } from './styles'

function SignInForm() {
  const { handleSubmit } = useAuth()
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={SignInBoxStyles}>
        <LogoImage />
        <TextField label="username" name="username" type="text" />

        <TextField label="password" name="password" type="password" />

        <Box sx={ButtonBoxStyle}>
          <Button
            type="submit"
            sx={ButtonStyle}
            color="info"
            variant="contained"
          >
            SIGN IN
          </Button>
        </Box>
      </Box>
    </form>
  )
}

export default memo(SignInForm)
