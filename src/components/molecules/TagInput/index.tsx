import { Chip, InputAdornment, TextField } from '@mui/material'
import { useInput } from 'hooks/useInput'
import React, { useEffect, useState } from 'react'
import { ChipStyles } from './styles'

// export interface TagInputProps {
//   label: string
//   value: string
//   tags: string[]
//   chipProps?: any
//   onKeyDown: (e: React.KeyboardEvent) => void
//   onChange: (e: React.ChangeEvent) => void
//   // eslint-disable-next-line react/require-default-props
//   color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning'
// }

// interface TagsProps {
//   tags: string[]
//   chipProps?: ChipProps
// }

// export interface ChipProps {
//   color: 'default' | 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning'
//   size: 'small' | 'medium'
//   onDelete: (event: any) => void
// }

// function Tag({ tags, chipProps }: TagsProps) {
//   return (
//     <>
//       {tags.map((data, index) => (
//         <Chip
//           color={chipProps?.color}
//           sx={ChipStyles}
//           key={}
//           label={data}
//           size={chipProps?.size}
//           onDelete={() => {
//             chipProps.onDelete(data)
//           }}
//         />
//       ))}
//     </>
//   )
// }

export default function TagInput({ ...props }) {
  return (
    // <TextField
    //     color={props.color}
    //     value={props.value}
    //     InputProps={{
    //       startAdornment: (
    //         <InputAdornment position="start">
    //           <Tag tags={props.tags} chipProps={props.chipProps} />
    //         </InputAdornment>
    //       ),
    //     }}
    //     onChange={e => {
    //       props.onChange(e)
    //     }}
    //     {...props}
    //   />
    <div/>
  )
}
