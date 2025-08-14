import Head from 'next/head'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nano Banana - AI Image Generation</title>
        <meta name="description" content="Transform any image with simple text using Nano Banana's advanced AI model. Experience one-shot editing with perfect character consistency." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`min-h-screen bg-gray-50 ${inter.className}`}>
        <Navigation />
        <Hero />
      </div>
    </>
  )
}