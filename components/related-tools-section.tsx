'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Sparkles, Heart } from 'lucide-react'

export default function RelatedToolsSection() {
  const tools = [
    {
      name: 'Skin Enhancer AI',
      description: 'AI-powered real skin enhancement tool that maintains natural texture, no plastic feel, no beauty filters. A professional photographer-trusted skin texture enhancement tool.',
      url: 'https://skin-enhancer.com/',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
      hoverColor: 'hover:from-pink-600 hover:to-rose-600'
    },
    {
      name: 'AI Couple',
      description: 'Upload two photos, choose a romantic scene, and let AI create your dream couple photos. Supports wedding, anime, couple avatars, and many other styles.',
      url: 'https://aicouple.org/',
      icon: Heart,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600'
    }
  ]

  return (
    <section id="related-tools" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore More AI Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover more powerful AI image processing tools to meet your different needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`${tool.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center text-white shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-2xl text-gray-900">{tool.name}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 text-base">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={tool.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        className={`w-full bg-gradient-to-r ${tool.color} ${tool.hoverColor} text-white border-0 shadow-md hover:shadow-lg transition-all duration-300`}
                      >
                        Visit {tool.name}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

