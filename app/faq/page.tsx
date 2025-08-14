import Navigation from '@/components/navigation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata = {
  title: 'FAQ - Nano Banana',
  description: 'Frequently asked questions about Nano Banana AI image generation and editing.',
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about Nano Banana AI image generation.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What makes Nano Banana different from other AI image generators?
                </AccordionTrigger>
                <AccordionContent>
                  Nano Banana specializes in character consistency and scene preservation. Unlike other generators that might change facial features or lose important details, our AI maintains the original character's identity while making the requested transformations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  What image formats are supported?
                </AccordionTrigger>
                <AccordionContent>
                  We support JPEG, PNG, and WebP formats. Images can be up to 5MB in size. For best results, use high-quality images with clear subjects.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How long does it take to generate an image?
                </AccordionTrigger>
                <AccordionContent>
                  Most images are generated within 30-60 seconds, depending on complexity and current server load. We'll show you real-time progress updates during generation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Can I use the generated images commercially?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you own the rights to images you generate with Nano Banana. You can use them for commercial purposes, but ensure your original input images don't violate any copyrights.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  What should I include in my text prompt?
                </AccordionTrigger>
                <AccordionContent>
                  Be specific about what you want to change. For example: "Change the background to a beach sunset" or "Make the person wear a red dress instead of blue." Avoid vague descriptions and be clear about the transformation you want.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Is there a limit to how many images I can generate?
                </AccordionTrigger>
                <AccordionContent>
                  Currently, Nano Banana is free to use with reasonable usage limits. We may introduce premium plans in the future for heavy users, but we'll always maintain a generous free tier.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  What if I'm not satisfied with the result?
                </AccordionTrigger>
                <AccordionContent>
                  You can try again with a more specific prompt or adjust your image. Our AI is designed for one-shot editing, but sometimes refining your description can lead to better results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  Is my data safe and private?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we take privacy seriously. Your images are securely stored and processed. We don't use your images to train our models or share them with third parties. You can delete your images at any time.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}