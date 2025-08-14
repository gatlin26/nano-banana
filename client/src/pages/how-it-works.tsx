import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Upload, PenTool, Download } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: "Upload Your Image",
      description: "Simply drag and drop your image or click to upload. Supports JPEG, PNG, and WebP formats up to 5MB.",
      color: "bg-banana-500",
    },
    {
      number: 2,
      icon: PenTool,
      title: "Describe Your Vision",
      description: "Write a natural language prompt describing how you want to transform your image. Be as creative as you want!",
      color: "bg-banana-green-500",
    },
    {
      number: 3,
      icon: Download,
      title: "Get Instant Results",
      description: "Watch as Nano Banana generates your perfect edit in seconds. Download, share, or create variations instantly.",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your images in just three simple steps with Nano Banana's advanced AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="relative mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${step.color} text-white rounded-full text-2xl font-bold`}>
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 transform -translate-y-0.5"></div>
                  )}
                </div>
                <div className={`inline-flex items-center justify-center w-12 h-12 ${step.color} text-white rounded-full mb-4`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Details */}
          <div className="bg-gradient-to-br from-banana-50 to-banana-green-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Makes Nano Banana Special?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Advanced AI Model</h3>
                <p className="text-gray-600 mb-4">
                  Nano Banana uses cutting-edge AI technology that outperforms Flux Kontext in character consistency 
                  and scene preservation. Our model is specifically designed for one-shot editing success.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Natural Language Understanding</h3>
                <p className="text-gray-600 mb-4">
                  Just like ChatGPT understands text, Nano Banana understands your image editing intentions. 
                  Describe what you want in plain English, and watch the magic happen.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Lightning Fast Generation</h3>
                <p className="text-gray-600 mb-4">
                  Our optimized neural engine delivers results in milliseconds, not minutes. 
                  No more waiting around - see your creations instantly.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Quality</h3>
                <p className="text-gray-600 mb-4">
                  Every edit maintains professional quality with perfect character consistency 
                  and seamless background integration. Perfect for commercial use.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Creating?</h2>
            <p className="text-lg text-gray-600 mb-8">Join thousands of creators using Nano Banana for their image editing needs</p>
            <Link href="/generator">
              <Button size="lg" className="bg-banana-500 text-white hover:bg-banana-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Start Editing Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
