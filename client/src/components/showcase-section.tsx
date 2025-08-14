'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'

export default function ShowcaseSection() {
  const examples = [
    {
      title: "Character Style Transfer",
      description: "Transform characters while maintaining their identity",
      beforeImage: "/api/placeholder/300/200",
      afterImage: "/api/placeholder/300/200",
      prompt: "Turn into anime style"
    },
    {
      title: "Background Replacement", 
      description: "Change scenes while preserving the subject",
      beforeImage: "/api/placeholder/300/200",
      afterImage: "/api/placeholder/300/200",
      prompt: "Replace background with beach sunset"
    },
    {
      title: "Outfit Changes",
      description: "Modify clothing and accessories naturally", 
      beforeImage: "/api/placeholder/300/200",
      afterImage: "/api/placeholder/300/200",
      prompt: "Change to red dress"
    },
    {
      title: "Scene Transformation",
      description: "Complete environment changes with character preservation",
      beforeImage: "/api/placeholder/300/200", 
      afterImage: "/api/placeholder/300/200",
      prompt: "Place in futuristic city"
    },
    {
      title: "Artistic Style",
      description: "Apply artistic filters while keeping character features",
      beforeImage: "/api/placeholder/300/200",
      afterImage: "/api/placeholder/300/200", 
      prompt: "Make it oil painting style"
    },
    {
      title: "Mood & Lighting",
      description: "Change atmosphere and lighting conditions",
      beforeImage: "/api/placeholder/300/200",
      afterImage: "/api/placeholder/300/200",
      prompt: "Make it golden hour lighting"
    }
  ]

  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🎨 Showcase Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore stunning examples of what Nano Banana can create. From character transformations to scene changes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="relative">
                      <div className="aspect-square bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Before</span>
                      </div>
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        Original
                      </div>
                    </div>
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-banana-100 to-banana-200 flex items-center justify-center">
                        <span className="text-banana-700 text-sm">After</span>
                      </div>
                      <div className="absolute top-2 right-2 bg-banana-500 text-white text-xs px-2 py-1 rounded">
                        AI Result
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{example.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{example.description}</p>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-xs text-gray-700">
                        <span className="font-medium">Prompt:</span> "{example.prompt}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}