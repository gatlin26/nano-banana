import { apiRequest } from "./queryClient";
import type { GenerateImageRequest } from "@shared/schema";

export interface GeneratedImage {
  id: string;
  generatedImageUrl: string;
  status: "pending" | "completed" | "failed";
  cost?: string;
  metadata?: any;
}

export async function generateImage(request: GenerateImageRequest): Promise<GeneratedImage> {
  const response = await apiRequest("POST", "/api/generate-image", request);
  return response.json();
}

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

export async function getGenerationStatus(id: string) {
  const response = await apiRequest("GET", `/api/generation/${id}`);
  return response.json();
}

export async function getRecentGenerations(limit: number = 20) {
  const response = await apiRequest("GET", `/api/generations/recent?limit=${limit}`);
  return response.json();
}
