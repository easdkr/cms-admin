import { LogoImg } from './styles'

const LOGO_IMAGE_ALT = "app logo image";

function LogoImage() {
  return <LogoImg src="app_logo.png" alt={LOGO_IMAGE_ALT} />
}

export default LogoImage
