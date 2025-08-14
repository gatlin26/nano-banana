import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  username: string
  created_at: string
}

export interface ImageGeneration {
  id: string
  user_id: string | null
  prompt: string
  original_image_url: string | null
  generated_image_url: string
  model: string
  dimensions: string
  style: string
  status: 'pending' | 'completed' | 'failed'
  metadata: any
  created_at: string
}