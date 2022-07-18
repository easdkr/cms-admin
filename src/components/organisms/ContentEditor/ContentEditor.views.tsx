import {
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteProps,
  AutocompleteValue,
  Box,
  Stack,
  TextField,
  TextFieldProps,
  UseAutocompleteProps,
} from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import FormHeader from 'components/atoms/FormHeader'
import FormSelect, { FormSelectProps } from 'components/molecules/FormSelect'
import TimeInput, { TimeInputProps } from 'components/molecules/TimeInput'
import { Category } from 'models/contents'
import Strings from 'utils/constants/strings'

export interface TagsProps {
  value: any[]
  onChange: (
    event: React.SyntheticEvent,
    value: any,
    reason: AutocompleteChangeReason,
    details?: any,
  ) => void
}

export interface ContentEditorViewsProps {
  categoryProps: FormSelectProps<Category>
  titleProps: TextFieldProps
  authorProps: TextFieldProps
  descriptionProps: TextFieldProps
  runningTimeProps: TimeInputProps
  recordedLocationProps: TextFieldProps
  recordedAtProps: any
  lengthProps: TextFieldProps
  tagsProps: TagsProps
}

function ContentEditorViews({
  titleProps,
  categoryProps,
  authorProps,
  descriptionProps,
  runningTimeProps,
  recordedLocationProps,
  recordedAtProps,
  lengthProps,
  tagsProps,
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

          {/* tags */}
          <Autocomplete
            multiple
            renderInput={params => <TextField {...params} />}
            freeSolo
            options={[]}
            value={tagsProps.value}
            onChange={tagsProps.onChange}
          />

          {/* length = assets size */}
          <TextField disabled {...lengthProps} />
        </Stack>
      </Box>
    </LocalizationProvider>
  )
}

export default ContentEditorViews
