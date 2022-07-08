import { InputAdornment, TextField } from '@mui/material'
import Tags, { TagProps } from 'components/atoms/Tags'
import React from 'react'
import useTagInput from './hooks/useTagInput'

export interface TagInputProps {
  label?: string
  color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning'
  tagProps: TagProps
}

function TagInput({ label, color, tagProps }: TagInputProps) {
  const { handleBlur, handleKeyDown, handleChange, value } = useTagInput(
    tagProps.datas,
    tagProps.setDatas,
  )

  return (
    <TextField
      label={label}
      color={color}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Tags {...tagProps} />
          </InputAdornment>
        ),
      }}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  )
}

export default React.memo(TagInput)
