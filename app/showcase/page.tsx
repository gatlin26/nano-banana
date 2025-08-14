import Navigation from '@/components/navigation'

export const metadata = {
  title: 'Showcase - Nano Banana',
  description: 'See amazing examples of AI image generation and editing with Nano Banana\'s advanced model.',
}

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🎨 Showcase Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore stunning examples of what Nano Banana can create. From character transformations to scene changes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for showcase examples */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Example 1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Character Style Transfer</h3>
              <p className="text-gray-600 text-sm">Transform characters while maintaining their identity</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Example 2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Background Replacement</h3>
              <p className="text-gray-600 text-sm">Change scenes while preserving the subject</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Example 3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Outfit Changes</h3>
              <p className="text-gray-600 text-sm">Modify clothing and accessories naturally</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}