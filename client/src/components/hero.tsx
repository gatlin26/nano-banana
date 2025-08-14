import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Crown, Rocket, Play, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-br from-banana-50 via-white to-banana-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-banana-100 rounded-full text-banana-800 text-sm font-medium mb-6">
            <Crown className="w-4 h-4 mr-2" />
            The AI model that outperforms Flux Kontext
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Any Image<br />
            <span className="text-banana-500">With Simple Text</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nano Banana's advanced AI model delivers consistent character editing and scene preservation. 
            Experience one-shot editing that works perfectly every time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/generator">
              <Button size="lg" className="bg-banana-500 text-white hover:bg-banana-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                <Rocket className="w-5 h-5 mr-2" />
                Start Editing Free
              </Button>
            </Link>
            <Link href="/showcase">
              <Button size="lg" variant="outline" className="border-2 border-gray-200 text-gray-700 hover:border-banana-300 hover:text-banana-600 transition-all duration-200">
                <Play className="w-5 h-5 mr-2" />
                View Examples
              </Button>
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-4 h-4 text-banana-green-500" />
              <span>One-shot editing</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-4 h-4 text-banana-green-500" />
              <span>Multi-image support</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-4 h-4 text-banana-green-500" />
              <span>Natural language</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
