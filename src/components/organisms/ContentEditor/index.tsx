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
  const { categories, contentDetailsData, handleDialogClose } =
    useContentEditor(selectedContentsId)
  const categoryInput = useInput(contentDetailsData.category.name)
  const titleInput = useInput(contentDetailsData.title)
  // const authorInput = useInput(contentDetailsData.author)
  // const descriptionInput = useInput(contentDetailsData.description)

  useEffect(() => {
    categoryInput.set(contentDetailsData.category.name)
  }, [categories, contentDetailsData])

  const categoryProps: FormSelectProps<Category> = {
    label: 'category',
    value: categoryInput.value,
    onChange: categoryInput.onChange,
    items: categories,
  }

  const titleProps: TextFieldProps = {
    label: 'title',
    value: titleInput.value,
    onChange: titleInput.onChange,
  }

  return (
    <Dialog fullWidth open={open} onClose={handleDialogClose(onClose)}>
      <DialogContent>
        {/* <ContentEditorViews
          categories={categories}
          contentsDetailsData={contentDetailsData}
          categoryProps={categoryProps}
          titleProps={titleProps}
          
        /> */}
      </DialogContent>
    </Dialog>
  )
}

export default ContentEditor
