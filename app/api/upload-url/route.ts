import { NextRequest, NextResponse } from 'next/server'
import { r2Service } from '../../../lib/cloudflare-r2'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fileType = "image/jpeg" } = body
    
    // Generate unique key for the image
    const imageKey = r2Service.generateImageKey('uploads')
    
    // Get presigned upload URL
    const uploadUrl = await r2Service.getUploadUrl(imageKey, fileType)
    
    return NextResponse.json({ 
      uploadUrl,
      imageKey,
      publicUrl: r2Service.getPublicUrl(imageKey)
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: "Failed to get upload URL", message: errorMessage },
      { status: 500 }
    )
  }
}