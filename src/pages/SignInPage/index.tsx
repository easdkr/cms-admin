import SignIn from 'components/templates/SignIn'
import useAuth from 'hooks/useAuth'
import { memo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function SignInPage() {
  const { checkAuth } = useAuth()

  useEffect(() => {
    checkAuth()
  }, [])

  return <SignIn />
}

export default memo(SignInPage)
