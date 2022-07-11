import { Box, Dialog, DialogContent, TextFieldProps } from '@mui/material'
import { FormSelectProps } from 'components/molecules/FormSelect'
import { useInput } from 'hooks/useInput'
import { Category } from 'models/contents'
import { useEffect } from 'react'
import { UNSET } from 'utils/constants/Integers'
import ContentEditorViews from './ContentEditor.views'
import useContentEditor from './hooks/useContentEditor'

export interface ContentsDetailsProps {
  open: boolean
  onClose?: (event: any, reason: 'backdropClick' | 'escapeKeyDown') => void
  selectedContentsId?: number
  // titleProps: TextFieldProps
  // authorProps: TextFieldProps
  // descriptionProps: TextFieldProps
}

function ContentEditor({
  open,
  onClose,
  selectedContentsId,
}: ContentsDetailsProps) {
  const {
    categories,
    contentDetailsData,
    handleDialogClose,
    authorProps,
    categoryProps,
    descriptionsProps,
    lengthProps,
    recordedAtProps,
    recordedLocationProps,
    runningTimeProps,
    tagsProps,
    titleProps,
  } = useContentEditor(selectedContentsId, open)
  return (
    <Dialog fullWidth open={open} onClose={handleDialogClose(onClose)}>
      <DialogContent>
        <ContentEditorViews
          categories={categories}
          contentsDetailsData={contentDetailsData}
          categoryProps={categoryProps}
          titleProps={titleProps}
          authorProps={authorProps}
          descriptionProps={descriptionsProps}
          lengthProps={lengthProps}
          recordedAtProps={recordedAtProps}
          recordedLocationProps={recordedLocationProps}
          runningTimeProps={runningTimeProps}
          tagProps={tagsProps}
        />
      </DialogContent>
    </Dialog>
  )
}

export default ContentEditor
