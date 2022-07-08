import { useInput } from 'hooks/useInput'
import { useCallback, useEffect, useState } from 'react'
import { secondsToTimes, timesToSeconds, timeValidator } from 'utils'

export default function useTimeInput(
  timeInSeconds: number,
  setTimeInSeconds: any,
) {
  const { hours, minutes, seconds } = secondsToTimes(timeInSeconds)
  const hoursInput = useInput(hours, timeValidator)
  const minutesInput = useInput(minutes, timeValidator)
  const secondsInput = useInput(seconds, timeValidator)

  useEffect(() => {
    setTimeInSeconds(
      timesToSeconds(hoursInput.value, minutesInput.value, secondsInput.value),
    )
  }, [hoursInput.value, minutesInput.value, secondsInput.value])

  const hoursProps = {
    value: hoursInput.value,
    onChange: hoursInput.onChange,
    label: 'hours',
    type: 'number',
  }
  const minutesProps = {
    value: minutesInput.value,
    onChange: minutesInput.onChange,
    label: 'minutes',
    type: 'number',
  }
  const secondsProps = {
    value: secondsInput.value,
    onChange: secondsInput.onChange,
    label: 'seconds',
    type: 'number',
  }

  return {
    hoursProps,
    minutesProps,
    secondsProps,
  }
}
