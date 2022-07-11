import { TagData } from 'components/atoms/Tags'
import { useInput } from 'hooks/useInput'
import { useEffect, useState } from 'react'

export default function useTagInput(
  _tags: TagData[],
  onTagChange: (value: TagData[] | null) => void,
) {
  const [tags, setTags] = useState(_tags)
  const input = useInput('')

  useEffect(() => {
    onTagChange(tags)
  }, [tags])

  const handleTagDelete = (DataToDelete: TagData) => () => {
    setTags([...tags.filter((data: TagData) => data.id !== DataToDelete.id)])
  }

  const handleBlur = () => {
    addTags()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleEnterKeyDown()
    else if (e.key === 'Backspace') handleBackspace()
  }

  const handleEnterKeyDown = () => addTags()

  const handleBackspace = () => {
    if (input.isEmpty()) popTags()
  }

  const addTags = () => {
    if (!input.isEmpty()) {
      const newTag: TagData = {
        id: tags[tags.length - 1].id + 1,
        data: input.value,
      }
      setTags([...tags, newTag])
      input.reset()
    }
  }

  const popTags = () => {
    tags.pop()
    setTags(prev => [...tags])
  }

  return {
    value: input.value,
    handleChange: input.onChange,
    handleKeyDown,
    handleBlur,
    handleTagDelete,
    tags: tags,
  }
}
