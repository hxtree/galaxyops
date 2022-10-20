import {AppSyncResolverEvent} from 'aws-lambda';
import {VallonOni} from './archetype/npc';

async function getCharacterSheet(id: string): Promise<any> {
  try {
    const archetype = new VallonOni();
    const character = {
      id: 2,
      name: archetype.name,
      description: archetype.description,
    };
    return await Promise.resolve(character);
  } catch (err) {
    Promise.reject(new Error('Get CharacterSheet Fail'));
  }
}

export const handler = async (event: AppSyncResolverEvent<any>) => {
  switch (event.info.fieldName) {
    case 'getNoteById':
      return await getCharacterSheet(event.arguments.note);
    default:
      return null;
  }
};
