import Head from 'next/head'
import Navigation from '@/components/navigation'
import { Generator } from '@/components/generator'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function GeneratorPage() {
  return (
    <>
      <Head>
        <title>AI Image Generator - Nano Banana</title>
        <meta name="description" content="Generate and edit images with AI using Nano Banana's advanced model. Upload your image and transform it with simple text prompts." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
        <Navigation />
        <Generator />
      </div>
    </>
  )
}