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
      "This is the town where both Malace and Madhi's originate",
      'The people of this town generally wear ninja masks',
      'Contains a gate to the demon realm',
      'Home to many master tattoo artist',
      'The preist lure demons plaguing the town into the skins on innocent as to protect the village and then banish the individual',
    ],
  };

  export const PORT: Type = {
    name: 'Port',
  };

  export const FORT: Type = {
    name: 'Fort',
  };

  export const INFINITY_ISLAND: Type = {
    name: 'Infinity Island',
  };

  export const ENDERS_LAND: Type = {
    name: 'Enders Land',
  };
}
