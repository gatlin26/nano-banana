import { useState } from "react";
import { Download, Expand, Share, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { GeneratedImage } from "@/lib/api";

interface OutputGalleryProps {
  images: GeneratedImage[];
  loading: boolean;
}

export default function OutputGallery({ images, loading }: OutputGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleDownload = (imageUrl: string, prompt: string) => {
    // Create a download link
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `nano-banana-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (imageUrl: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Nano Banana Generated Image',
          text: 'Check out this AI-generated image!',
          url: imageUrl
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(imageUrl);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        <ImageIcon className="inline w-5 h-5 text-banana-500 mr-2" />
        Output Gallery
      </h3>
      
      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-banana-100 rounded-full mb-4">
            <ImageIcon className="w-8 h-8 text-banana-500 animate-pulse" />
          </div>
          <p className="text-lg font-medium text-gray-700 mb-2">Generating your image...</p>
          <div className="w-48 bg-gray-200 rounded-full h-2 mx-auto">
            <div className="bg-banana-500 h-2 rounded-full animate-pulse" style={{ width: "65%" }}></div>
          </div>
        </div>
      )}
      
      {/* Empty State */}
      {!loading && images.length === 0 && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <ImageIcon className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-lg font-medium text-gray-700 mb-2">Your ultra-fast AI creations appear here instantly</p>
          <p className="text-gray-500">Ready for instant generation</p>
          <p className="text-sm text-gray-400 mt-2">Enter your prompt and unleash the power</p>
        </div>
      )}
      
      {/* Generated Images */}
      {!loading && images.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {images.map((image) => (
            <div key={image.id} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={image.generatedImageUrl} 
                alt="AI generated image" 
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => setSelectedImage(image.generatedImageUrl)}
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="p-2 bg-white rounded-full text-gray-700 hover:text-banana-500"
                    onClick={() => handleDownload(image.generatedImageUrl, `Generated image ${image.id}`)}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="p-2 bg-white rounded-full text-gray-700 hover:text-banana-500"
                    onClick={() => setSelectedImage(image.generatedImageUrl)}
                  >
                    <Expand className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="p-2 bg-white rounded-full text-gray-700 hover:text-banana-500"
                    onClick={() => handleShare(image.generatedImageUrl)}
                  >
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                <p className="text-sm font-medium">Status: {image.status}</p>
                {image.cost && <p className="text-xs opacity-75">Cost: ${image.cost}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for expanded image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
