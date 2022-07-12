export interface Credential {
  accessKeyId: string
  expiration: Data
  secretAccessKey: string
  sessionToken: string
}

export interface TemporaryCredentialResponse {
  credential: Credential
  response: string
}
