import { Card, CardMedia, styled, SxProps } from '@mui/material'
import Colors from 'utils/styles/colors'
import Size from 'utils/styles/size'

export const CardBoxStyles = {
  width: Size.card.CONTAINER_WIDTH,
  padding: Size.card.CONTAINER_PADDING,
  margin: Size.card.CONTAINER_MARGIN,
} as SxProps

export const CardTitleStyles = {
  height: Size.card.HEADER_HEIGHT,
  fontSize: Size.card.HEADER_FONT,
  color: 'HighlightText',
} as SxProps
