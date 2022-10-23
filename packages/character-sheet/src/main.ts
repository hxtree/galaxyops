import {AppSyncResolverEvent} from 'aws-lambda';
import {Archetype, getArchetypeList} from './archetype/archetype';

async function getArchetype(id: string): Promise<any> {
  try {
    const archetype = Archetype(id);
    const character = {id: id, ...archetype};
    return await Promise.resolve(character);
  } catch (err) {
    Promise.reject(new Error('Failed to get Archetype'));
  }
}

async function listArchetypes(): Promise<any> {
  try {
    const archetypes = getArchetypeList();
    return await Promise.resolve(archetypes);
  } catch (err) {
    Promise.reject(new Error('Failed to list Archetypes'));
  }
}

export const handler = async (event: AppSyncResolverEvent<any>) => {
  switch (event.info.fieldName) {
    case 'listArchetypes':
      return await listArchetypes();
    case 'getArchetypeById':
      return await getArchetype(event.arguments.archetypeId);
    default:
      return null;
  }
};
