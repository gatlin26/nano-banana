'use client'

import { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, Wand2, Upload, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { generateImage, uploadImageToR2, type GeneratedImage } from '@/lib/api-client'
import { useToast } from '@/lib/hooks/use-toast'
import { FileUpload } from '@/components/file-upload'

export function Generator() {
  const [prompt, setPrompt] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [dimensions, setDimensions] = useState('1024x1024')
  const [style, setStyle] = useState('auto')
  const [generatedImage, setGeneratedImage] = useState('')
  const { toast } = useToast()

  const generateMutation = useMutation({
    mutationFn: generateImage,
    onSuccess: (data: GeneratedImage) => {
      setGeneratedImage(data.generatedImageUrl)
      toast({
        title: "Image generated successfully!",
        description: "Your AI-generated image is ready.",
      })
    },
    onError: (error) => {
      toast({
        title: "Generation failed",
        description: error.message,
        variant: "destructive",
      })
    }
  })

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "Please enter a prompt",
        description: "Describe what you want to create or edit.",
        variant: "destructive",
      })
      return
    }

    generateMutation.mutate({
      prompt,
      image: imageUrl || undefined,
      dimensions,
      style,
    } as any)
  }

  const handleImageUpload = async (url: string) => {
    setImageUrl(url)
    toast({
      title: "Image uploaded",
      description: "Your reference image is ready for editing.",
    })
  }

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🍌 Nano Banana AI Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your images with the power of AI. Upload a reference image and describe your desired changes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-5 h-5 mr-2 text-banana-500" />
                  Upload Reference Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FileUpload onUpload={handleImageUpload} />
                {imageUrl && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-4"
                  >
                    <img
                      src={imageUrl}
                      alt="Uploaded reference"
                      className="w-full h-48 object-cover rounded-lg border"
                    />
                  </motion.div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wand2 className="w-5 h-5 mr-2 text-banana-500" />
                  Generation Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe your transformation
                  </label>
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., Change the background to a sunset beach, make the person wear a red dress..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dimensions
                    </label>
                    <Select value={dimensions} onValueChange={setDimensions}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1024x1024">1024x1024</SelectItem>
                        <SelectItem value="1024x768">1024x768</SelectItem>
                        <SelectItem value="768x1024">768x1024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Style
                    </label>
                    <Select value={style} onValueChange={setStyle}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Auto</SelectItem>
                        <SelectItem value="photorealistic">Photorealistic</SelectItem>
                        <SelectItem value="artistic">Artistic</SelectItem>
                        <SelectItem value="anime">Anime</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={generateMutation.isPending}
                  className="w-full bg-banana-500 hover:bg-banana-600 text-white"
                  size="lg"
                >
                  {generateMutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5 mr-2" />
                      Generate Image
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Output Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="w-5 h-5 mr-2 text-banana-500" />
                  Generated Result
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center min-h-[500px]">
                {generateMutation.isPending ? (
                  <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-banana-500 mx-auto mb-4" />
                    <p className="text-gray-600">Generating your image...</p>
                  </div>
                ) : generatedImage ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full"
                  >
                    <img
                      src={generatedImage}
                      alt="Generated result"
                      className="w-full h-auto rounded-lg border shadow-lg"
                    />
                    <Button
                      className="w-full mt-4"
                      onClick={() => {
                        const link = document.createElement('a')
                        link.href = generatedImage
                        link.download = 'nano-banana-generated.jpg'
                        link.click()
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Image
                    </Button>
                  </motion.div>
                ) : (
                  <div className="text-center text-gray-500">
                    <Wand2 className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p>Your generated image will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}