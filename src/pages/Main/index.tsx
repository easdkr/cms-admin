import Header from 'components/organisms/Header'
import useAuth from 'hooks/useAuth'
import ContentsPage from 'pages/ContentsPage'
import SettingsPage from 'pages/SettingsPage'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

export default function Main() {
  const { checkAuth } = useAuth()

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/contents" element={<ContentsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </>
  )
}
