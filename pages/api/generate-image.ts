import type { NextApiRequest, NextApiResponse } from 'next'
import { generateImageRequestSchema, type GeneratedImage } from '@shared/schema'
import { storage } from '../../server/storage'

const NANO_GPT_API_URL = 'https://nano-gpt.com/v1/images/generations'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeneratedImage | { error: string; message?: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const validatedData = generateImageRequestSchema.parse(req.body)
    
    // Create pending generation record
    const generation = await storage.createGeneration({
      prompt: validatedData.prompt,
      originalImageUrl: validatedData.image || null,
      model: 'hidream', // Fixed model for Nano Banana
      dimensions: validatedData.dimensions || '1024x1024',
      style: validatedData.style || 'auto',
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
        image: validatedData.image,
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

    res.json(updatedGeneration)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    res.status(500).json({ error: "Generation failed", message: errorMessage })
  }
}