import {Injectable} from '@nestjs/common';
import {Archetype} from '../../value-object/archetype/archetype';

@Injectable()
export class ArchetypeService {
  async find(id: string): Promise<any> {
    try {
      const archetype = (id: string) => {
        type ArchetypeKey = typeof Archetype;
        type ArchetypeType = keyof ArchetypeKey;

        const archetypeId: ArchetypeType = id as ArchetypeType;
        const archetype = Archetype[archetypeId];
        return archetype;
      };

      const result = {id: id, ...archetype(id)};

      return await Promise.resolve(result);
    } catch (err) {
      Promise.reject(new Error('Failed to get Archetype'));
    }
  }

  async findAll(): Promise<any> {
    try {
      const archetypes = Object.keys(Archetype);
      return await Promise.resolve(archetypes);
    } catch (err) {
      Promise.reject(new Error('Failed to list Archetypes'));
    }
  }
}
