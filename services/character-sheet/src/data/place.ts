import { Affiliation } from './affiliations';
import { ArchetypeId } from './archetype';

export type SpawnGuideline = {
  archetype: ArchetypeId;
  level: number;
  limit: number;
  probability: number;
};

export namespace Place {
  export type Type = {
    name: string;
    description?: string;
    facts?: string[];
    spawnGuidelines?: SpawnGuideline[];
  };

  export const HOSTIA: Type = {
    description: '',
    facts: [
      "This is the town where both Malace and Madhi's originate. ",
      `It is home to the ${Affiliation.CATCHERS.name}. `,
      'It is home to many master tattoo artist. ',
      'The people of the town wear ninja masks often. ',
      'The village contains a gate to the demon realm. ',
      'The priest lure demons plaguing the town into the skins on innocent as to protect the village and then banish the individual. ',
      'The Catchers village uses the yin yang symbol. ',
    ],
    name: 'Hostia',
    spawnGuidelines: [
      {
        archetype: 'SENSITIVE_PLANT',
        level: 2,
        limit: 20,
        probability: 0.2,
      },
    ],
  };

  export const PORT: Type = {
    name: 'Port',
    spawnGuidelines: [
      {
        archetype: 'SENSITIVE_PLANT',
        level: 2,
        limit: 20,
        probability: 0.2,
      },
    ],
  };

  export const FORT: Type = {
    name: 'Fort',
    spawnGuidelines: [
      {
        archetype: 'SENSITIVE_PLANT',
        level: 2,
        limit: 20,
        probability: 0.2,
      },
    ],
  };

  export const FLOATING_ISLAND: Type = {
    facts: [
      `This was home to the ${Affiliation.ARCHANGELS.name}`,
      'Ouren Oni is sealed away within the center of the island',
      'The island fell into the sea',
    ],
    name: 'Floating Island',
    spawnGuidelines: [
      {
        archetype: 'SEA_HORSE',
        level: 20,
        limit: 20,
        probability: 0.2,
      },
    ],
  };

  export const INFINITY_ISLAND: Type = {
    name: 'Infinity Island',
    spawnGuidelines: [
      {
        archetype: 'DEEP_THINKER',
        level: 10,
        limit: 20,
        probability: 0.002,
      },
    ],
  };

  export const ENDERS_LAND: Type = {
    name: 'Enders Land',
    spawnGuidelines: [
      {
        archetype: 'SENSITIVE_PLANT',
        level: 2,
        limit: 20,
        probability: 0.2,
      },
    ],
  };

  export const IFM_TRAIN: Type = {
    name: 'IFM Train',
    spawnGuidelines: [
      {
        archetype: 'BANDIT',
        level: 2,
        limit: 20,
        probability: 0.2,
      },
    ],
  };
}

/**
 * contains list of all supported PlaceId
 */
export const PlaceIds = Object.keys(Place);

/**
 * type for each supported PlaceId
 */
export type PlaceId = keyof typeof Place;
