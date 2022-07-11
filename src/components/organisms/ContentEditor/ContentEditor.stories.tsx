import {
  Box,
  Paper,
  SelectChangeEvent,
  SelectProps,
  Stack,
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
import { Category, ContentDetailsData } from 'models/contents'
import { useState } from 'react'
import { darktheme, GlobalStyle } from 'styles'
import { formatBytes, stringsToTagData, tagDataToStrings } from 'utils'

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

const _contentDetailsData = ContentDetailsDefaultData
const categories = CategoryDefaultData

// eslint-disable-next-line react/function-component-definition
const Template: Story<ContentEditorViewsProps> = args => {
  const [contentDetailsData, setContentDetialsData] =
    useState<ContentDetailsData>(_contentDetailsData)
  const [length, setLength] = useState(formatBytes(_contentDetailsData.length))
  const handleTextFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setContentDetialsData(prevState => ({ ...prevState, [name]: value }))
    console.log({ name, value })
  }

  const handleTagChange = (value: TagData[] | null) => {
    setContentDetialsData(prevState => ({
      ...prevState,
      tags: tagDataToStrings(value),
    }))
  }

  const handleSelectChange = (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode,
  ) => {
    const { value } = event.target
    const categoryIndex = categories.findIndex(i => i.name == value)
    setContentDetialsData(prevState => ({
      ...prevState,
      category: categories[categoryIndex],
    }))
  }

  const handleRunningTimeChange = (value: number) => {
    setContentDetialsData(prevState => ({
      ...prevState,
      running_time: value,
    }))
  }

  const handleRecordedAtChange = (date: Date | null) => {
    setContentDetialsData(prevState => ({
      ...prevState,
      recorded_at: date,
    }))
  }

  const categoryProps: FormSelectProps<Category> = {
    label: 'category',
    name: 'category',
    value: contentDetailsData.category.name,
    onChange: handleSelectChange,
    items: categories,
  }

  const titleProps: TextFieldProps = {
    label: 'title',
    name: 'title',
    value: contentDetailsData.title,
    onChange: handleTextFieldChange,
  }

  const authorProps: TextFieldProps = {
    label: 'author',
    name: 'author',
    value: contentDetailsData.author,
    onChange: handleTextFieldChange,
  }

  const descriptionsProps: TextFieldProps = {
    label: 'description',
    name: 'description',
    value: contentDetailsData.description,
    onChange: handleTextFieldChange,
  }

  const runningTimeProps: TimeInputProps = {
    timeInSeconds: contentDetailsData.running_time,
    onChange: handleRunningTimeChange,
  }

  const recordedLocationProps: TextFieldProps = {
    label: '촬영 장소',
    name: 'recorded_location',
    value: contentDetailsData.recorded_location,
    onChange: handleTextFieldChange,
  }

  const recordedAtProps = {
    label: '촬영 시간',
    value: contentDetailsData.recorded_at || null,
    inputFormat: 'yyyy.MM.dd',
    onChange: handleRecordedAtChange,
    renderInput: (params: any) => <TextField {...params} />,
  }

  const tagsProps: TagInputProps = {
    label: 'tags',
    tagValue: stringsToTagData(contentDetailsData.tags),
    onTagChange: handleTagChange,
  }

  const lengthProps: TextFieldProps = {
    label: '용량',
    value: length,
  }
  // const handle
  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <Stack spacing={3}>
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
        <Typography color={'#FFF'}>
          {JSON.stringify(contentDetailsData, null, 4)}
        </Typography>
      </Stack>
    </ThemeProvider>
  )
}

export const Default = Template.bind({})

Default.args = {
  contentsDetailsData: _contentDetailsData,
  categories,
}

/*
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
  */
