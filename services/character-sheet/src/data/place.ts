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
    name: 'Hostia',
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
    spawnGuidelines: [
      {
        archetype: 'SENSITIVE_PLANT',
        level: 2,
        probability: 0.2,
        limit: 20,
      },
    ],
  };

  export const PORT: Type = {
    name: 'Port',
    spawnGuidelines: [
      {
        archetype: 'SENSITIVE_PLANT',
        level: 2,
        probability: 0.2,
        limit: 20,
      },
    ],
  };

  export const FORT: Type = {
    name: 'Fort',
    spawnGuidelines: [
      {
        archetype: 'SENSITIVE_PLANT',
        level: 2,
        probability: 0.2,
        limit: 20,
      },
    ],
  };

  export const FLOATING_ISLAND: Type = {
    name: 'Floating Island',
    facts: [
      `This was home to the ${Affiliation.ARCHANGELS.name}`,
      'Ouren Oni is sealed away within the center of the island',
      'The island fell into the sea',
    ],
    spawnGuidelines: [
      {
        archetype: 'SEA_HORSE',
        level: 20,
        probability: 0.2,
        limit: 20,
      },
    ],
  };

  export const INFINITY_ISLAND: Type = {
    name: 'Infinity Island',
    spawnGuidelines: [
      {
        archetype: 'DEEP_THINKER',
        level: 10,
        probability: 0.002,
        limit: 20,
      },
    ],
  };

  export const ENDERS_LAND: Type = {
    name: 'Enders Land',
    spawnGuidelines: [
      {
        archetype: 'SENSITIVE_PLANT',
        level: 2,
        probability: 0.2,
        limit: 20,
      },
    ],
  };
}

export type PlaceKey = typeof Place;
export type PlaceType = keyof PlaceKey;

export type PlacesEnum = keyof typeof Place;

/**
 * contains list of all supported ArchetypeIds
 */
export const PlaceIds = Object.keys(Place);

/**
 * type for each supported ArchetypeId
 */
export type PlaceId = keyof typeof Place;
