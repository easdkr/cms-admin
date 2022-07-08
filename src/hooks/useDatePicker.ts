import { useState } from 'react'

export default function useDatePicker(initial: Date | null) {
  const [value, setValue] = useState<Date | null>(initial)

  const onChange = (date: Date | null) => {
    setValue(date)
  }
  return { value, onChange }
}
