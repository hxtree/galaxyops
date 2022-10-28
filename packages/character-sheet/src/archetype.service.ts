import {Injectable} from '@nestjs/common';
import {ArchetypeList} from './component/archetype/archetype';

@Injectable()
export class ArchetypeService {
  async find(id: string): Promise<any> {
    try {
      const archetype = (id: string) => {
        type ArchetypeKey = typeof ArchetypeList;
        type ArchetypeType = keyof ArchetypeKey;

        const archetypeId: ArchetypeType = id as ArchetypeType;
        const archetype = ArchetypeList[archetypeId];
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
      const archetypes = Object.keys(ArchetypeList);
      return await Promise.resolve(archetypes);
    } catch (err) {
      Promise.reject(new Error('Failed to list Archetypes'));
    }
  }
}
