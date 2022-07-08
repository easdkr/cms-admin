import { getList } from 'apis/contents'
import { Content } from 'models/contents'
import { useEffect, useState } from 'react'

export default function useContentsCardList() {
  const [contentsBriefList, setContentsBriefList] = useState<Content[]>([])

  useEffect(() => {
    handleGetContentsBrief()
    return () => setContentsBriefList(null)
  }, [])

  const handleGetContentsBrief = async () => {
    const list = await getList(0, 20)
    if (list?.data?.items) {
      setContentsBriefList(list.data.items)
    }
  }

  return {
    contentsBriefList,
  }
}
