import { MenuSlot } from '../menu-slot';

/**
 * Passive skills are innate abilities or enhancements possessed by characters
 * that do not require conscious activation. Instead, they operate automatically
 * or passively, often enhancing the character's attributes or providing
 * continuous benefits without the need for direct input. These skills are akin
 * to natural instincts or abilities that are constantly active in the
 * background, contributing to the character's overall capabilities without the
 * need for deliberate action.
 */
export namespace Passive {
  export type Type = {
    name: string;
    description: string;
    menuSlot: MenuSlot;
  };

  export const DUAL_WELD: Type = {
    name: 'Dual Weld',
    description: 'Can use two one handed weapons at once.',
    // " Both malace and penny can learn this.
    menuSlot: MenuSlot.NONE,
  };

  export const ESCAPE_ARTIST: Type = {
    name: 'Escape Artist',
    description: 'Makes it easier to run away from aggressive targets',
    menuSlot: MenuSlot.NONE,
  };

  export const INTIMIDATE: Type = {
    name: 'Intimidate',
    description: 'Causes fear in enemy',
    menuSlot: MenuSlot.NONE,
  };

  export const CONCENTRATION: Type = {
    name: 'Concentration',
    description: 'Stay focused',
    menuSlot: MenuSlot.NONE,
  };

  export const BLUFF: Type = {
    name: 'Bluff',
    description: 'Tell a lie without being caught',
    menuSlot: MenuSlot.NONE,
  };

  export const SENSE_BLUFF: Type = {
    name: 'Sense Bluff',
    description: 'Detect if a lie is being told',
    // if character beats bluff check, a little icon on the screen will tell
    // if someone is trying to bluff party
    menuSlot: MenuSlot.NONE,
  };
  export const GREEDY_INTENT: Type = {
    name: 'Greedy Intent',
    description: 'Gain 5% more experience than the party.',
    // Acquired by defeating Greed.
    menuSlot: MenuSlot.NONE,
  };

  export const SLOTH_COMPOSURE: Type = {
    name: 'Sloth Composure',
    description: 'Halves damage taken when not actively engaged in actions.',
    // Acquired by defeating Lawzon.
    menuSlot: MenuSlot.NONE,
  };

  export const BLOOD_LUST: Type = {
    name: 'Blood Lust',
    description: 'Increases speed during battles.',
    // Acquired by defeating Lust.
    menuSlot: MenuSlot.NONE,
  };

  export const ENVIOUS_OF_COMBAT: Type = {
    name: 'Envious of Combat',
    description: 'Gains rage passively from observing combat.',
    // Acquired by defeating Envy.
    menuSlot: MenuSlot.NONE,
  };

  export const GLUTTONOUS_DESIRE: Type = {
    name: 'Gluttonous Desire',
    description: 'Consumes food items twice as fast.',
    // Acquired by defeating Gluttony.
    menuSlot: MenuSlot.NONE,
  };

  export const CATCHER: Type = {
    name: 'Catcher',
    description: 'Receives bonuses when catching items.',
    menuSlot: MenuSlot.NONE,
  };
}
