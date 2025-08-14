import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { imageGenerations, type InsertImageGeneration, type ImageGeneration } from '@/shared/schema';
import { eq } from "drizzle-orm";

const connectionString = process.env.DATABASE_URL || 'postgresql://user:pass@localhost/db';
const sql = neon(connectionString);
const db = drizzle(sql);

export interface IStorage {
  createGeneration(data: Omit<InsertImageGeneration, 'id' | 'createdAt' | 'userId'> & { status: string; generatedImageUrl: string }): Promise<ImageGeneration>;
  updateGeneration(id: string, updates: Partial<Pick<ImageGeneration, 'status' | 'generatedImageUrl' | 'metadata'>>): Promise<ImageGeneration>;
  getGeneration(id: string): Promise<ImageGeneration | null>;
  listGenerations(limit?: number): Promise<ImageGeneration[]>;
}

class DatabaseStorage implements IStorage {
  async createGeneration(data: Omit<InsertImageGeneration, 'id' | 'createdAt' | 'userId'> & { status: string; generatedImageUrl: string }): Promise<ImageGeneration> {
    const [generation] = await db.insert(imageGenerations).values(data).returning();
    return generation;
  }

  async updateGeneration(id: string, updates: Partial<Pick<ImageGeneration, 'status' | 'generatedImageUrl' | 'metadata'>>): Promise<ImageGeneration> {
    const [generation] = await db.update(imageGenerations).set(updates).where(eq(imageGenerations.id, id)).returning();
    return generation;
  }

  async getGeneration(id: string): Promise<ImageGeneration | null> {
    const [generation] = await db.select().from(imageGenerations).where(eq(imageGenerations.id, id));
    return generation || null;
  }

  async listGenerations(limit = 50): Promise<ImageGeneration[]> {
    return await db.select().from(imageGenerations).orderBy(imageGenerations.createdAt).limit(limit);
  }
}

// In-memory storage for development (fallback)
class MemoryStorage implements IStorage {
  private generations = new Map<string, ImageGeneration>();
  private nextId = 1;

  async createGeneration(data: Omit<InsertImageGeneration, 'id' | 'createdAt' | 'userId'> & { status: string; generatedImageUrl: string }): Promise<ImageGeneration> {
    const generation: ImageGeneration = {
      id: `gen_${this.nextId++}`,
      userId: null,
      createdAt: new Date(),
      prompt: data.prompt,
      originalImageUrl: data.originalImageUrl || null,
      generatedImageUrl: data.generatedImageUrl,
      model: data.model || 'nano-banana',
      dimensions: data.dimensions || '1024x1024', 
      style: data.style || 'realistic',
      status: data.status,
      metadata: data.metadata || null
    };
    this.generations.set(generation.id, generation);
    return generation;
  }

  async updateGeneration(id: string, updates: Partial<Pick<ImageGeneration, 'status' | 'generatedImageUrl' | 'metadata'>>): Promise<ImageGeneration> {
    const generation = this.generations.get(id);
    if (!generation) {
      throw new Error('Generation not found');
    }
    const updated = { ...generation, ...updates };
    this.generations.set(id, updated);
    return updated;
  }

  async getGeneration(id: string): Promise<ImageGeneration | null> {
    return this.generations.get(id) || null;
  }

  async listGenerations(limit = 50): Promise<ImageGeneration[]> {
    return Array.from(this.generations.values()).slice(0, limit);
  }
}

// Use database storage if DATABASE_URL is available, otherwise use memory storage
export const storage: IStorage = process.env.DATABASE_URL && process.env.DATABASE_URL !== 'postgresql://user:pass@localhost/db'
  ? new DatabaseStorage()
  : new MemoryStorage();