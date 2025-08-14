import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUpload } from "lucide-react";
import { uploadImage } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

interface FileUploadProps {
  onUpload: (url: string) => void;
  disabled?: boolean;
}

export default function FileUpload({ onUpload, disabled }: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    
    const file = acceptedFiles[0];
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 5MB",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    try {
      const result = await uploadImage(file);
      onUpload(result.url);
      toast({
        title: "Image uploaded successfully",
        description: `Uploaded ${result.filename}`,
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  }, [onUpload, toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp']
    },
    maxFiles: 1,
    disabled: disabled || uploading
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        <CloudUpload className="inline w-5 h-5 text-banana-500 mr-2" />
        Reference Image
      </h3>
      
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
          isDragActive 
            ? "border-banana-400 bg-banana-50" 
            : "border-gray-300 hover:border-banana-400"
        } ${disabled || uploading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <input {...getInputProps()} />
        <CloudUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        {uploading ? (
          <div>
            <p className="text-lg font-medium text-gray-700 mb-2">Uploading...</p>
            <div className="w-32 bg-gray-200 rounded-full h-2 mx-auto">
              <div className="bg-banana-500 h-2 rounded-full animate-pulse" style={{ width: "65%" }}></div>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-lg font-medium text-gray-700 mb-2">
              {isDragActive ? "Drop your image here" : "Drop an image here or click to upload"}
            </p>
            <p className="text-sm text-gray-500">JPEG, PNG, or WebP • Max 5MB</p>
          </div>
        )}
      </div>
    </div>
  );
}
