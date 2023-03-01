import { Injectable } from '@nestjs/common';
import { Archetype } from '../../data/archetype/archetype';

@Injectable()
export class ArchetypeService {
  async find(id: string): Promise<any> {
    try {
      type ArchetypeKey = typeof Archetype;
      type ArchetypeType = keyof ArchetypeKey;

      const archetypeId: ArchetypeType = id as ArchetypeType;

      return await Promise.resolve({ id, ...Archetype[archetypeId] });
    } catch (err) {
      return Promise.reject(new Error('Failed to get Archetype'));
    }
  }

  async findAll(): Promise<any> {
    try {
      const archetypes = Object.keys(Archetype);
      return await Promise.resolve(archetypes);
    } catch (err) {
      return Promise.reject(new Error('Failed to list Archetypes'));
    }
  }
}
