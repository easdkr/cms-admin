/* eslint-disable react/jsx-props-no-spreading */
import { Upload } from '@aws-sdk/lib-storage'
import {
  Alert,
  Box,
  Button,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from '@mui/material'
import LinearProgressWithLabel from 'components/molecules/LinearProgressWithLabel'
import { resolve } from 'node:path/win32'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { createParallerUploader } from 'services/AWSService'
import { uuidHex } from 'utils'
import Strings from 'utils/constants/strings'

const imageMimeType = /image\/(png|jpg|jpeg)/i

interface Thumbnail {
  file: File
  preview: string | ArrayBuffer
}

export default function Dropzone() {
  const [files, setFiles] = useState<Thumbnail[]>([])
  const [progress, setProgress] = useState<number>(0)
  const [open, setOpen] = useState(false)

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      const F: Thumbnail = {
        file,
        preview: null,
      }

      const fileReader = new FileReader()

      fileReader.onload = () => {
        setFiles(prev => [...prev, F])
      }

      fileReader.readAsDataURL(file)
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  })
  const upload = async () => {
    // eslint-disable-next-line no-underscore-dangle
    const _upload = async (file: Thumbnail) => {
      const uploader: Upload = await createParallerUploader(
        file.file,
        setProgress,
      )
      const res = await uploader.done()
      console.log(res)
    }

    return Promise.all(files.map((file: Thumbnail) => _upload(file)))
  }
  const handleClick = async () => {
    await upload()
    console.log('upload donnnnn')
  }

  return (
    <>
      <div {...getRootProps()}>
        <Stack
          spacing={2}
          sx={{
            background: '#787878',
            width: '100%',
            minHeight: '300px',
            maxHeight: '500px',
            overflowY: 'scroll',
          }}
        >
          <input {...getInputProps()} />

          <Box
            sx={{
              alignSelf: 'center',
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              padding: '2px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>
              {isDragActive
                ? Strings.contents.FILE_DROPZONE_ACTIVE
                : Strings.contents.FILE_DROPZONE_DEFAULT}
            </Typography>
          </Box>

          <Box>
            {files.map(item => (
              <p key={uuidHex()}>{item.file.name}</p>
            ))}
          </Box>

          <LinearProgressWithLabel value={progress} />
        </Stack>
      </div>
      <Button onClick={handleClick}>Upload</Button>

      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          HI?sdfasdfasdfasdf
        </Alert>
      </Snackbar>
    </>
  )
}
