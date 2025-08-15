'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Upload, Wand2, Download } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Image",
      description: "Upload your reference image in JPG, PNG, or WebP format. Our system supports images up to 5MB."
    },
    {
      icon: Wand2,
      title: "Describe Changes", 
      description: "Tell our AI what you want to change using natural language. Be specific about transformations you want."
    },
    {
      icon: Download,
      title: "Get Results",
      description: "Download your transformed image with perfect character consistency and scene preservation."
    }
  ]

  const features = [
    {
      title: "Character Consistency",
      description: "Our AI maintains character features, proportions, and identity across all transformations."
    },
    {
      title: "Scene Preservation", 
      description: "Background context, lighting, and composition are preserved during edits."
    },
    {
      title: "One-Shot Editing",
      description: "Get perfect results in a single generation without multiple iterations."
    },
    {
      title: "High Quality Output",
      description: "Generate high-resolution images suitable for professional use."
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-banana-500">Nano Banana</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your images in just three simple steps with Nano Banana's advanced AI technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-banana-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-banana-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Makes <span className="text-banana-500">Nano Banana</span> Special
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <CheckCircle className="w-6 h-6 text-banana-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}