import {AppSyncResolverEvent} from 'aws-lambda';
import {ArchetypeList, Archetype} from './archetype/archetype';

async function getArchetype(id: string): Promise<any> {
  try {
    const archetype = Archetype(id);
    const character = {id: id, ...archetype};
    return await Promise.resolve(character);
  } catch (err) {
    Promise.reject(new Error('Failed to get Archetype'));
  }
}

// async function listArchetypes(): Promise<any> {
//   try {
//     const archetype: ArchetypeList.Character = NPCList['Lawzon'];
//     const character = {archetype};
//     return await Promise.resolve(character);
//   } catch (err) {
//     Promise.reject(new Error('Failed to get Archetypes'));
//   }
// }

export const handler = async (event: AppSyncResolverEvent<any>) => {
  switch (event.info.fieldName) {
    // case 'listArchetypes':
    //   return await listArchetypes();
    case 'getArchetypeById':
      return await getArchetype(event.arguments.archetypeId);
    default:
      return null;
  }
};
