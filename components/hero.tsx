'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Crown, Rocket, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-br from-banana-50 via-white to-banana-green-50" itemScope itemType="https://schema.org/SoftwareApplication">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-banana-100 rounded-full text-banana-800 text-sm font-medium mb-6"
          >
            <Crown className="w-4 h-4 mr-2" />
            The AI model that outperforms Flux Kontext
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="text-banana-500">Nano Banana</span> AI Image Generator<br />
            Transform Images with Text
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Nano Banana delivers advanced AI image generation with perfect character consistency and scene preservation. 
            Experience the power of Nano Banana's one-shot editing technology.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a href="#generator">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="banana" className="shadow-lg">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Editing Free
                </Button>
              </motion.div>
            </a>
            <a href="#showcase">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-gray-200 text-gray-700 hover:border-banana-300 hover:text-banana-600">
                  <Play className="w-5 h-5 mr-2" />
                  View Examples
                </Button>
              </motion.div>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-banana-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-banana-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Character Consistency</h3>
              <p className="text-gray-600">Maintains character features across all transformations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-banana-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-banana-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">One-Shot Editing</h3>
              <p className="text-gray-600">Perfect results in a single generation attempt</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-banana-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-banana-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scene Preservation</h3>
              <p className="text-gray-600">Keeps original scene context and composition</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}