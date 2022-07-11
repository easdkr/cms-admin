import { useCallback, useState } from 'react'

export default function useMultiInput(
  initial: any,
  validate?: (value: any) => boolean,
) {
  const [value, setValue] = useState(initial)

  const onChange = useCallback((event: any) => {
    const { value, name } = event.target

    if (validate === undefined || isEmpty() || validate(value)) {
      setValue((prevState: any) => ({ ...prevState, [name]: value }))
    }
  }, [])

  const isEmpty = () => {
    return value === undefined || value === null || value === ''
  }

  return { value, onChange }
}
