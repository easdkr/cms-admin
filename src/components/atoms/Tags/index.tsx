import { Chip } from '@mui/material'
import { ReactNode, useState } from 'react'
import { TagStyle } from './styles'

export interface TagData {
  id: number
  data: string
}

export interface TagProps {
  datas: TagData[]
  color?:
    | 'default'
    | 'error'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
  size?: 'small' | 'medium'
  onDelete?: (DataToDelete: TagData) => () => void
}

export default function Tags({ ...props }: TagProps) {
  return (
    <>
      {props.datas.map((data: TagData, index: number) => (
        <Chip
          sx={TagStyle}
          color={props.color}
          label={data.data}
          size={props.size}
          onDelete={props.onDelete(data)}
          key={`Tags, ${data.id}`}
        />
      ))}
    </>
  )
}
