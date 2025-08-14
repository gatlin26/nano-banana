import { type User, type InsertUser, type ImageGeneration, type InsertImageGeneration } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createImageGeneration(generation: InsertImageGeneration): Promise<ImageGeneration>;
  getImageGeneration(id: string): Promise<ImageGeneration | undefined>;
  getUserImageGenerations(userId: string): Promise<ImageGeneration[]>;
  updateImageGeneration(id: string, updates: Partial<ImageGeneration>): Promise<ImageGeneration | undefined>;
  getRecentImageGenerations(limit?: number): Promise<ImageGeneration[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private imageGenerations: Map<string, ImageGeneration>;

  constructor() {
    this.users = new Map();
    this.imageGenerations = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  async createImageGeneration(insertGeneration: InsertImageGeneration): Promise<ImageGeneration> {
    const id = randomUUID();
    const generation: ImageGeneration = {
      id,
      userId: null,
      prompt: insertGeneration.prompt,
      originalImageUrl: insertGeneration.originalImageUrl || null,
      generatedImageUrl: "",
      model: insertGeneration.model || "nano-banana",
      dimensions: insertGeneration.dimensions || "1024x1024",
      style: insertGeneration.style || "realistic",
      status: "pending",
      metadata: insertGeneration.metadata || null,
      createdAt: new Date()
    };
    this.imageGenerations.set(id, generation);
    return generation;
  }

  async getImageGeneration(id: string): Promise<ImageGeneration | undefined> {
    return this.imageGenerations.get(id);
  }

  async getUserImageGenerations(userId: string): Promise<ImageGeneration[]> {
    return Array.from(this.imageGenerations.values()).filter(
      (generation) => generation.userId === userId
    ).sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async updateImageGeneration(id: string, updates: Partial<ImageGeneration>): Promise<ImageGeneration | undefined> {
    const existing = this.imageGenerations.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...updates };
    this.imageGenerations.set(id, updated);
    return updated;
  }

  async getRecentImageGenerations(limit: number = 20): Promise<ImageGeneration[]> {
    return Array.from(this.imageGenerations.values())
      .filter(generation => generation.status === "completed")
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
      .slice(0, limit);
  }
}

export const storage = new MemStorage();
