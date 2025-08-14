import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, integer, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const imageGenerations = pgTable("image_generations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  prompt: text("prompt").notNull(),
  originalImageUrl: text("original_image_url"),
  generatedImageUrl: text("generated_image_url").notNull(),
  model: text("model").notNull().default("nano-banana"),
  dimensions: text("dimensions").notNull().default("1024x1024"),
  style: text("style").notNull().default("realistic"),
  status: text("status").notNull().default("pending"), // pending, completed, failed
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
});

export const insertImageGenerationSchema = createInsertSchema(imageGenerations).pick({
  prompt: true,
  originalImageUrl: true,
  model: true,
  dimensions: true,
  style: true,
  metadata: true,
});

export const generateImageRequestSchema = z.object({
  prompt: z.string().min(1).max(500),
  originalImageUrl: z.string().optional(),
  model: z.string().default("nano-banana"),
  dimensions: z.string().default("1024x1024"),
  style: z.string().default("realistic"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertImageGeneration = z.infer<typeof insertImageGenerationSchema>;
export type ImageGeneration = typeof imageGenerations.$inferSelect;
export type GenerateImageRequest = z.infer<typeof generateImageRequestSchema>;
