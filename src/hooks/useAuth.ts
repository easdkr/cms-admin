import { getToken, tokenCheck } from 'apis/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { AuthStorage } from 'services/storages'
import { tokenState } from 'stores/token'

export default function useAuth() {
  const navigate = useNavigate()

  const [account, setAccount] = useState({
    username: '',
    password: '',
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setAccount({ ...account, [name]: value })
  }

  const handleEnterKeyDown = (e: any) => {
    if (e.key === 'Enter') handleLogin()
  }

  const handleLogin = async () => {
    const payload = {
      username: account.username,
      password: account.password,
    }

    const res = await getToken(payload)

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
    handleInputChange,
    handleLogin,
    handleEnterKeyDown,
    handleLogout,
    checkAuth,
    getAuthToken,
  }
}
