import { Chip } from '@mui/material'
import { ReactNode } from 'react'
import { TagStyle } from './styles'

export interface TagData {
  id: number
  data: ReactNode
}

export interface TagProps {
  datas: TagData[]
  setDatas: React.Dispatch<TagData[]>
  color?:
    | 'default'
    | 'error'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
  size?: 'small' | 'medium'
}

export default function Tags({ ...props }: TagProps) {
  const handleDelete = (DataToDelete: TagData) => () => {
    props.setDatas(
      props.datas.filter((data: TagData) => data.id !== DataToDelete.id),
    )
  }

  return (
    <>
      {props.datas.map((data: TagData) => (
        <Chip
          sx={TagStyle}
          color={props.color}
          label={data.data}
          size={props.size}
          onDelete={handleDelete(data)}
          key={`tags, ${data.id}`}
        />
      ))}
    </>
  )
}
