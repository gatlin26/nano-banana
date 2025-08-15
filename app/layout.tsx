import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'
import StructuredData from '@/components/structured-data'
import './globals.css'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nano Banana - Free AI Image Editor & Generator | Transform Images with Text',
  description: 'Free online AI image editor powered by Nano Banana. Transform any image with simple text prompts. Features character consistency, one-shot editing, and scene preservation. No sign-up required, unlimited generations.',
  keywords: 'AI image editor, free image generator, nano banana AI, text to image, image editing, AI photo editor, character consistency, online image editor, flux alternative',
  authors: [{ name: 'Nano Banana AI' }],
  creator: 'Nano Banana AI',
  publisher: 'Nano Banana AI',
  robots: 'index, follow',
  openGraph: {
    title: 'Nano Banana - Free AI Image Editor & Generator',
    description: 'Transform any image with simple text prompts using advanced AI. Free, unlimited, no sign-up required.',
    url: 'https://nanobanana.top',
    siteName: 'Nano Banana AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nano Banana AI Image Editor',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nano Banana - Free AI Image Editor & Generator',
    description: 'Transform any image with simple text prompts using advanced AI. Free, unlimited, no sign-up required.',
    images: ['/og-image.jpg'],
    creator: '@nanobananaai',
  },
  alternates: {
    canonical: 'https://nanobanana.top',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Providers>
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}