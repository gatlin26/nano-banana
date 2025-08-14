import { apiRequest } from "./queryClient";
import type { GenerateImageRequest } from "@shared/schema";

export interface GeneratedImage {
  id: string;
  generatedImageUrl: string;
  status: "pending" | "completed" | "failed";
  cost?: string;
  metadata?: any;
}

export interface UploadUrlResponse {
  uploadUrl: string;
  imageKey: string;
  publicUrl: string;
}

// Get presigned URL for Cloudflare R2 upload
export async function getUploadUrl(fileType: string = "image/jpeg"): Promise<UploadUrlResponse> {
  const response = await apiRequest("POST", "/api/upload-url", { fileType });
  return response.json();
}

// Upload file directly to Cloudflare R2 using presigned URL
export async function uploadToR2(file: File, uploadUrl: string): Promise<void> {
  const response = await fetch(uploadUrl, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type,
    },
  });

  if (!response.ok) {
    throw new Error(`Upload failed: ${response.statusText}`);
  }
}

// Combined upload function: get URL and upload file
export async function uploadImageToR2(file: File): Promise<{ url: string; filename: string }> {
  try {
    // Get presigned upload URL
    const { uploadUrl, publicUrl } = await getUploadUrl(file.type);
    
    // Upload file to R2
    await uploadToR2(file, uploadUrl);
    
    return {
      url: publicUrl,
      filename: file.name
    };
  } catch (error) {
    console.error("R2 upload failed, falling back to base64:", error);
    // Fallback to existing base64 upload
    return uploadImage(file);
  }
}

// Fallback: Upload image as base64 (existing method)
export async function uploadImage(file: File): Promise<{ url: string; filename: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const result = e.target?.result as string;
        const response = await apiRequest("POST", "/api/upload-image", {
          imageData: result,
          filename: file.name
        });
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

export async function generateImage(request: GenerateImageRequest): Promise<GeneratedImage> {
  const response = await apiRequest("POST", "/api/generate-image", request);
  return response.json();
}

export async function getGenerationStatus(id: string) {
  const response = await apiRequest("GET", `/api/generation/${id}`);
  return response.json();
}

export async function getRecentGenerations(limit: number = 20) {
  const response = await apiRequest("GET", `/api/generations/recent?limit=${limit}`);
  return response.json();
}