import {
  Box,
  FormHelperText,
  MenuItem,
  MenuItemProps,
  Modal,
  Select,
  SelectChangeEvent,
  SelectProps,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material'
import FormHeader from 'components/atoms/FormHeader'
import FormSelect, { FormSelectProps } from 'components/molecules/FormSelect'
import TagInput from 'components/molecules/TagInput'
import { useInput } from 'hooks/useInput'
import { Category, ContentDetailsData } from 'models/contents'
import { useEffect, useState } from 'react'
import Strings from 'utils/constants/strings'
import { ContentsDetailLayoutStyles } from './styles'

export interface ContentsDetailsProps {
  open: boolean
  onClose?: (event: any, reason: 'backdropClick' | 'escapeKeyDown') => void
  contentDetailsData: ContentDetailsData
  categories: Category[]
  categoryProps: FormSelectProps<Category>
  titleProps: TextFieldProps
  authorProps: TextFieldProps
  descriptionProps: TextFieldProps
}

export default function ContentsDetails({
  open,
  onClose,
  contentDetailsData,
  categories,
  categoryProps,
  titleProps,
  authorProps,
  descriptionProps,
}: ContentsDetailsProps) {
  const input = useInput('')

  useEffect(() => {
    return () => {
      console.log('close')
      input.reset()
    }
  }, [])

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={ContentsDetailLayoutStyles}>
        {/* 모달헤더 */}
        <FormHeader text={Strings.contents.DETAIL_HEADER} />

        {/* category  */}
        <FormSelect {...categoryProps} />

        {/* title */}
        <TextField {...titleProps} />

        {/* author */}
        <TextField {...authorProps} />
      </Box>
    </Modal>
  )
}
