import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateImageRequestSchema } from "@shared/schema";
import { z } from "zod";
import { r2Service } from "../lib/cloudflare-r2";
import { supabase } from "../lib/supabase";

export async function registerRoutes(app: Express): Promise<Server> {
  // Generate image endpoint
  app.post("/api/generate-image", async (req, res) => {
    try {
      const validatedData = generateImageRequestSchema.parse(req.body);
      
      // Create image generation record
      const generation = await storage.createImageGeneration({
        prompt: validatedData.prompt,
        originalImageUrl: validatedData.originalImageUrl,
        model: validatedData.model,
        dimensions: validatedData.dimensions,
        style: validatedData.style,
        metadata: null
      });

      // Call Nano Banana / NanoGPT API
      const API_KEY = process.env.NANO_GPT_API_KEY || process.env.API_KEY || "demo_key";
      
      try {
        const response = await fetch("https://nano-gpt.com/v1/images/generations", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "hidream", // Using hidream as recommended for general use
            prompt: validatedData.prompt,
            n: 1,
            size: validatedData.dimensions,
            ...(validatedData.originalImageUrl && { imageDataUrl: validatedData.originalImageUrl })
          })
        });

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        
        if (result.data && result.data[0]) {
          const generatedImageUrl = result.data[0].url || `data:image/png;base64,${result.data[0].b64_json}`;
          
          // Update generation record with result
          const updatedGeneration = await storage.updateImageGeneration(generation.id, {
            generatedImageUrl,
            status: "completed",
            metadata: { cost: result.cost, paymentSource: result.paymentSource }
          });

          res.json({
            id: generation.id,
            generatedImageUrl,
            status: "completed",
            cost: result.cost,
            metadata: result
          });
        } else {
          throw new Error("No image data received from API");
        }
      } catch (apiError) {
        // Update generation record with error
        const errorMessage = apiError instanceof Error ? apiError.message : 'Unknown error';
        await storage.updateImageGeneration(generation.id, {
          status: "failed",
          metadata: { error: errorMessage }
        });

        res.status(500).json({ 
          error: "Image generation failed", 
          message: errorMessage,
          id: generation.id 
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid request data", details: error.errors });
      } else {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: "Internal server error", message: errorMessage });
      }
    }
  });

  // Get generation status
  app.get("/api/generation/:id", async (req, res) => {
    try {
      const generation = await storage.getImageGeneration(req.params.id);
      if (!generation) {
        return res.status(404).json({ error: "Generation not found" });
      }
      res.json(generation);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get recent generations for showcase
  app.get("/api/generations/recent", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const generations = await storage.getRecentImageGenerations(limit);
      res.json(generations);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get presigned URL for Cloudflare R2 upload
  app.post("/api/upload-url", async (req, res) => {
    try {
      const { fileType = "image/jpeg" } = req.body;
      
      // Generate unique key for the image
      const imageKey = r2Service.generateImageKey('uploads');
      
      // Get presigned upload URL
      const uploadUrl = await r2Service.getUploadUrl(imageKey, fileType);
      
      res.json({ 
        uploadUrl,
        imageKey,
        publicUrl: r2Service.getPublicUrl(imageKey)
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: "Failed to get upload URL", message: errorMessage });
    }
  });

  // File upload endpoint for handling images (fallback)
  app.post("/api/upload-image", async (req, res) => {
    try {
      const { imageData, filename } = req.body;
      
      if (!imageData) {
        return res.status(400).json({ error: "No image data provided" });
      }

      const dataUrl = imageData.startsWith('data:') ? imageData : `data:image/jpeg;base64,${imageData}`;
      
      res.json({ 
        url: dataUrl,
        filename: filename || 'uploaded-image.jpg'
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: "Upload failed", message: errorMessage });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
