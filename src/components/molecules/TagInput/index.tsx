import { InputAdornment, TextField } from '@mui/material'
import Tags, { TagData, TagProps } from 'components/atoms/Tags'
import React from 'react'
import useTagInput from './hooks/useTagInput'

export interface TagInputProps {
  label?: string
  color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning'
  tagValue: TagData[]
  onTagChange: (value: TagData[] | null) => void
}

function TagInput({ label, color, onTagChange, tagValue }: TagInputProps) {
  const {
    handleBlur,
    handleKeyDown,
    handleChange,
    handleTagDelete,
    value,
    tags,
  } = useTagInput(tagValue, onTagChange)

  const tagProp: TagProps = {
    datas: tags,
    onDelete: handleTagDelete,
    size: 'small',
  }

  return (
    <TextField
      label={label}
      color={color}
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Tags {...tagProp} />
          </InputAdornment>
        ),
      }}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  )
}

export default TagInput
