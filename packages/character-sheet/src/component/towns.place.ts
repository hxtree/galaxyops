namespace Place {
  export type Place = {
    name: string;
    description?: string;
    facts?: string[];
  };

  export const Hostia: Place = {
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

  export const Port: Place = {
    name: 'Port',
  };

  export const Fort: Place = {
    name: 'Fort',
  };

  export const InfinityIsland: Place = {
    name: 'Infinity Island',
  };

  export const EndersLand: Place = {
    name: 'Enders Land',
  };
}
