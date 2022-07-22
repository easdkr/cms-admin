import {
  Autocomplete,
  AutocompleteChangeReason,
  Box,
  Button,
  Stack,
  TextField,
  TextFieldProps,
} from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import FormHeader from 'components/atoms/FormHeader'
import ThumbnailButton from 'components/molecules/ThumbnailButton'
import FormSelect, { FormSelectProps } from 'components/molecules/FormSelect'
import TimeInput, { TimeInputProps } from 'components/molecules/TimeInput'
import { Category } from 'models/contents'
import Strings from 'utils/constants/strings'
import { ContentEditorLayoutStyles } from './styles'

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
      <Box sx={ContentEditorLayoutStyles}>
        <Stack spacing={2}>
          <FormHeader text={Strings.contents.DETAIL_HEADER} />
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Stack spacing={2} sx={{ flexGrow: 2 }}>
              <FormSelect sx={{ width: '100%' }} {...categoryProps} />

              {/* title */}
              <TextField {...titleProps} />

              {/* author */}
              <TextField {...authorProps} />
            </Stack>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                flexGrow: 1,
              }}
            >
              {/* thumbnail */}
              <ThumbnailButton />
            </Box>
          </Box>

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
            renderInput={params => <TextField label="tags" {...params} />}
            freeSolo
            options={[]}
            value={tagsProps.value}
            onChange={tagsProps.onChange}
          />

          {/* length = assets size */}
          <TextField disabled {...lengthProps} />

          <Button sx={{ width: 100 }} color="primary" variant="contained">
            등록
          </Button>
        </Stack>
      </Box>
    </LocalizationProvider>
  )
}

export default ContentEditorViews
