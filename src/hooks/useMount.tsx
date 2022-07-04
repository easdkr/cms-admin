import { useEffect, useRef } from 'react'

export default function useMount() {
  const isMount = useRef(true)
  useEffect(() => {
    isMount.current = false
  }, [])

  return isMount.current
}
