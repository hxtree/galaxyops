import { Injectable } from '@nestjs/common';
import { Archetype, ArchetypeIds, ArchetypeId } from '../../data/archetype';

@Injectable()
export class ArchetypeService {
  async find(archetypeId: ArchetypeId): Promise<Archetype.Type> {
    try {
      return await Promise.resolve({
        id: archetypeId,
        ...Archetype[archetypeId],
      });
    } catch (err) {
      return Promise.reject(new Error('Failed to get Archetype'));
    }
  }

  async findAll(): Promise<any> {
    try {
      const archetypes = Object.keys(Archetype);
      return await Promise.resolve(archetypes);
    } catch (err) {
      return Promise.reject(new Error('Failed to list ArchetypeIds'));
    }
  }
}
