import { ReactNode, useCallback, useState } from 'react'

export const useInput = (
  initial: any,
  validate?: (value: string) => boolean,
) => {
  const [value, setValue] = useState(initial)

  const onChange = useCallback((event: any) => {
    const {
      target: { value },
    } = event

    if (validate === undefined || isEmpty() || validate(value)) {
      setValue(value)
    }
  }, [])

  const reset = () => {
    setValue(initial)
  }

  const isEmpty = () => {
    return value === undefined || value === null || value === ''
  }

  const set = useCallback((_value: ReactNode) => {
    setValue(_value)
  }, [])

  return { value, onChange, reset, isEmpty, set }
}
