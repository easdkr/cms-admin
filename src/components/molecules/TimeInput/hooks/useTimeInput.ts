import { useInput } from 'hooks/useInput'
import useMultiInput from 'hooks/useMultiInput'
import { useCallback, useEffect, useState } from 'react'
import { secondsToTimes, timesToSeconds, timeValidator } from 'utils'

export default function useTimeInput(
  timeInSeconds: number,
  onTimeChange: (value: number) => void,
) {
  const { hours, minutes, seconds } = secondsToTimes(timeInSeconds)
  const { value, onChange } = useMultiInput(
    {
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    },
    timeValidator,
  )
  useEffect(() => {
    onTimeChange(timesToSeconds(value.hours, value.minutes, value.seconds))
  }, [value])

  const hoursProps = {
    value: value.hours,
    onChange: onChange,
    name: 'hours',
    label: 'hours',
    type: 'number',
  }
  const minutesProps = {
    value: value.minutes,
    onChange: onChange,
    name: 'minutes',
    label: 'minutes',
    type: 'number',
  }
  const secondsProps = {
    value: value.seconds,
    onChange: onChange,
    name: 'seconds',
    label: 'seconds',
    type: 'number',
  }

  return {
    hoursProps,
    minutesProps,
    secondsProps,
  }
}
