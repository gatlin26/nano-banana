import Navigation from '@/components/navigation'
import { Generator } from '@/components/generator'

export const metadata = {
  title: 'AI Image Generator - Nano Banana',
  description: 'Generate and edit images with AI using Nano Banana\'s advanced model. Upload your image and transform it with simple text prompts.',
}

export default function GeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Generator />
    </div>
  )
}