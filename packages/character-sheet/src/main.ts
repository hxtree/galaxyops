import {AppSyncResolverEvent} from 'aws-lambda';
import {NPCList, npc} from './archetype/npc';

async function getCharacterSheet(id: string): Promise<any> {
  try {
    const archetype = npc(id);
    const character = {id: 2, ...archetype};
    return await Promise.resolve(character);
  } catch (err) {
    Promise.reject(new Error('Failed to get CharacterSheet'));
  }
}

async function listCharacterSheets(): Promise<any> {
  try {
    const archetype: NPCList.Character = NPCList['Lawzon'];
    const character = {id: 2, ...archetype};
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
      return await getCharacterSheet(event.arguments.characterSheetId);
    default:
      return null;
  }
};
