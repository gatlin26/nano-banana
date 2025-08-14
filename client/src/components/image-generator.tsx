import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wand2, Lightbulb } from "lucide-react";
import { generateImage } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import FileUpload from "./file-upload";
import OutputGallery from "./output-gallery";
import type { GeneratedImage } from "@/lib/api";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("Transform this image into a watercolor painting");
  const [originalImageUrl, setOriginalImageUrl] = useState<string>("");
  const [dimensions, setDimensions] = useState("1024x1024");
  const [style, setStyle] = useState("realistic");
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const { toast } = useToast();

  const generateMutation = useMutation({
    mutationFn: generateImage,
    onSuccess: (data) => {
      setGeneratedImages(prev => [data, ...prev]);
      toast({
        title: "Image generated successfully!",
        description: data.cost ? `Cost: $${data.cost}` : "Your image is ready",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Generation failed",
        description: error.message || "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "Prompt required",
        description: "Please enter a description for your image transformation.",
        variant: "destructive",
      });
      return;
    }

    generateMutation.mutate({
      prompt: prompt.trim(),
      originalImageUrl: originalImageUrl || undefined,
      model: "nano-banana",
      dimensions,
      style,
    });
  };

  const examplePrompts = [
    "Transform into a watercolor painting",
    "Make it look like a vintage photograph",
    "Convert to anime style artwork",
    "Add magical sparkles and fairy lights",
    "Change the background to a sunset beach",
  ];

  const handleExamplePrompt = (examplePrompt: string) => {
    setPrompt(examplePrompt);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Try The AI Editor
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the power of nano-banana's natural language image editing. 
            Transform any photo with simple text commands.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Controls */}
          <div className="space-y-6">
            {/* File Upload */}
            <FileUpload 
              onUpload={setOriginalImageUrl}
              disabled={generateMutation.isPending}
            />

            {/* Prompt Input */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                <Wand2 className="inline w-5 h-5 text-banana-500 mr-2" />
                Main Prompt
              </h3>
              
              <Textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:border-banana-400 focus:outline-none resize-none text-gray-700 placeholder-gray-400" 
                placeholder="Describe how you want to transform your image..."
                maxLength={500}
              />
              
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  {prompt.length}/500 characters
                </span>
                <Button 
                  variant="ghost"
                  size="sm"
                  className="text-banana-500 hover:text-banana-600"
                  onClick={() => navigator.clipboard.writeText(prompt)}
                >
                  <Lightbulb className="w-4 h-4 mr-1" />
                  Copy
                </Button>
              </div>

              {/* Example Prompts */}
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Try these examples:</p>
                <div className="flex flex-wrap gap-2">
                  {examplePrompts.map((example, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => handleExamplePrompt(example)}
                    >
                      {example}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generation Controls */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                <svg className="inline w-5 h-5 text-banana-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
                Generation Controls
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions</label>
                  <Select value={dimensions} onValueChange={setDimensions}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1024x1024">1024 × 1024</SelectItem>
                      <SelectItem value="1024x1792">1024 × 1792</SelectItem>
                      <SelectItem value="1792x1024">1792 × 1024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
                  <Select value={style} onValueChange={setStyle}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realistic">Realistic</SelectItem>
                      <SelectItem value="artistic">Artistic</SelectItem>
                      <SelectItem value="anime">Anime</SelectItem>
                      <SelectItem value="cartoon">Cartoon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 bg-banana-500 text-white hover:bg-banana-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                size="lg"
                onClick={handleGenerate}
                disabled={generateMutation.isPending}
              >
                <Wand2 className="w-5 h-5 mr-2" />
                {generateMutation.isPending ? "Generating..." : "Generate Now"}
              </Button>
            </div>
          </div>

          {/* Output Gallery */}
          <OutputGallery 
            images={generatedImages}
            loading={generateMutation.isPending}
          />
        </div>
      </div>
    </section>
  );
}
