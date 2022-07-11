import { useInput } from 'hooks/useInput'
import useMultiInput from 'hooks/useMultiInput'
import { useCallback, useEffect, useState } from 'react'
import { secondsToTimes, timesToSeconds, timeValidator } from 'utils'

export default function useTimeInput(
  timeInSeconds: number,
  onTimeChange: (value: number) => void,
) {
  const { value, onChange, setValue } = useMultiInput(
    {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    timeValidator,
  )
  useEffect(() => {
    if (timeInSeconds > 0) {
      console.log(` time in seconds : ${timeInSeconds}`)
      setValue(secondsToTimes(timeInSeconds))
      onTimeChange(timesToSeconds(value.hours, value.minutes, value.seconds))
    }
  }, [timeInSeconds])

  const hoursProps = {
    value: value.hours,
    onChange,
    name: 'hours',
    label: 'hours',
    type: 'number',
  }
  const minutesProps = {
    value: value.minutes,
    onChange,
    name: 'minutes',
    label: 'minutes',
    type: 'number',
  }
  const secondsProps = {
    value: value.seconds,
    onChange,
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
