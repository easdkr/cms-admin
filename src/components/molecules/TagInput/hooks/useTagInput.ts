import { TagData } from 'components/atoms/Tags'
import { useInput } from 'hooks/useInput'

export default function useTagInput(
  tags: TagData[],
  setTags: React.Dispatch<TagData[]>,
) {
  const input = useInput('')

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleEnterKeyDown()
    else if (e.key === 'Backspace') handleBackspace()
  }

  const handleEnterKeyDown = () => addTags()

  const handleBackspace = () => {
    if (input.isEmpty()) popTags()
  }

  const handleBlur = () => addTags()

  const addTags = () => {
    if (!input.isEmpty()) {
      const newTag: TagData = {
        id: tags.length,
        data: input.value,
      }
      setTags([...tags, newTag])
      input.reset()
    }
  }

  const popTags = () => {
    tags.pop()
    setTags([...tags])
  }

  return {
    value: input.value,
    handleChange: input.onChange,
    handleKeyDown,
    handleBlur,
  }
}
