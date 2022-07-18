import { Chip, TextField } from '@mui/material'
import Dropzone from 'components/atoms/FileDropZone'
import Settings from 'components/templates/Settings'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Inputs {
  value: string
  required: string
}
export default function index() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('value')} />
      <TextField {...register('required', { required: true })} />
      {errors.required && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
  return <Chip />
}
