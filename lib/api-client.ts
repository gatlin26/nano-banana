// API client for image generation and file upload

export interface GeneratedImage {
  generatedImageUrl: string
  id: string
  status: 'pending' | 'completed' | 'failed'
}

export interface GenerateImageRequest {
  prompt: string
  image?: string
  dimensions: string
  style: string
}

export interface UploadResponse {
  url: string
  filename: string
}

export async function generateImage(request: GenerateImageRequest): Promise<GeneratedImage> {
  const response = await fetch('/api/generate-image', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(error || 'Failed to generate image')
  }

  return response.json()
}

export async function uploadImageToR2(file: File): Promise<UploadResponse> {
  // Get upload URL from our API
  const uploadResponse = await fetch('/api/upload-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      filename: file.name,
      contentType: file.type,
    }),
  })

  if (!uploadResponse.ok) {
    throw new Error('Failed to get upload URL')
  }

  const { uploadUrl, publicUrl } = await uploadResponse.json()

  // Upload file directly to R2
  const uploadResult = await fetch(uploadUrl, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    },
  })

  if (!uploadResult.ok) {
    throw new Error('Failed to upload file to R2')
  }

  return {
    url: publicUrl,
    filename: file.name,
  }
}