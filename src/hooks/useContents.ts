import { getCategories, getDetail, getList } from 'apis/contents'
import { Category, Content, ContentDetails, ContentDetailsData } from 'models/contents'
import { useEffect, useState } from 'react'

export default function useContents() {
  const [contents, setContents] = useState<Content[]>([])
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    handleGetList()
    return () => setContents(null)
  }, [])

  const handleGetList = async () => {
    const list = await getList(0, 20)
    if (list?.data?.items) {
      setContents(list.data.items)
    }
  }

  const openModal = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  return {
    openModal,
    contents,
    modalOpen,
    handleModalClose,
  }
}
