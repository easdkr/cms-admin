import { SxProps, Theme } from '@mui/material'
import Colors from 'utils/styles/colors'
import Size from 'utils/styles/size'

export const ContentsDetailLayoutStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: Size.contentsDetail.LAYOUT_WIDTH,
  top: '50%',
  left: '50%',
  backgroundColor: Colors.Modal.BACKGROUND,
  transform: 'translate(-50%, -50%)',
  position: 'absolute'
} as SxProps
