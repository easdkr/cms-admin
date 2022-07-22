import { Chip, TextField } from '@mui/material'
import Dropzone from 'components/molecules/FileDropZone'
import Settings from 'components/templates/Settings'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Inputs {
  value: string
  required: string
}
export default function index() {
  return <Dropzone />
}
