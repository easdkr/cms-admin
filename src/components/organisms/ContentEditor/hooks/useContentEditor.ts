import { getCategories, getDetail } from 'apis/contents'
import { Category, ContentDetailsData } from 'models/contents'
import { useEffect, useState } from 'react'
import { UNSET } from 'utils/constants/Integers'

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
  recorded_at: null,
  recorded_location: '',
  running_time: UNSET,
  sorting: UNSET,
  tags: [],
  title: '',
} as ContentDetailsData

export default function useContentEditor(id: number) {
  const [contentDetailsData, setContentDetailsData] =
    useState<ContentDetailsData>(EMPTY_CONTENT_DETAILS_DATA)

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    if (id !== UNSET) initializeContentEditor()
  }, [id])

  const initializeContentEditor = async () => {
    await handleGetCategories()
    await handleGetContentDetails(id)
  }

  const handleGetCategories = async () => {
    const categoryList = await getCategories()
    if (categoryList?.data?.items) {
      console.log(categoryList.data.items)
      setCategories([...categoryList.data.items])
    }
  }

  const handleGetContentDetails = async (id: number) => {
    const details = await getDetail(id)
    if (details?.data?.detail) {
      console.log(details.data.detail)
      setContentDetailsData({ ...details.data.detail })
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
  return {
    contentDetailsData,
    categories,
    handleDialogClose,
  }
}
