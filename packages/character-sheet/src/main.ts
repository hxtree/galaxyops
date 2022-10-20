import {AppSyncResolverEvent} from 'aws-lambda';
import {VallonOni} from './archetype/npc';

async function getCharacterSheet(id: string): Promise<any> {
  try {
    // const archetype = new VallonOni();
    const character = {
      id: '2222',
      name: 'Vallon Oni',
      description: 'White hair',
    };
    return await Promise.resolve(character);
  } catch (err) {
    Promise.reject(new Error('Failed to get CharacterSheet'));
  }
}

async function listCharacterSheets(): Promise<any> {
  try {
    const archetype = new VallonOni();
    const character = {
      id: '22',
      name: archetype.name,
      description: archetype.description,
    };
    return await Promise.resolve(character);
  } catch (err) {
    Promise.reject(new Error('Failed to get CharacterSheets'));
  }
}

export const handler = async (event: AppSyncResolverEvent<any>) => {
  switch (event.info.fieldName) {
    case 'listCharacterSheets':
      return await listCharacterSheets();
    case 'getCharacterSheetById':
      return await getCharacterSheet(event.arguments.id);
    default:
      return null;
  }
};
