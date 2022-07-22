import { Stack, Typography } from '@mui/material'
import { uuidHex } from 'utils'

export interface FileListProps {
  files: File[]
}
export default function FileList({ files }: FileListProps) {
  return (
    <Stack spacing={1}>
      {files.map(file => (
        <Typography key={uuidHex()}>{file.name}</Typography>
      ))}
    </Stack>
  )
}
