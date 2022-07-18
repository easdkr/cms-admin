import { SelectChangeEvent, TextField, TextFieldProps } from '@mui/material'
import { getCategories, getDetail } from 'apis/contents'
import { FormSelectProps } from 'components/molecules/FormSelect'
import { TimeInputProps } from 'components/molecules/TimeInput'
import { Category, ContentDetailsData } from 'models/contents'
import { useEffect, useState } from 'react'
import { formatBytes } from 'utils'
import { UNSET } from 'utils/constants/Integers'
import { TagsProps } from '../ContentEditor.views'

const EMPTY_CONTENT_DETAILS_DATA = {
  assets: [],
  author: '',
  banner: '',
  description: '',
  category: {
    id: UNSET,
    name: '',
    sorting: UNSET,
  },
  colors: '',
  id: UNSET,
  length: UNSET,
  recordedAt: null,
  recordedLocation: '',
  runningTime: UNSET,
  sorting: UNSET,
  tags: [],
  title: '',
} as ContentDetailsData

export default function useContentEditor(id: number, open: boolean) {
  const [contentDetailsData, setContentDetailsData] =
    useState<ContentDetailsData>(EMPTY_CONTENT_DETAILS_DATA)
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    if (id !== UNSET && open) initializeContentEditor()
  }, [id, open])

  const initializeContentEditor = async () => {
    await handleGetCategories()
    await handleGetContentDetails(id)
  }

  const handleGetCategories = async () => {
    const categoryList = await getCategories()
    if (categoryList?.data?.items) {
      console.log(categoryList.data.items)
      setCategories(prev => [...categoryList.data.items])
    }
  }

  const handleGetContentDetails = async (id: number) => {
    const details = await getDetail(id)
    if (details?.data?.detail) {
      console.log(details.data.detail)
      setContentDetailsData(prev => details.data.detail)
    }
  }

  const resetData = () => {
    setCategories([])
    setContentDetailsData(EMPTY_CONTENT_DETAILS_DATA)
  }

  const handleDialogClose = (onClose: any) => () => {
    onClose()
    resetData()
  }

  const handleTextFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setContentDetailsData(prevState => ({ ...prevState, [name]: value }))
    console.log({ name, value })
  }

  const handleSelectChange = (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode,
  ) => {
    const { value } = event.target
    const categoryIndex = categories.findIndex(i => i.name === value)
    setContentDetailsData(prevState => ({
      ...prevState,
      category: categories[categoryIndex],
    }))
  }

  const handleRunningTimeChange = (value: number) => {
    setContentDetailsData(prevState => ({
      ...prevState,
      runningTime: value,
    }))
  }

  const handleRecordedAtChange = (date: Date | null) => {
    setContentDetailsData(prevState => ({
      ...prevState,
      recordedAt: date,
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
    name: 'recordedLocation',
    value: contentDetailsData.recordedLocation,
    onChange: handleTextFieldChange,
  }

  const recordedAtProps = {
    label: '촬영 시간',
    value: contentDetailsData.recordedAt || null,
    name: 'recordedAt',
    inputFormat: 'yyyy.MM.dd',
    onChange: handleRecordedAtChange,
  }

  const lengthProps: TextFieldProps = {
    label: '용량',
    value: formatBytes(contentDetailsData.length),
  }

  const tagsProps: TagsProps = {
    value: contentDetailsData.tags,
    onChange: (e: any, v: any) => {
      setContentDetailsData(preState => ({ ...preState, tags: v }))
    },
  }

  return {
    contentDetailsData,
    categories,
    handleDialogClose,
    authorProps,
    categoryProps,
    descriptionsProps,
    titleProps,
    lengthProps,
    recordedAtProps,
    runningTimeProps,
    recordedLocationProps,
    tagsProps,
  }
}
