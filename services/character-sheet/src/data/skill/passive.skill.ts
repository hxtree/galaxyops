import { Attribute } from '../attribute';
import { MenuSlot, MenuSlotType } from '../menu-slot';
import { EffectTable } from '../table.effect';
import { SkillType } from '.';
import { ActionTarget } from '../action-target';

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
  export const DUAL_WELD: SkillType = {
    name: 'Dual Weld',
    description: 'Can use two one handed weapons at once.',
    // " Both malace and penny can learn this.
    menuSlot: MenuSlot.NONE,
  };

  export const ESCAPE_ARTIST: SkillType = {
    name: 'Escape Artist',
    description: 'Makes it easier to run away from aggressive targets',
    menuSlot: MenuSlot.NONE,
  };

  export const INTIMIDATE: SkillType = {
    name: 'Intimidate',
    target: ActionTarget.OPPONENT,
    description: 'Causes fear in enemy',
    menuSlot: MenuSlot.NONE,
  };

  export const CONCENTRATION: SkillType = {
    name: 'Concentration',
    target: ActionTarget.SELF,
    description: 'Stay focused',
    menuSlot: MenuSlot.NONE,
  };

  export const BLUFF: SkillType = {
    name: 'Bluff',
    description: 'Tell a lie without being caught',
    menuSlot: MenuSlot.NONE,
  };

  export const SENSE_BLUFF: SkillType = {
    name: 'Sense Bluff',
    target: ActionTarget.SELF,
    description: 'Detect if a lie is being told',
    // if character beats bluff check, a little icon on the screen will tell
    // if someone is trying to bluff party
    menuSlot: MenuSlot.NONE,
  };
  export const GREEDY_INTENT: SkillType = {
    name: 'Greedy Intent',
    target: ActionTarget.SELF,
    description: 'Gain 5% more experience than the party.',
    // Acquired by defeating Greed.
    menuSlot: MenuSlot.NONE,
  };

  export const SLOTH_COMPOSURE: SkillType = {
    name: 'Sloth Composure',
    target: ActionTarget.SELF,
    description: 'Halves damage taken when not actively engaged in actions.',
    // half damage and decreases DRIVE gauge
    // Acquired by defeating Lawzon.
    menuSlot: MenuSlot.NONE,
  };

  export const BLOOD_LUST: SkillType = {
    name: 'Blood Lust',
    target: ActionTarget.SELF,
    description: 'Increases speed.',
    effect: [
      {
        add: Attribute.SPEED,
        quantity: '10',
        chance: 1.0,
      },
    ],
    // Acquired by defeating Lust.
    menuSlot: MenuSlot.NONE,
  };

  export const ENVIOUS_OF_COMBAT: SkillType = {
    name: 'Envious of Combat',
    target: ActionTarget.SELF,
    description: 'Gains increased power.',
    effect: [
      {
        add: Attribute.POWER,
        quantity: '10',
        chance: 1.0,
      },
    ],
    // Acquired by defeating Envy.
    menuSlot: MenuSlot.NONE,
  };

  export const GLUTTONOUS_DESIRE: SkillType = {
    name: 'Gluttonous Desire',
    target: ActionTarget.SELF,
    description: 'Consumes food items twice as fast.',
    effect: [
      {
        add: Attribute.LIFE,
        quantity: '10',
        chance: 1.0,
      },
      // TODO add effect for consuming food
    ],
    // Acquired by defeating Gluttony.
    menuSlot: MenuSlot.NONE,
  };

  export const CATCHER: SkillType = {
    name: 'Catcher',
    target: ActionTarget.SELF,
    description: 'Receives bonuses when catching items.',
    menuSlot: MenuSlot.NONE,
  };

  export const LIMITLESS: SkillType = {
    name: 'Limitless',
    target: ActionTarget.SELF,
    description: 'Higher level cap.',
    menuSlot: MenuSlot.NONE,
  };
}
