import Navigation from '@/components/navigation'
import { CheckCircle, Upload, Wand2, Download } from 'lucide-react'

export const metadata = {
  title: 'How It Works - Nano Banana',
  description: 'Learn how Nano Banana AI transforms your images with advanced character consistency and scene preservation.',
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How Nano Banana Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your images in just three simple steps with our advanced AI technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-banana-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-banana-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Upload Image</h3>
              <p className="text-gray-600">
                Upload your reference image in JPG, PNG, or WebP format. Our system supports images up to 5MB.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-banana-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wand2 className="w-10 h-10 text-banana-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Describe Changes</h3>
              <p className="text-gray-600">
                Tell our AI what you want to change using natural language. Be specific about transformations you want.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-banana-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-10 h-10 text-banana-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Get Results</h3>
              <p className="text-gray-600">
                Download your transformed image with perfect character consistency and scene preservation.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What Makes Nano Banana Special
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-banana-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Character Consistency</h4>
                  <p className="text-gray-600">
                    Our AI maintains character features, proportions, and identity across all transformations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-banana-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Scene Preservation</h4>
                  <p className="text-gray-600">
                    Background context, lighting, and composition are preserved during edits.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-banana-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">One-Shot Editing</h4>
                  <p className="text-gray-600">
                    Get perfect results in a single generation without multiple iterations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-banana-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">High Quality Output</h4>
                  <p className="text-gray-600">
                    Generate high-resolution images suitable for professional use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}