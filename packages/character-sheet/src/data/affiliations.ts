export namespace Affiliation {
  export enum Reputation {
    HONORED = 'HONORED',
    FREINDLY = 'FRIENDLY',
    NEUTRAL = 'NUETRAL',
    HATED = 'HATED',
  }

  // The affliation relationship tendency towards another
  export type Standing = {
    affliation: Affiliation.Type;
    reputation: Reputation;
  };

  export type Type = {
    name: string;
    description?: string;
    lore?: string[];
    history?: string[];
    aliases?: string[];
    parentAffliation?: Affiliation.Type;
    standings?: Standing[];
  };

  export const THE_DESTROYERS: Type = {
    name: 'The Destroyers',
    aliases: ['Trinity of Destruction', 'The Boundless'],
    description:
      'Three beings whose abilities and existances defies the fundementals of the natural world',
    lore: [
      'The destroyers are said to bring about an end to all time, heart, and law in the world.',
    ],
    standings: [
      { affliation: Affiliation.THE_KEEPERS, reputation: Reputation.NEUTRAL },
      { affliation: Affiliation.DEVILS, reputation: Reputation.HONORED },
      { affliation: Affiliation.VALLONS_SEVEN, reputation: Reputation.HONORED },
    ],
  };

  export const THE_KEEPERS: Type = {
    name: 'The Keepers',
    description:
      'Each member usually takes form of a household cat. ' +
      'They can take human form, but it drastically lowers their power due to the limits of the normal human potential. ' +
      'The world is said to be their cradle',
    lore: [],
    history: ['Three beings who maintain the fundemental order in the world. '],
    standings: [
      {
        affliation: Affiliation.THE_DESTROYERS,
        reputation: Reputation.NEUTRAL,
      },
    ],
  };

  export const ARCHANGLES: Type = {
    name: 'Archangles',
    aliases: ['Those Who Live In The Clouds'],
    description: 'They lived among the clouds, had wings, and used magic. ',
    lore: [],
    history: [
      'They were a prevenlaint an ancient race ',
      'They culled and banished their sinners by cutting of their wings and throwing them to the land below. ',
      'Some who fell from the sky retained their powers and thus formed the Magi Order.',
    ],
  };

  export const DEVILS: Type = {
    name: 'Devils',
    aliases: ['Eight Shames', 'Sinners'],
    description: 'Eight powerful beings',
    lore: [
      'They were born to destroy the world. ',
      'One member who harm the motherland.', // - Wisp
      'One member betray the people. ', // Diag
      'One member who refuse to be educated. ', // Asmin
      'One member who indulge in comfort and hate work. ', // Lawzon
      'One member who gains at the expense of others. ', // Void, Mahdi
      'One member who trade integrity for profits. ', // Genki
      'One member who break laws and discipline. ', // Vallon
      'One member who wallow in extravagance and pleasures. ', // SUYRI
    ],
    history: [
      `The ${ARCHANGLES.name} consider their power too grand and sealed their bodies away`,
      'Each member embodies one of the seven sins',
    ],
  };

  export const GAUARDIANS: Type = {
    name: 'Gaurdians',
    aliases: ['Eight Honors', 'Virtous'],
    description: 'Each memeber embodies one of the eight honors',
    history: [
      'Each member become a party member. ',
      'Each member embodies an honorable trait. ',
      'One member who love the motherland. ', // Gunter
      'One member serve the people. ', // Penny
      'One member quest for science. ', // Traez
      'One member is hardworking. ', // Meeku
      'One member help each other. ', // Loomee
      'One member is trustworthy. ', // Aniroth
      'One member abide by law and discipline. ', // Gaali
      'One member uphold plain living and hard struggle. ', // Malace
    ],
    standings: [
      { affliation: Affiliation.THE_KEEPERS, reputation: Reputation.HONORED },
    ],
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
    parentAffliation: Affiliation.OCEANIA,
  };

  export const MAGI_ORDER: Type = {
    name: 'Magi Order',
    description:
      'They were formed to keep the greater evils of the world at bay. ' +
      'The Magi category of disciplines can only be learned by the Divine Race. ' +
      'The Magi Order members are all divine people. ' +
      'The Magi discipline enables followers to harness the power of the Eight Devils of the old world. ' +
      "Faye's gem reacts with Eight Devils in combat to gain new Disciplines",
    standings: [
      { affliation: Affiliation.DEVILS, reputation: Reputation.HATED },
    ],
  };

  export const MAGI_ORDER_ELDERS: Type = {
    name: 'Magi Order Elders',
    description:
      'These are the Elders who run the Magi Order. ' +
      'The Magi Order Elders keep secret that the Magi power comes from the Eight Devils. ',
    parentAffliation: MAGI_ORDER,
    standings: [
      { affliation: Affiliation.DEVILS, reputation: Reputation.HATED },
    ],
  };

  export const CATCHERS: Type = {
    name: 'Catchers',
    description:
      'The Catchers wear mask when they fight to become warriors. ' +
      'When they return home they can remove their masks to become civilians again. ' +
      'Those who kill when not wearing a mask are said to always be warriors and cannot return home. ' +
      'The Catchers specialize in summoning spirits. ' +
      'A Catcher can often be identified by their tattoos. ' +
      'The Catchers village uses the yin yang symbol. ' +
      'The Yang being the purified village and the dark inside the yang being the body of the sacrifice. ' +
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
    standings: [
      { affliation: Affiliation.EURASIA, reputation: Reputation.HATED },
    ],
  };

  export const EURASIA: Type = {
    name: 'Eurasia',
    standings: [
      { affliation: Affiliation.OCEANIA, reputation: Reputation.HATED },
    ],
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

  export const LEGION_SEE: Type = {
    name: 'Legion See',
    description: 'Essentially a gouping of lesser bosses',
    standings: [
      { affliation: Affiliation.DEVILS, reputation: Reputation.FREINDLY },
    ],
  };
}
