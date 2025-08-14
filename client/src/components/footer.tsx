'use client'

import { motion } from 'framer-motion'
import { Link } from 'wouter'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <Link href="/" className="text-2xl font-bold text-banana-400">
                🍌 Nano Banana
              </Link>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 max-w-md"
            >
              Transform any image with simple text using our advanced AI that maintains character consistency and scene preservation.
            </motion.p>
          </div>

          {/* Product */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-semibold mb-4"
            >
              Product
            </motion.h3>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2"
            >
              <li>
                <Link href="#generator" className="text-gray-300 hover:text-banana-400 transition-colors">
                  AI Generator
                </Link>
              </li>
              <li>
                <Link href="#showcase" className="text-gray-300 hover:text-banana-400 transition-colors">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-300 hover:text-banana-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-banana-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </motion.ul>
          </div>

          {/* Support */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg font-semibold mb-4"
            >
              Support
            </motion.h3>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-2"
            >
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-banana-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="mailto:support@nanobana.ai" className="text-gray-300 hover:text-banana-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-banana-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-banana-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>

        {/* Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Nano Banana. All rights reserved. Made with AI that cares about consistency.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}