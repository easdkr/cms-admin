import { Button } from '@mui/material'
import { s3Upload } from 'services/AWSService'

export default function Dropzone() {
  return (
    <Button
      onClick={() => {
        s3Upload('test.txt')
      }}
    >
      Upload
    </Button>
  )
}
