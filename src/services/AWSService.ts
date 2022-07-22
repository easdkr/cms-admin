import {
  PutObjectCommandInput,
  PutObjectCommandOutput,
  S3Client,
} from '@aws-sdk/client-s3'
import { Progress, Upload } from '@aws-sdk/lib-storage'
import { temporaryCredential } from 'apis/auth'
import { uuidHex } from 'utils'

export const REGION = 'ap-northeast-2'
export const BUCKET_NAME = 'app-develop-media'

export const s3Upload = async (file: File) => {
  try {
    const uploader: Upload = await createParallerUploader(file)
    console.log(uploader.done())
  } catch (e) {
    console.log(e)
  }
}

export const createParallerUploader = async (
  file: File,
  setProgress?: React.Dispatch<React.SetStateAction<number>>,
) => {
  const client = await createS3Client()
  const params = createUploadParams(file)
  const parallerUploadS3 = new Upload({
    client,
    params,
  })

  parallerUploadS3.on('httpUploadProgress', (progress: Progress) => {
    const progressPer = Math.round((progress.loaded / progress.total) * 100)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    console.log(progressPer)
    setProgress(_ => progressPer)
  })

  return parallerUploadS3
}

const createS3Client = async () => {
  const credentials = await (await temporaryCredential()).data.credential

  return new S3Client({
    region: REGION,
    credentials,
  })
}

const createUploadParams = (file: File): PutObjectCommandInput => {
  const originName = encodeURI(file.name) // 재 다운로드 시 원본 이름 지정, 한글 인코딩 지원(ISO/IEC 8859-1)
  return {
    ACL: 'public-read',
    ContentDisposition: `attachment;filename=${originName}`,
    Bucket: BUCKET_NAME,
    Key: uuidHex(),
    Body: file,
  } as PutObjectCommandInput
}
