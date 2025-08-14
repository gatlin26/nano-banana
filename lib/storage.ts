import { type InsertImageGeneration, type ImageGeneration } from '@/shared/schema';

export interface IStorage {
  createGeneration(data: Omit<InsertImageGeneration, 'id' | 'createdAt'> & { status: 'pending' | 'completed' | 'failed'; generatedImageUrl: string }): Promise<ImageGeneration>;
  updateGeneration(id: string, updates: Partial<Pick<ImageGeneration, 'status' | 'generatedImageUrl' | 'metadata'>>): Promise<ImageGeneration>;
  getGeneration(id: string): Promise<ImageGeneration | null>;
  listGenerations(limit?: number): Promise<ImageGeneration[]>;
}

// In-memory storage implementation
class MemoryStorage implements IStorage {
  private generations = new Map<string, ImageGeneration>();
  private nextId = 1;

  async createGeneration(data: Omit<InsertImageGeneration, 'id' | 'createdAt'> & { status: 'pending' | 'completed' | 'failed'; generatedImageUrl: string }): Promise<ImageGeneration> {
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
    return Array.from(this.generations.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }
}

// Use memory storage as the primary storage solution
export const storage: IStorage = new MemoryStorage();