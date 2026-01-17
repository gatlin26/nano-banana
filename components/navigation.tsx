'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from '@/components/ui/logo'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link href="/">
              <Logo size="md" showText={true} />
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#showcase" className="text-gray-700 hover:text-blue-600 transition-colors">
              Showcase
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">
              How it Works
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </a>
            <a href="https://www.editphoto-ai.com/" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="blue">
                  Try Now
                </Button>
              </motion.div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#showcase" className="block text-gray-700 hover:text-blue-600 transition-colors">
              Showcase
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-blue-600 transition-colors">
              How it Works
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </a>
            <a href="https://www.editphoto-ai.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="blue" className="w-full">
                Try Now
              </Button>
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}