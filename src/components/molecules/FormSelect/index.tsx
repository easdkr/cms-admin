import {
  Box,
  FormHelperText,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material'
import { labelStyle } from './styles'

export interface FormSelectProps<T> extends SelectProps {
  items: T[]
}
export default function FormSelect({ ...props }: FormSelectProps<any>) {
  return (
    <Box>
      <FormHelperText sx={labelStyle}>{props.label}</FormHelperText>
      <Select {...props}>
        {props.items.map(item => (
          <MenuItem value={item.name} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}
