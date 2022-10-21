import {Drive, Life, Spirit} from '../component/gauges';
import {Stats} from '../component/stats';
import {Trait} from '../component/trait';
import {Items} from '../component/item.gear';
import {StatusEffect} from '../component/status.effect';

/**
 * A human or non-humanoid character.
 */
export namespace NPCList {
  export type Character = {
    name: string;
    description: string;
    history?: string;
    life?: Life;
    drive?: Drive;
    spirit?: Spirit;
    stats?: Stats;
    traits?: Trait[];
    statusEffects?: StatusEffect[];
    loot?: Items;
  };

  export const VallonOni: Character = {
    name: 'Vallon Oni',
    description: 'White hair',
  };

  export const Mischievous: Character = {
    name: 'Mischievous',
    description: 'A black and white cat with yellow eyes.',
  };

  export const MahdiTsia: Character = {
    name: 'Mahdi Tsia',
    description: "Malace's brother",
  };

  export const Lawzon: Character = {
    name: 'Lawzon',
    description: '',
    history:
      'Rumored to be the most powerful fighter from the north. He fought only to protect his village until it was wiped out from a great frost. He now wonders around lifelessly in search of an end. He is by far the most strongest of the seven but has no will to fight.',
  };

  export const Janus: Character = {
    name: 'Janus',
    description: 'The Keeper of Time',
  };

  export const Spider: Character = {
    name: 'Spider',
    description: 'A spider',
  };
}

export type NPCKey = typeof NPCList;
export type NPCType = keyof NPCKey;

export const npc = (id: string) => {
  const npcId: NPCType = id as NPCType;
  const archetype = NPCList[npcId];
  return archetype;
};
