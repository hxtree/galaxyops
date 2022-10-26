import {Injectable} from '@nestjs/common';
import {Archetype, getArchetypeList} from './component/archetype/archetype';

@Injectable()
export class ArchetypeService {
  getPing(): string {
    return 'Pong!';
  }

  async getByID(id: string): Promise<any> {
    try {
      const archetype = Archetype(id);
      const character = {id: id, ...archetype};
      return await Promise.resolve(character);
    } catch (err) {
      Promise.reject(new Error('Failed to get Archetype'));
    }
  }

  async findAll(): Promise<any> {
    try {
      const archetypes = getArchetypeList();
      return await Promise.resolve(archetypes);
    } catch (err) {
      Promise.reject(new Error('Failed to list Archetypes'));
    }
  }
}
