import { ButtonBase, styled, SxProps } from '@mui/material'
import { Box } from '@mui/system'

export const ImageButton = styled(ButtonBase)({
  position: 'relative',
  height: 200,
  width: 150,
  background: '#878787',
  boxShadow: '5px 5px 3px #000',
  borderRadius: '10px',
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid #FFF3',
    },
  },
})

export const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
  borderRadius: '10px',
}))

export const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  borderRadius: '10px',
})

export const InvisibleBox = styled(Box)({
  display: 'none',
})

export const IconStyles: SxProps = {
  position: 'relative',
  p: 4,
}
