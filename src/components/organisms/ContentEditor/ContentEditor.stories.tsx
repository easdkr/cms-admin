import {
  Box,
  Paper,
  SelectProps,
  TextField,
  TextFieldProps,
  ThemeProvider,
  Typography,
} from '@mui/material'
import { Meta, Story } from '@storybook/react'
import { TagData, TagProps } from 'components/atoms/Tags'
import { FormSelectProps } from 'components/molecules/FormSelect'
import { TagInputProps } from 'components/molecules/TagInput'
import { TimeInputProps } from 'components/molecules/TimeInput'
import useDatePicker from 'hooks/useDatePicker'
import { useInput } from 'hooks/useInput'
import { Category } from 'models/contents'
import { useState } from 'react'
import { darktheme, GlobalStyle } from 'styles'
import { formatBytes, stringsToTagData } from 'utils'

import {
  CategoryDefaultData,
  ContentDetailsDefaultData,
} from './ContentEditor.data'
import ContentEditorViews, {
  ContentEditorViewsProps,
} from './ContentEditor.views'

export default {
  title: 'Organisms/ContentsEditor',
  component: ContentEditorViews,
} as Meta

const contentDetailsData = ContentDetailsDefaultData
const categories = CategoryDefaultData

// eslint-disable-next-line react/function-component-definition
const Template: Story<ContentEditorViewsProps> = args => {
  const categoryInput = useInput(contentDetailsData.category.name)
  const titleInput = useInput(contentDetailsData.title)
  const authorInput = useInput(contentDetailsData.author)
  const descriptionInput = useInput(contentDetailsData.description)
  const [runningTime, setRunningTime] = useState(
    contentDetailsData.running_time,
  )

  const recordedLocationInput = useInput(contentDetailsData.recorded_location)
  const recordedAtInput = useDatePicker(
    new Date(contentDetailsData.recorded_at),
  )

  const [tags, setTags] = useState<TagData[]>(
    stringsToTagData(contentDetailsData.tags),
  )

  const [length, setLength] = useState(formatBytes(contentDetailsData.length))

  const categoryProps: FormSelectProps<Category> = {
    label: 'category',
    defaultValue: contentDetailsData.category.name,
    value: categoryInput.value,
    onChange: categoryInput.onChange,
    items: categories,
  }

  const titleProps: TextFieldProps = {
    label: 'title',
    defaultValue: contentDetailsData.title,
    value: titleInput.value,
    onChange: titleInput.onChange,
  }

  const authorProps: TextFieldProps = {
    label: 'author',
    defaultValue: contentDetailsData.author,
    value: authorInput.value,
    onChange: authorInput.onChange,
  }

  const descriptionsProps: TextFieldProps = {
    label: 'description',
    defaultValue: contentDetailsData.description,
    value: descriptionInput.value,
    onChange: descriptionInput.onChange,
  }

  const runningTimeProps: TimeInputProps = {
    timeInSeconds: runningTime,
    setTimeInSeconds: setRunningTime,
  }

  const recordedLocationProps: TextFieldProps = {
    label: '촬영 장소',
    value: recordedLocationInput.value,
    onChange: recordedLocationInput.onChange,
  }

  const recordedAtProps = {
    label: '촬영 시간',
    value: recordedAtInput.value,
    inputFormat: 'yyyy.MM.dd',
    onChange: recordedAtInput.onChange,
    renderInput: (params: any) => <TextField {...params} />,
  }

  const tagsProps: TagInputProps = {
    tagProps: { datas: tags, setDatas: setTags, size: 'small' } as TagProps,
    label: 'tags',
  }

  const lengthProps: TextFieldProps = {
    label: '용량',
    value: length,
  }

  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <ContentEditorViews
        {...args}
        categoryProps={categoryProps}
        titleProps={titleProps}
        authorProps={authorProps}
        descriptionProps={descriptionsProps}
        runningTimeProps={runningTimeProps}
        tagProps={tagsProps}
        recordedLocationProps={recordedLocationProps}
        recordedAtProps={recordedAtProps}
        lengthProps={lengthProps}
      />
    </ThemeProvider>
  )
}

export const Default = Template.bind({})

Default.args = {
  contentsDetailsData: contentDetailsData,
  categories,
}
