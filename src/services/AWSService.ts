import {
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from '@aws-sdk/client-s3'
import { temporaryCredential } from 'apis/auth'
import { uuidHex } from 'utils'

export const REGION = 'ap-northeast-2'
export const BUCKET_NAME = 'app-develop-media'
export const s3Upload = async (fileName: string) => {
  const s3Client = await createS3Client()

  const s3Params: PutObjectCommandInput = {
    ACL: 'public-read',
    ContentDisposition: `attachment;filename=${fileName}`,
    Bucket: 'app-develop-media',
    Key: uuidHex(),
    Body: 'Upload for STS credential',
  }

  const data = await s3Client.send(new PutObjectCommand(s3Params))
  if (data) console.log(data)
}

const createS3Client = async () => {
  const credentials = await (await temporaryCredential()).data.credential

  return new S3Client({
    region: REGION,
    credentials,
  })
}
