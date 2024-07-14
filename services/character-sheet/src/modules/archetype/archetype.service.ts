import { Injectable } from '@nestjs/common';
import { Archetype } from '@galaxyops/character-sheet-contracts';
import { Archetypes, ArchetypeIds, ArchetypeId } from '../../data/archetype';

@Injectable()
export class ArchetypeService {
  async find(archetypeId: ArchetypeId): Promise<Archetype> {
    try {
      return await Promise.resolve({
        id: archetypeId,
        ...Archetypes[archetypeId],
      });
    } catch (err) {
      return Promise.reject(new Error('Failed to get Archetype'));
    }
  }

  async findAll(): Promise<any> {
    try {
      const archetypes = Object.keys(Archetypes);
      return await Promise.resolve(archetypes);
    } catch (err) {
      return Promise.reject(new Error('Failed to list ArchetypeIds'));
    }
  }
}
