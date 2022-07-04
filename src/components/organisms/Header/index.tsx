import LogoImage from 'components/atoms/LogoImage'
import useAuth from 'hooks/useAuth'
import { useEffect, useState, useTransition } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Colors from 'utils/styles/colors'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Button, useMediaQuery } from '@mui/material'
import Size from 'utils/styles/size'
import { HeaderLayout, LogoBox, LogoutBox, MenuBox, MenuItem, SignOutButtonStyle, ToggleBox } from './styles'

interface SignOutButtonProps {
  handleLogout: any
}

function SignOutButton({ handleLogout }: SignOutButtonProps) {
  const isTablet = useMediaQuery(`(max-width: ${Size.TABLET})`)
  return isTablet ? (
    <ExitToAppRoundedIcon color="error" onClick={handleLogout} />
  ) : (
    <Button sx={SignOutButtonStyle} variant="outlined" color="error" onClick={handleLogout}>
      Sign Out
    </Button>
  )
}

export default function Header() {
  const [isToggled, setIsToggled] = useState(false)
  const [routePath, setRoutePath] = useState('')
  const { handleLogout, getAuthToken } = useAuth()
  const nav = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setRoutePath(location.pathname)
  }, [location.pathname])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {routePath !== '/signin' && getAuthToken() ? (
        <HeaderLayout backgroundColor={Colors.HEADER}>
          <ToggleBox
            onClick={() => {
              setIsToggled(!isToggled)
            }}
          >
            <MenuRoundedIcon color="action" />
          </ToggleBox>

          <LogoBox largeWidthOrder={1} smallWidthOrder={2}>
            <LogoImage />
          </LogoBox>

          <LogoutBox largeWidthOrder={3} smallWidthOrder={3}>
            <SignOutButton handleLogout={handleLogout} />
          </LogoutBox>

          <MenuBox isToggled={isToggled} largeWidthOrder={2} smallWidthOrder={4}>
            <MenuItem
              onClick={() => {
                setIsToggled(!isToggled)
                nav('/contents')
              }}
            >
              CONTENTS
            </MenuItem>
            <MenuItem>SETTINGS</MenuItem>
            <MenuItem>MODELS</MenuItem>
          </MenuBox>
        </HeaderLayout>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <></>
      )}
    </>
  )
}
