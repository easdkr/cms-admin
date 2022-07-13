import { Paper, TextField } from '@mui/material'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { uuidHex } from 'utils'

const imageMimeType = /image\/(png|jpg|jpeg)/i

interface Thumbnail {
  file: File
  preview: string | ArrayBuffer
}
export default function Dropzone() {
  const [files, setFiles] = useState<Thumbnail[]>([])

  const onDrop = (_files: File[]) => {
    _files.forEach(_file => {
      const fileReader = new FileReader()
      console.log(_file)

      fileReader.onloadend = () => {
        setFiles([...files, { file: _file, preview: fileReader.result }])
      }

      fileReader.readAsDataURL(_file)
    })
    // setFiles([...files, ..._files])
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <div
      style={{
        height: '500px',
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <Paper
        sx={{
          background: '#787878',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {isDragActive ? (
          <p style={{ textAlign: 'center' }}>Drop the files here ...</p>
        ) : (
          <p>Drag and Drop some files here, or click to select files</p>
        )}

        {files.map(item => (
          <div key={uuidHex()}>
            <p key={uuidHex()}>{item.file.name}</p>
            {item.file.type.match(imageMimeType) && (
              <img
                key={uuidHex()}
                width="100px"
                src={item.preview.toString()}
                alt="preview"
              />
            )}
          </div>
        ))}
      </Paper>
    </div>
  )
}
