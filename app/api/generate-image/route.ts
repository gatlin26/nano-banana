import { NextRequest, NextResponse } from 'next/server'
import { generateImageRequestSchema } from '@/shared/schema'
import { storage } from '@/lib/storage'

const NANO_GPT_API_URL = 'https://nano-gpt.com/v1/images/generations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = generateImageRequestSchema.parse(body)
    
    // Create pending generation record
    const generation = await storage.createGeneration({
      prompt: validatedData.prompt,
      originalImageUrl: validatedData.originalImageUrl,
      model: 'hidream', // Fixed model for Nano Banana
      dimensions: validatedData.dimensions || '1024x1024',
      style: validatedData.style || 'realistic',
      status: 'pending',
      generatedImageUrl: '',
      metadata: {}
    })

    // Make API call to Nano GPT
    const apiResponse = await fetch(NANO_GPT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NANO_GPT_API_KEY || 'demo-key'}`
      },
      body: JSON.stringify({
        model: 'hidream',
        prompt: validatedData.prompt,
        image: validatedData.originalImageUrl,
        width: parseInt(validatedData.dimensions?.split('x')[0] || '1024'),
        height: parseInt(validatedData.dimensions?.split('x')[1] || '1024'),
        style: validatedData.style,
        n: 1
      })
    })

    if (!apiResponse.ok) {
      await storage.updateGeneration(generation.id, {
        status: 'failed',
        metadata: { error: `API request failed: ${apiResponse.status}` }
      })
      throw new Error(`API request failed: ${apiResponse.status}`)
    }

    const apiData = await apiResponse.json()
    const imageUrl = apiData.data?.[0]?.url || ''

    // Update generation with result
    const updatedGeneration = await storage.updateGeneration(generation.id, {
      status: 'completed',
      generatedImageUrl: imageUrl,
      metadata: { 
        apiResponse: apiData,
        cost: apiData.usage?.total_cost || '0.01'
      }
    })

    return NextResponse.json(updatedGeneration)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: "Generation failed", message: errorMessage },
      { status: 500 }
    )
  }
}