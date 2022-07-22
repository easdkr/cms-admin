import { useEffect, useRef, useState } from 'react'
import { setImageBlob } from 'utils'

export default function useThumbnailButton(
  onFileChange?: (file: File) => void,
) {
  const clickRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File>()
  const [preview, setPreview] = useState<string | ArrayBuffer>()

  useEffect(() => {
    setImageBlob(setPreview, file)
  }, [file])

  const onClick = () => {
    clickRef.current.click()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0]
    setFile(file)
    if (onFileChange) onFileChange(file)
  }

  return {
    clickRef,
    onClick,
    onChange,
    file,
    preview,
  }
}
