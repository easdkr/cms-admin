import { token, tokenCheck } from 'apis/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthStorage } from 'services/Storages'

export default function useAuth() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      username: { value: string }
      password: { value: string }
    }

    const username = target.username.value
    const password = target.password.value
    signIn({ username, password })
  }

  const signIn = async (account: { username: string; password: string }) => {
    const res = await token(account)
    if (res && res.data.token) {
      const { token } = res.data
      AuthStorage.set(token)
      navigate('/')
    }
  }

  const handleLogout = () => {
    AuthStorage.remove()
    navigate('/signin')
  }

  const checkAuth = async () => {
    const check = await tokenCheck()
    return check
  }

  const getAuthToken = () => {
    return AuthStorage.get()
  }

  return {
    handleLogout,
    checkAuth,
    getAuthToken,
    handleSubmit,
  }
}
