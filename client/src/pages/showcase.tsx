import { useQuery } from "@tanstack/react-query";
import { getRecentGenerations } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Rocket } from "lucide-react";

export default function Showcase() {
  const { data: generations, isLoading } = useQuery({
    queryKey: ['/api/generations/recent'],
    queryFn: () => getRecentGenerations(8),
  });

  const showcaseImages = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Ultra-Fast Mountain Generation",
      description: "Created in 0.8 seconds with Nano Banana's optimized neural engine",
      badge: "Nano Banana Speed"
    },
    {
      src: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Instant Garden Creation", 
      description: "Complex scene rendered in milliseconds using Nano Banana technology",
      badge: "Nano Banana Speed"
    },
    {
      src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Real-time Beach Synthesis",
      description: "Nano Banana delivers photorealistic results at lightning speed",
      badge: "Nano Banana Speed"
    },
    {
      src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Rapid Aurora Generation",
      description: "Advanced effects processed instantly with Nano Banana AI",
      badge: "Nano Banana Speed"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lightning-Fast AI Creations
            </h1>
            <p className="text-lg text-gray-600">
              See what Nano Banana generates in milliseconds
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {showcaseImages.map((image, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="p-6">
                  <div className="inline-flex items-center px-3 py-1 bg-banana-100 text-banana-700 rounded-full text-sm font-medium mb-3">
                    <div className="w-2 h-2 bg-banana-500 rounded-full mr-2 animate-pulse"></div>
                    {image.badge}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Generations */}
          {isLoading && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Community Creations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="w-full h-48 rounded-xl" />
                ))}
              </div>
            </div>
          )}

          {generations && generations.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Community Creations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {generations.slice(0, 4).map((generation: any) => (
                  <div key={generation.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img 
                      src={generation.generatedImageUrl} 
                      alt="Community generated image"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-600 truncate">{generation.prompt}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(generation.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">Experience the power of Nano Banana yourself</p>
            <Link href="/generator">
              <Button size="lg" className="bg-banana-500 text-white hover:bg-banana-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
                <Rocket className="w-5 h-5 mr-2" />
                Try Nano Banana Generator
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
