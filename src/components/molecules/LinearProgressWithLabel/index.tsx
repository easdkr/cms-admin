import { LinearProgress, LinearProgressProps, Typography } from '@mui/material'
import { Box } from '@mui/system'
import {
  labelContainerSx,
  linearProgressContainerSx,
  linearProgressWithLabelLayoutSx,
} from './styles'

export default function LinearProgressWithLabel(props: LinearProgressProps) {
  return (
    <Box sx={linearProgressWithLabelLayoutSx}>
      <Box sx={linearProgressContainerSx}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={labelContainerSx}>
        <Typography variant="body2" color="HighlightText">
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {props.value}
        </Typography>
      </Box>
    </Box>
  )
}
