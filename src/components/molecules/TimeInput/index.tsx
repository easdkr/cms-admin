import { Box, TextField } from '@mui/material'
import { memo } from 'react'
import useTimeInput from './hooks/useTimeInput'
import { ContainerStyle, inputStyle } from './styles'

export interface TimeInputProps {
  timeInSeconds: number
  onChange: (value: number) => void
}

function TimeInput({ timeInSeconds, onChange }: TimeInputProps) {
  const { hoursProps, minutesProps, secondsProps } = useTimeInput(
    timeInSeconds,
    onChange,
  )
  return (
    <Box sx={ContainerStyle}>
      <TextField {...hoursProps} />
      <TextField sx={inputStyle} {...minutesProps} />
      <TextField sx={inputStyle} {...secondsProps} />
    </Box>
  )
}

export default memo(TimeInput)
