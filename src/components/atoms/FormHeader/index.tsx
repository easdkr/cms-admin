import { Typography } from '@mui/material'

interface Props {
  text: string
}

export default function FormHeader({ text }: Props) {
  return (
    <Typography
      variant="h6"
      color="HighlightText"
      component="div"
      fontWeight="bolder"
      gutterBottom
    >
      {text}
    </Typography>
  )
}
