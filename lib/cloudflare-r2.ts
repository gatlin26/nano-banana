import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

// Configure R2 client
const r2Client = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY || '',
  },
})

const bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME || ''

export class CloudflareR2Service {
  
  // Generate presigned URL for image upload
  async getUploadUrl(key: string, contentType: string = 'image/jpeg'): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      ContentType: contentType,
    })

    return await getSignedUrl(r2Client, command, { expiresIn: 3600 }) // 1 hour
  }

  // Generate presigned URL for image download/viewing
  async getDownloadUrl(key: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
    })

    return await getSignedUrl(r2Client, command, { expiresIn: 3600 }) // 1 hour
  }

  // Generate public URL (if bucket has public access configured)
  getPublicUrl(key: string): string {
    const endpoint = process.env.CLOUDFLARE_R2_ENDPOINT?.replace('https://', '') || ''
    return `https://${bucketName}.${endpoint}/${key}`
  }

  // Generate unique filename for uploads
  generateImageKey(prefix: string = 'images'): string {
    const timestamp = Date.now()
    const randomId = Math.random().toString(36).substring(2, 15)
    return `${prefix}/${timestamp}-${randomId}.jpg`
  }
}

export const r2Service = new CloudflareR2Service()