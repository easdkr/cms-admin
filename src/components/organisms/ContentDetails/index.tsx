import { Box, MenuItem, Modal, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import TagInput from 'components/molecules/TagInput'
import { useInput } from 'hooks/useInput'
import { Category, ContentDetailsData } from 'models/contents'
import { useEffect, useState } from 'react'
import Strings from 'utils/constants/strings'
import { ContentsDetailLayoutStyles } from './styles'

interface Props {
  open: boolean
  onClose: any
  contentDetailsData: ContentDetailsData
  categories: Category[]
  selectedCateory: string
  setSelectedCategory: any
}

export default function ContentsDetails({
  open,
  onClose,
  contentDetailsData,
  categories,
  selectedCateory,
  setSelectedCategory,
}: Props) {
  const handleChange = (e: SelectChangeEvent) => {
    setSelectedCategory(e.target.value as string)
  }

  const input = useInput('')
  const [tags, setTags] = useState<string[]>([])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') handleEnterKeyDown()
    else if (e.key == 'Backspace') handleBackspace()
  }

  const handleEnterKeyDown = () => {
    setTags([...tags, input.value])
    input.reset()
  }

  const handleBackspace = () => {
    if (input.isEmpty()) {
      tags.pop()
      setTags([...tags])
    }
  }
  useEffect(() => {
    return () => {
      console.log('close')
      input.reset()
      setTags([])
    }
  }, [])
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={ContentsDetailLayoutStyles}>
        <Typography variant="h6" color="HighlightText" component={'div'} gutterBottom>
          {Strings.contents.DETAIL_HEADER}
        </Typography>

        <TextField label={'title'} defaultValue={contentDetailsData?.title} />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCateory}
          onChange={handleChange}
        >
          {categories?.map((value, index) => (
            <MenuItem value={value.name} key={index}>
              {value.name}
            </MenuItem>
          ))}
        </Select>

        <TagInput
          label={'tags'}
          onKeyDown={handleKeyDown}
          value={input.value}
          onChange={input.onChange}
          tags={tags}
          chipProps={{
            color: 'primary',
            size: 'small',
          }}
        />
      </Box>
    </Modal>
  )
}
