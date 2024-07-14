import { Affiliation, Reputation } from '@galaxyops/character-sheet-contracts';

export namespace Affiliations {
  export const THE_DESTROYERS: Affiliation = {
    aliases: ['Trinity of Destruction', 'The Boundless'],
    description:
      'Three beings whose abilities and existences defies the fundamentals of the natural world',
    lore: [
      'The destroyers are said to bring about an end to all time, heart, and law in the world.',
    ],
    name: 'The Destroyers',
    // notableMembers: [
    //   // Each member has the last name Oni which means demon
    //   Archetype.VALLON_ONI.name,
    //   Archetype.MEEKU_ONI.name,
    //   Archetype.OUERN_ONI.name
    // ],
    standings: [
      { affiliation: Affiliations.THE_CATS, reputation: Reputation.NEUTRAL },
      { affiliation: Affiliations.DEVILS, reputation: Reputation.HONORED },
      {
        affiliation: Affiliations.VALLONS_SEVEN,
        reputation: Reputation.HONORED,
      },
    ],
  };

  export const THE_CATS: Affiliation = {
    description:
      'Each member usually takes form of a household cat. '
      + 'They can take human form, but it drastically lowers their power due to the limits of the normal human potential. '
      + 'The world is said to be their cradle',
    history: ['Three beings who maintain the fundamental order in the world. '],
    lore: [],
    name: 'The Cats',
    // notableMembers: [
    //   // Each member is named after a type of cat which they are based on
    //   Archetype.JANUS_PERSIAN.name,
    //   Archetype.LOOMEE_ANGORA.name,
    //   Archetype.MISCHIEVOUS_PIEBALD.name
    // ],
    standings: [
      {
        affiliation: Affiliations.THE_DESTROYERS,
        reputation: Reputation.NEUTRAL,
      },
    ],
  };

  export const THE_ANTIFELINES: Affiliation = {
    description:
      'A group of individuals dedicated to opposing the Cats and protecting others from their influence.',
    name: 'The Antifelines',
    // TODO consider adding a `rank` field
    // notableMembers: [
    //   // Each member has been given a name that is toxic or poisonous to cats
    //   'Lily',
    //   'Nightshade',
    //   'Hemlock',
    //   'Foxglove',
    //   'Oleander',
    //   'Yew',
    // ],
    standings: [
      { affiliation: Affiliations.THE_CATS, reputation: Reputation.HATED },
    ],
  };

  export const ARCHANGELS: Affiliation = {
    aliases: ['Those Who Live In The Clouds'],
    description: 'They lived among the clouds, had wings, and used magic. ',
    history: [
      'They were a prevenient an ancient race ',
      'They culled and banished their sinners by cutting of their wings and throwing them to the land below. ',
      'Some who fell from the sky retained their powers and thus formed the Magi Order.',
    ],
    lore: [],
    name: 'Archangels',
  };

  export const DEVILS: Affiliation = {
    aliases: ['Eight Shames', 'Sinners'],
    description: 'Eight powerful beings',
    // notableMembers: [
    //   Archetype.WISP.name,
    //   Archetype.DIAG.name,
    //   Archetype.ASMIN.name,
    //   Archetype.LAWZON_GREY.name,
    //   Archetype.VOID.name,
    //   Archetype.GENKI.name,
    //   Archetype.VALLON_ONI.name,
    //   Archetype.SUYRI.name,
    // ],
    history: [
      `The ${ARCHANGELS.name} consider their power too grand and sealed their bodies away`,
      'Each member embodies one of the seven sins',
    ],

    lore: [
      'The demons and more powerful thoughts can change the very fabric of reality in ones mind. The sins can actually change the environment. For example they can pull down a wall that changes where they are.',
      'Each one of the devils has at least two forms; first you must fight the human after defeating the human you fight the devil inside that devours the human.',
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

    name: 'Devils',
  };

  export const GUARDIANS: Affiliation = {
    aliases: ['Eight Honors', 'Virtuous'],
    description: 'Each member embodies one of the eight honors',
    history: [
      'Each member can become a party member. ',
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
    name: 'Guardians',
    // notableMembers: [
    //   Archetype.GUNTER_STONEWELL.name,
    //   Archetype.PENNY_KIBBUTZ.name,
    //   Archetype.TRAEZ_UTHSHA.name,
    //   Archetype.MEEKU_ONI.name,
    //   Archetype.LOOMEE_ANGORA.name,
    //   // Archetype.ANIROTH.name,
    //   Archetype.GAALI_RUNEWIN.name,
    //   Archetype.MALACE_TSIA.name,
    // ],
    standings: [
      { affiliation: Affiliations.THE_CATS, reputation: Reputation.HONORED },
    ],
  };

  export const VALLONS_SEVEN: Affiliation = {
    aliases: ['Seven Devils'],
    description:
      'All members seek an end to all of existence. '
      + `They are the reincarnated sprites of the ${DEVILS.name}. `
      + 'They are lead by Vallon. ',
    name: "Vallon's Seven",
    // notableMembers: [
    //   Archetype.WISP.name,
    //   Archetype.DIAG.name,
    //   Archetype.ASMIN.name,
    //   Archetype.LAWZON_GREY.name,
    //   Archetype.SUYRI.name,
    //   Archetype.GENKI.name,
    //   // TODO add other members
    // ],
  };

  export const BROTHERHOOD: Affiliation = {
    name: 'Brotherhood',
  };

  export const SOLIDER_FORCES: Affiliation = {
    name: 'Solider Forces',
    // notableMembers: [
    //   Archetype.OUERN_ONI.name
    // ],
    parentAffiliation: Affiliations.OCEANIA,
  };

  export const X_SOLIDER_FORCES: Affiliation = {
    description: 'Members are former Soldiers Forces who left on bad terms. ',
    name: 'X-Solider Forces',
    // notableMembers: [
    //   Archetype.OUERN_ONI.name
    // ],
    standings: [
      {
        affiliation: Affiliations.SOLIDER_FORCES,
        reputation: Reputation.HATED,
      },
    ],
  };

  export const MAGI_ORDER: Affiliation = {
    description:
      'They were formed to keep the greater evils of the world at bay. '
      + 'The Magi category of disciplines can only be learned by the Divine Race. '
      + 'The Magi Order members are all divine people. '
      + 'The Magi discipline enables followers to harness the power of the Eight Devils of the old world. '
      + "Faye's gem reacts with Eight Devils in combat to gain new Disciplines",
    name: 'Magi Order',
    // notableMembers: [
    //   Archetype.FAYE_IMAGO.name,
    // ],
    standings: [
      { affiliation: Affiliations.DEVILS, reputation: Reputation.HATED },
    ],
  };

  export const MAGI_ORDER_ELDERS: Affiliation = {
    description:
      'These are the Elders who run the Magi Order. '
      + 'The Magi Order Elders keep secret that the Magi power comes from the Eight Devils. ',
    name: 'Magi Order Elders',
    parentAffiliation: MAGI_ORDER,
    standings: [
      { affiliation: Affiliations.DEVILS, reputation: Reputation.HATED },
    ],
  };

  export const CATCHERS: Affiliation = {
    description:
      'The Catchers wear mask when they fight to become warriors. '
      + 'When they return home they can remove their masks to become civilians again. '
      + 'Those who kill when not wearing a mask are said to always be warriors and cannot return home. '
      + 'The Catchers specialize in summoning spirits. '
      + 'A Catcher can often be identified by their tattoos. '
      + 'The Catchers village uses the yin yang symbol. '
      + 'The Yang being the purified village and the dark inside the yang being the body of the sacrifice. '
      + 'The Yin being the demon world and the light inside the yang being the sacrificed soul'
      + 'It is later inferred the soul of the village has turned dark from performing ritual',
    name: 'Catchers',
    // notableMembers:[
    //   Archetype.MADHI_TSIA.name,
    //   Archetype.MALACE_TSIA.name,
    // ]
  };

  export const REBEL: Affiliation = {
    description:
      'A group that has been formed of people opposing both sides of the conflict that only want peace. '
      + 'They are focused around destroying the ancient technology discovered to prevent the war from escalation.',
    name: 'Rebels',
    // notableMembers: [
    //   Archetype.TRAEZ_UTHSHA.name,
    // ]
  };

  export const ORIGINALS: Affiliation = {
    name: 'Originals',
  };

  export const OCEANIA: Affiliation = {
    description:
      'In order to save what they believe in those at the top of the organization have become corrupt. '
      + 'They have started to resurrect ancient technology that can be used to destroy the other side.'
      + 'They are a peaceful nation that is always at war.',
    name: 'Oceania',
    // notableMembers: [
    //   Archetype.FAYE_IMAGO.name
    // ],
    standings: [
      { affiliation: Affiliations.EURASIA, reputation: Reputation.HATED },
    ],
  };

  export const EURASIA: Affiliation = {
    name: 'Eurasia',
    standings: [
      { affiliation: Affiliations.OCEANIA, reputation: Reputation.HATED },
    ],
  };

  export const BARBARIANS: Affiliation = {
    description:
      'They are a nearly extinct people as solider forces take over their land.'
      + 'They are a primitive but are by no means barbarians.',
    name: 'Barbarians',
  };

  export const NINJA: Affiliation = {
    name: 'Ninja',
    // notableMembers: [
    //   Archetype.PENNY_KIBBUTZ.name,
    // ]
  };

  export const LEGION_SEE: Affiliation = {
    description: 'Essentially a grouping of lesser bosses',
    name: 'Legion See',
    standings: [
      { affiliation: Affiliations.DEVILS, reputation: Reputation.FRIENDLY },
    ],
  };

  export const FLIPPING_PROFITEERS: Affiliation = {
    description:
      'A quirky guild where success starts at the bottom!'
      + 'Recruit pals below you, and watch your loot soar as the pyramid flips for fun and profit.'
      + 'No good doers allowed.',
    name: 'Flipping Profiteers',
    // this is a pyramid scheme that takes advantage of uninformed bad actors
    // notableMembers: [
    //   Archetype.BANDIT.name
    // ],
    standings: [
      { affiliation: Affiliations.OCEANIA, reputation: Reputation.HATED },
    ],
  };
}

export const AffiliationIds = Object.keys(Affiliations);

export type AffiliationId = keyof typeof Affiliations;
