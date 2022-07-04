import { getCategories, getDetail, getList } from 'apis/contents'
import { Category, ContentDetailsData } from 'models/contents'
import { useEffect, useState } from 'react'

export default function useContentDetails() {
  const [contentDetailsData, setContentDetailsData] = useState<ContentDetailsData>()
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  useEffect(() => {
    handleGetCategories()
  }, [])

  const handleGetCategories = async () => {
    const categoryList = await getCategories()
    if (categoryList?.data?.items) {
      console.log(categoryList.data.items)
      setCategories(categoryList.data.items)
    }
  }

  const handleGetContentDetails = async (id: number) => {
    const details = await getDetail(id)
    if (details?.data?.detail) {
      setContentDetailsData(details.data.detail)
      setSelectedCategory(details.data.detail.category.name)
    }
  }

  return {
    handleGetContentDetails,
    contentDetailsData,
    categories,
    selectedCategory,
    setSelectedCategory,
  }
}
