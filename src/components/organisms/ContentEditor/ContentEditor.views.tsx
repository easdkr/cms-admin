import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  TextFieldProps,
} from '@mui/material'
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
  LocalizationProvider,
} from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import FormHeader from 'components/atoms/FormHeader'
import FormSelect, { FormSelectProps } from 'components/molecules/FormSelect'
import TagInput, { TagInputProps } from 'components/molecules/TagInput'
import TimeInput, { TimeInputProps } from 'components/molecules/TimeInput'
import { Category, ContentDetailsData } from 'models/contents'
import Strings from 'utils/constants/strings'
import { ContentsDetailLayoutStyles } from './styles'

export interface ContentEditorViewsProps {
  contentsDetailsData: ContentDetailsData
  categories: Category[]
  categoryProps: FormSelectProps<Category>
  titleProps: TextFieldProps
  authorProps: TextFieldProps
  descriptionProps: TextFieldProps
  runningTimeProps: TimeInputProps
  tagProps: TagInputProps
  recordedLocationProps: TextFieldProps
  recordedAtProps: any
  lengthProps: TextFieldProps
}

function ContentEditorViews({
  categories,
  contentsDetailsData,
  titleProps,
  categoryProps,
  authorProps,
  descriptionProps,
  runningTimeProps,
  tagProps,
  recordedLocationProps,
  recordedAtProps,
  lengthProps,
}: ContentEditorViewsProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '75%',
        }}
      >
        <Stack spacing={2}>
          <FormHeader text={Strings.contents.DETAIL_HEADER} />
          <FormSelect {...categoryProps} />

          {/* title */}
          <TextField {...titleProps} />

          {/* author */}
          <TextField {...authorProps} />

          {/* description */}
          <TextField multiline rows={5} {...descriptionProps} />

          {/* running time */}
          <TimeInput {...runningTimeProps} />

          {/* recordedLocation */}
          <TextField {...recordedLocationProps} />

          {/* recorded at */}
          <DesktopDatePicker
            {...recordedAtProps}
            renderInput={(params: any) => (
              <TextField error={false} disabled {...params} />
            )}
          />

          {/* tag */}
          <TagInput {...tagProps} />

          {/* length = assets size */}
          <TextField disabled {...lengthProps} />
        </Stack>
      </Box>
    </LocalizationProvider>
  )
}

export default ContentEditorViews
