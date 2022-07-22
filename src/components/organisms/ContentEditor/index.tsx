import { Button, Dialog, DialogContent } from '@mui/material'
import ContentEditorViews from './ContentEditor.views'
import useContentEditor from './hooks/useContentEditor'

export interface ContentsDetailsProps {
  open: boolean
  onClose?: (event: any, reason: 'backdropClick' | 'escapeKeyDown') => void
  selectedContentsId?: number
}

function ContentEditor({
  open,
  onClose,
  selectedContentsId,
}: ContentsDetailsProps) {
  const {
    handleDialogClose,
    authorProps,
    categoryProps,
    descriptionsProps,
    lengthProps,
    recordedAtProps,
    recordedLocationProps,
    runningTimeProps,
    titleProps,
    tagsProps,
  } = useContentEditor(selectedContentsId, open)

  return (
    <Dialog fullWidth open={open} onClose={handleDialogClose(onClose)}>
      <DialogContent>
        <ContentEditorViews
          categoryProps={categoryProps}
          titleProps={titleProps}
          authorProps={authorProps}
          descriptionProps={descriptionsProps}
          lengthProps={lengthProps}
          recordedAtProps={recordedAtProps}
          recordedLocationProps={recordedLocationProps}
          runningTimeProps={runningTimeProps}
          tagsProps={tagsProps}
        />
      </DialogContent>
    </Dialog>
  )
}

export default ContentEditor
