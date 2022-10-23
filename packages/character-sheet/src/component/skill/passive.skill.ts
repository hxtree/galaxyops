export enum Passive {
  DUAL_WELD = 'Dual Weld',
  ESCAPE_ARTIST = 'Escape Artist',
  INTIMIDATE = 'Intimidate',
  CONCENTRATION = 'Concentration',
  BLUFF = 'Bluff',
  SENSE_BLUFF = 'Sense Bluff',
  GREEDY_INTENT = 'Greedy Intent',
  SLOTH_COMPOSURE = 'Sloth Composure',
  BLOOD_LUST = 'Blood Lust',
  ENVIOUS_OF_COMBAT = 'Envious of Combat',
  GLUTTONOUS_DESIRE = 'Gluttonous Desire',
  CATCHER = 'Catcher',
}

/**
 * Passive are abilities that are not actions
 * They are kind of like natural actions as they do not need to be called to be used.
 */
export namespace Passive {
  export type PassiveType = {
    name: string;
    description: string;
  };

  export const DualWeld: PassiveType = {
    name: Passive.DUAL_WELD,
    description: 'Can use two one handed weapons at once.',
    // " Both malace and penny can learn this.
  };

  export const EscapeArtist: PassiveType = {
    name: Passive.ESCAPE_ARTIST,
    description: 'Makes it easier to run away from aggresive targets',
  };

  export const Intimidate: PassiveType = {
    name: Passive.INTIMIDATE,
    description: 'Causes fear in enemy',
  };

  export const Concentration: PassiveType = {
    name: Passive.CONCENTRATION,
    description: 'Stay focused',
  };

  export const Bluff: PassiveType = {
    name: Passive.BLUFF,
    description: 'Tell a lie without being caught',
  };

  export const SenseBluff: PassiveType = {
    name: Passive.SENSE_BLUFF,
    description: 'Detect if a lie is being told',
    // if character beats bluff check, a little icon on the screen will tell if someone is trying to bluff party
  };

  export const GreedyIntent: PassiveType = {
    name: Passive.GREEDY_INTENT,
    description: 'Gain 5% more experience than party',
    // earned from defeating Greed
  };

  export const SlothComposure: PassiveType = {
    name: Passive.SLOTH_COMPOSURE,
    description: 'Blows taken when not doing action are halved',
    // earned from defeating Lawzon
  };

  export const BloodLust: PassiveType = {
    name: Passive.BLOOD_LUST,
    description: 'Speed in battle increased',
    // earned from defeating Lust
  };

  export const EnviousOfCombat: PassiveType = {
    name: Passive.ENVIOUS_OF_COMBAT,
    description: 'Gain rage from watching combat',
    // earned from defeating Envy
  };

  export const GluttonousDesire: PassiveType = {
    name: Passive.GLUTTONOUS_DESIRE,
    description: 'Comsumer food items twice as fast',
    // earned from defeating Glutony
  };

  export const Catcher: PassiveType = {
    name: Passive.CATCHER,
    description: 'Receive bonus when catching items',
  };
}
