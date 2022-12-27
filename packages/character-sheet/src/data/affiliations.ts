export namespace Affiliation {
  export type Type = {
    name: string;
    description?: string;
    lore?: string[];
    history?: string[];
    aliases?: string[];
  };

  export const THE_KEEPERS: Type = {
    name: 'The Keepers',
    description:
      'Each member takes form of a household cat. ' +
      'They can lower themselves to becoming humans. ' +
      'The world is said to be their cradle',
    lore: [],
    history: ['Three beings who maintain the world. '],
  };

  export const THE_DESTROYERS: Type = {
    name: 'The Destroyers',
    description: 'Three beings',
    lore: [],
  };

  export const ARCHANGLES: Type = {
    name: 'Archangles',
    description:
      'They lived among the clouds, had wings, and used magic. ' +
      'They banished their sinners by cutting of their wings and throwing them to the land below. ' +
      'Some retained their powers and thus formed the Magi Order.',
    aliases: ['Race that lives in the clouds'],
    history: ['They were an ancient race '],
  };

  export const GAUARDIANS: Type = {
    name: 'Gaurdians',
  };

  export const EIGHT_DEVILS: Type = {
    name: 'Eight Devils',
    description:
      'Eight beings that were born to destroy the world. ' +
      'Their power was too great. ' +
      `Their bodies were locked away by the ${ARCHANGLES.name}. `,
  };

  export const ORIGINAL_SEVEN: Type = {
    name: 'Original Seven',
    description: 'Each memeber embodies one of the seven sins',
    history: [],
  };

  export const VALLONS_SEVEN: Type = {
    name: "Vallon's Seven",
    description:
      'A group that has arisen that seeks an end to the world.' +
      'They are the reincarnated sprites of the Orginal Seven' +
      'The seven devils are lead by Vallon.',
  };

  export const BROTHERHOOD: Type = {
    name: 'Brotherhood',
  };

  export const SOLIDER_FORCES: Type = {
    name: 'Solider Forces',
  };

  export const MAGI_ORDER: Type = {
    name: 'Magi Order',
    description:
      'They are a group of divine people. ' +
      'They were formed to keep the greater evils of the world at bay. ' +
      'Magi is a class that enables it followers to harness the power of the Eight Devils of the old world (a secret that the Elders keep). ' +
      'The class Magi can only be taking up by the Divine Race. ' +
      'Faye gem reacts with devils in combat to gain new classes',
  };

  export const CATCHERS: Type = {
    name: 'Catchers',
    description:
      'They wear mask when they fight to become warriors so that when they return home they can remove their masks and become civilians again. ' +
      'Those who shed kill when not wearing a mask will always be warriors and cannot return home. ' +
      'They specialize is summoning spirits.' +
      'The village uses the yin yang symbol. ' +
      'The Yang being the purified village and the dark inside the yang being the body of the sacrife. ' +
      'The Yin being the demon world and the light inside the yang being the sacrified soul' +
      'It is later inferred the soul of the village has turned dark from performing ritual',
  };

  export const REBEL: Type = {
    name: 'Rebels',
    description:
      'A group that has been formed of people opposing both sides of the conflict that only want peace. ' +
      'They are focused around destroying the ancient technology discovered to prevent the war from escalation.',
  };

  export const ORIGINALS: Type = {
    name: 'Originals',
  };

  export const OCEANIA: Type = {
    name: 'Oceania',
    description:
      'In order to save what they believe in those at the top of the organization have become corrupt. ' +
      'They have started to resurrect ancient technology that can be used to destroy the other side.' +
      'They are a peaceful nation that is always at war.',
  };

  export const EURASIA: Type = {
    name: 'Eurasia',
  };

  export const BARBARIANS: Type = {
    name: 'Barbarians',
    description:
      'They are a nearly extinct peoiple as solider forces take over their land.' +
      'They are a primitive but are by no means barbarians.',
  };

  export const NINJA: Type = {
    name: 'Ninja',
  };
}
