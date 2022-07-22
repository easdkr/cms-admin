import { v4 as uuidv4 } from 'uuid'

export const secondsToTimes = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600)
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
  const seconds = Math.floor((timeInSeconds % 3600) % 60)
  return {
    hours,
    minutes,
    seconds,
  }
}

export const timesToSeconds = (
  hours: string,
  minutes: string,
  seconds: string,
) => {
  const hoursNumber = hours !== '' ? parseInt(hours, 10) : 0
  const minutesNumber = minutes !== '' ? parseInt(minutes, 10) : 0
  const secondsNumber = seconds !== '' ? parseInt(seconds, 10) : 0

  return hoursNumber * 3600 + minutesNumber * 60 + secondsNumber
}

export const timeValidator = (value: string) => {
  return value === '' || (parseInt(value, 10) >= 0 && parseInt(value, 10) < 60)
}

export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`
}

export const uuidHex = () => {
  return uuidv4().replace(/-/g, '')
}

export const setImageBlob = (
  setBlob: React.Dispatch<React.SetStateAction<string | ArrayBuffer>>,
  file?: File,
) => {
  if (file) {
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setBlob(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }
}
