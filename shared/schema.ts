import { z } from "zod";

// User schemas
export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
});

export const insertUserSchema = z.object({
  username: z.string().min(1).max(100),
  email: z.string().email(),
});

// Image generation schemas
export const imageGenerationSchema = z.object({
  id: z.string(),
  userId: z.string().nullable(),
  prompt: z.string(),
  originalImageUrl: z.string().nullable(),
  generatedImageUrl: z.string(),
  model: z.string(),
  dimensions: z.string(),
  style: z.string(),
  status: z.enum(["pending", "completed", "failed"]),
  metadata: z.any().nullable(),
  createdAt: z.date(),
});

export const insertImageGenerationSchema = z.object({
  prompt: z.string().min(1).max(500),
  originalImageUrl: z.string().optional(),
  model: z.string().default("nano-banana"),
  dimensions: z.string().default("1024x1024"),
  style: z.string().default("realistic"),
  metadata: z.any().optional(),
});

export const generateImageRequestSchema = z.object({
  prompt: z.string().min(1).max(500),
  originalImageUrl: z.string().optional(),
  model: z.string().default("nano-banana"),
  dimensions: z.string().default("1024x1024"),
  style: z.string().default("realistic"),
});

// Type exports
export type User = z.infer<typeof userSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type ImageGeneration = z.infer<typeof imageGenerationSchema>;
export type InsertImageGeneration = z.infer<typeof insertImageGenerationSchema>;
export type GenerateImageRequest = z.infer<typeof generateImageRequestSchema>;
