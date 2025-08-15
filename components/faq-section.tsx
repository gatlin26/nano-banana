'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQSection() {
  const faqs = [
    {
      question: "What makes Nano Banana different from other AI image generators?",
      answer: "Nano Banana specializes in character consistency and scene preservation. Unlike other generators that might change facial features or lose important details, our AI maintains the original character's identity while making the requested transformations."
    },
    {
      question: "What image formats are supported?",
      answer: "We support JPEG, PNG, and WebP formats. Images can be up to 5MB in size. For best results, use high-quality images with clear subjects."
    },
    {
      question: "How long does it take to generate an image?",
      answer: "Most images are generated within 30-60 seconds, depending on complexity and current server load. We'll show you real-time progress updates during generation."
    },
    {
      question: "Can I use the generated images commercially?",
      answer: "Yes, you own the rights to images you generate with Nano Banana. You can use them for commercial purposes, but ensure your original input images don't violate any copyrights."
    },
    {
      question: "What should I include in my text prompt?",
      answer: "Be specific about what you want to change. For example: \"Change the background to a beach sunset\" or \"Make the person wear a red dress instead of blue.\" Avoid vague descriptions and be clear about the transformation you want."
    },
    {
      question: "Is there a limit to how many images I can generate?",
      answer: "Currently, Nano Banana is free to use with reasonable usage limits. We may introduce premium plans in the future for heavy users, but we'll always maintain a generous free tier."
    },
    {
      question: "What if I'm not satisfied with the result?",
      answer: "You can try again with a more specific prompt or adjust your image. Our AI is designed for one-shot editing, but sometimes refining your description can lead to better results."
    },
    {
      question: "Is my data safe and private?",
      answer: "Yes, we take privacy seriously. Your images are securely stored and processed. We don't use your images to train our models or share them with third parties. You can delete your images at any time."
    },
    {
      question: "How can I contact support or report issues?",
      answer: "For any questions, technical issues, or feedback, please contact us at support@nanobanana.top. We typically respond within 24 hours and are committed to helping you get the best results from Nano Banana AI."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-banana-500">Nano Banana</span> FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Nano Banana AI image generation and editing.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl shadow-lg p-8"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-banana-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}