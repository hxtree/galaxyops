import { Affiliation } from './affiliations';

namespace Place {
  export type Type = {
    name: string;
    description?: string;
    facts?: string[];
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
      'The preist lure demons plaguing the town into the skins on innocent as to protect the village and then banish the individual. ',
      'The Catchers village uses the yin yang symbol. ',
    ],
  };

  export const PORT: Type = {
    name: 'Port',
  };

  export const FORT: Type = {
    name: 'Fort',
  };

  export const FLOATING_ISLAND: Type = {
    name: 'Floating Island',
    facts: [
      `This was home to the ${Affiliation.ARCHANGELS.name}`,
      'Ouren Oni is sealed away within the center of the island',
      'The island fell into the sea',
    ],
  };

  export const INFINITY_ISLAND: Type = {
    name: 'Infinity Island',
  };

  export const ENDERS_LAND: Type = {
    name: 'Enders Land',
  };
}
