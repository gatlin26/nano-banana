import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is Nano Banana?",
      answer: "Nano Banana is an advanced AI image editor that allows you to transform photos using natural language prompts. It outperforms other models like Flux Kontext in character consistency and scene preservation, delivering perfect one-shot editing results."
    },
    {
      question: "How does it work?",
      answer: "Simply upload your image, write a text prompt describing how you want to transform it, and Nano Banana's AI will generate the edited result instantly. The model understands complex natural language instructions and maintains character consistency across edits."
    },
    {
      question: "How is it better than Flux Kontext?",
      answer: "Nano Banana excels in character consistency, maintaining perfect face details and identities across edits. It also provides superior scene preservation and background fusion compared to Flux Kontext, with better one-shot editing capabilities that deliver perfect results without multiple iterations."
    },
    {
      question: "Can I use it for commercial projects?",
      answer: "Yes, Nano Banana is perfect for commercial use including social media content, marketing campaigns, and AI influencer creation. The model maintains consistent character details making it ideal for professional workflows and UGC content creation."
    },
    {
      question: "What types of edits can it handle?",
      answer: "Nano Banana can handle a wide range of edits including style transfers, object addition/removal, character modifications, background changes, and creative transformations. It supports multi-image workflows and understands complex natural language instructions for precise editing control."
    },
    {
      question: "What file formats are supported?",
      answer: "Nano Banana supports JPEG, PNG, and WebP image formats. The maximum file size is 5MB per image. The tool can output images in various dimensions including 1024x1024, 1024x1792, and 1792x1024."
    },
    {
      question: "How fast is the generation process?",
      answer: "Nano Banana is optimized for speed, typically generating high-quality images in just a few seconds. The exact time depends on the complexity of your prompt and the dimensions of the output image."
    },
    {
      question: "Is there a limit to how many images I can generate?",
      answer: "Usage limits depend on your account type and the current pricing model. We offer both free tiers for testing and paid plans for heavy usage. Check our pricing page for current limits and costs."
    },
    {
      question: "Can I edit multiple images at once?",
      answer: "Yes, Nano Banana supports multi-image workflows. You can reference multiple images in your prompts or edit several images in sequence. This is particularly useful for maintaining consistency across a series of images."
    },
    {
      question: "Where can I try Nano Banana?",
      answer: "You can try Nano Banana right here on our website! Simply go to the generator section, upload an image, and start editing with text prompts. The model is also available on LMArena for comparison with other AI models."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Everything you need to know about Nano Banana
            </p>
          </div>

          <div className="space-y-4 mb-16">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openItem === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openItem === index && (
                  <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">
                    <p className="pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-banana-50 to-banana-green-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Try Nano Banana yourself or reach out to our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/generator">
                <Button className="bg-banana-500 text-white hover:bg-banana-600">
                  Try Nano Banana Free
                </Button>
              </Link>
              <Button variant="outline" className="border-banana-300 text-banana-600 hover:bg-banana-50">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
