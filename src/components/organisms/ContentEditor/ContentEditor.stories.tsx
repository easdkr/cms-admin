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
import { FormSelectProps } from 'components/molecules/FormSelect'
import { TimeInputProps } from 'components/molecules/TimeInput'
import { Category, ContentDetailsData } from 'models/contents'
import { useState } from 'react'
import { darktheme, GlobalStyle } from 'styles'
import { formatBytes } from 'utils'

import {
  CategoryDefaultData,
  ContentDetailsDefaultData,
} from './ContentEditor.data'
import ContentEditorViews, {
  ContentEditorViewsProps,
  TagsProps,
} from './ContentEditor.views'

export default {
  title: 'Organisms/ContentsEditor',
  component: ContentEditorViews,
} as Meta

// eslint-disable-next-line no-underscore-dangle
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

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    const { value } = event.target
    const categoryIndex = categories.findIndex(i => i.name === value)
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
    timeInSeconds: contentDetailsData.runningTime,
    onChange: handleRunningTimeChange,
  }

  const recordedLocationProps: TextFieldProps = {
    label: '촬영 장소',
    name: 'recorded_location',
    value: contentDetailsData.recordedLocation,
    onChange: handleTextFieldChange,
  }

  const recordedAtProps = {
    label: '촬영 시간',
    value: contentDetailsData.recordedAt || null,
    inputFormat: 'yyyy.MM.dd',
    onChange: handleRecordedAtChange,
    renderInput: (params: any) => <TextField {...params} />,
  }

  const lengthProps: TextFieldProps = {
    label: '용량',
    value: length,
  }

  const tagsProps: TagsProps = {
    value: contentDetailsData.tags,
    onChange: (e: any, v: any) => {
      setContentDetialsData(preState => ({ ...preState, tags: v }))
    },
  }

  return (
    <ThemeProvider theme={darktheme}>
      <GlobalStyle />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Stack sx={{ width: '50%' }} spacing={3}>
          <ContentEditorViews
            {...args}
            categoryProps={categoryProps}
            titleProps={titleProps}
            authorProps={authorProps}
            descriptionProps={descriptionsProps}
            runningTimeProps={runningTimeProps}
            recordedLocationProps={recordedLocationProps}
            recordedAtProps={recordedAtProps}
            lengthProps={lengthProps}
            tagsProps={tagsProps}
          />
          <Typography color="#FFF">
            {JSON.stringify(contentDetailsData, null, 4)}
          </Typography>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export const Default = Template.bind({})

Default.args = {
  // contentsDetailsData: _contentDetailsData,
  // categories,
}
