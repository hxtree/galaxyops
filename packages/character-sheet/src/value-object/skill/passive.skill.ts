/**
 * Passive are abilities that are not actions
 * They are kind of like natural actions as they do not need to be called to be used.
 */
export namespace Passive {
  export type Type = {
    name: string;
    description: string;
  };

  export const DUAL_WELD: Type = {
    name: 'Dual Weld',
    description: 'Can use two one handed weapons at once.',
    // " Both malace and penny can learn this.
  };

  export const ESCAPE_ARTIST: Type = {
    name: 'Escape Artist',
    description: 'Makes it easier to run away from aggresive targets',
  };

  export const INTIMIDATE: Type = {
    name: 'Intimidate',
    description: 'Causes fear in enemy',
  };

  export const CONCENTRATION: Type = {
    name: 'Concentration',
    description: 'Stay focused',
  };

  export const BLUFF: Type = {
    name: 'Bluff',
    description: 'Tell a lie without being caught',
  };

  export const SENSE_BLUFF: Type = {
    name: 'Sense Bluff',
    description: 'Detect if a lie is being told',
    // if character beats bluff check, a little icon on the screen will tell if someone is trying to bluff party
  };

  export const GREEDY_INTENT: Type = {
    name: 'Greedy Intent',
    description: 'Gain 5% more experience than party',
    // earned from defeating Greed
  };

  export const SLOTH_COMPOSURE: Type = {
    name: 'Sloth Composure',
    description: 'Blows taken when not doing action are halved',
    // earned from defeating Lawzon
  };

  export const BLOOD_LUST: Type = {
    name: 'Blood Lust',
    description: 'Speed in battle increased',
    // earned from defeating Lust
  };

  export const ENVIOUS_OF_COMBAT: Type = {
    name: 'Envious of Combat',
    description: 'Gain rage from watching combat',
    // earned from defeating Envy
  };

  export const GLUTTONOUS_DESIRE: Type = {
    name: 'Gluttonous Desire',
    description: 'Comsumer food items twice as fast',
    // earned from defeating Glutony
  };

  export const CATCHER: Type = {
    name: 'Catcher',
    description: 'Receive bonus when catching items',
  };
}
