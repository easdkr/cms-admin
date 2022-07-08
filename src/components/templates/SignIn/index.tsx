import { Box } from '@mui/material'
import SignInForm from 'components/organisms/SignInForm'
import { memo } from 'react'
import { SignInLayoutStyles } from './styles'

function SignIn() {
  return (
    <Box sx={SignInLayoutStyles}>
      <SignInForm />
    </Box>
  )
}

export default memo(SignIn)
