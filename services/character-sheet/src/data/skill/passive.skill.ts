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
  export const DUAL_WELD_LV1: SkillType = {
    description: 'Can use two one handed weapons at once.',
    menuSlot: MenuSlot.NONE,
    name: 'Dual Weld',
    target: ActionTarget.SELF,
  };

  export const ESCAPE_ARTIST_LV1: SkillType = {
    description: 'Makes it easier to run away from aggressive targets',
    effect: [
      {
        add: Attribute.SPEED,
        chance: 1.0,
        quantity: '10',
      },
    ],
    menuSlot: MenuSlot.NONE,
    name: 'Escape Artist',
    target: ActionTarget.SELF,
  };

  export const INTIMIDATE_LV1: SkillType = {
    description: 'Causes fear in enemy',
    menuSlot: MenuSlot.NONE,
    name: 'Intimidate',
    target: ActionTarget.OPPONENT,
  };

  export const CONCENTRATION_LV1: SkillType = {
    description: 'Maintain focused for longer periods of time',
    effect: [
      {
        add: Attribute.SPIRIT,
        chance: 1.0,
        quantity: '10',
      },
    ],
    menuSlot: MenuSlot.NONE,
    name: 'Concentration',
    target: ActionTarget.SELF,
  };

  export const BLUFF_LV1: SkillType = {
    description: 'Tell a lie without being caught',
    effect: [
      {
        add: Attribute.SPIRIT,
        chance: 1.0,
        quantity: '10',
      },
    ],
    menuSlot: MenuSlot.NONE,
    name: 'Bluff',
    target: ActionTarget.SELF,
  };

  export const SENSE_BLUFF_LV1: SkillType = {
    description: 'Detect if a lie is being told',
    // if character beats bluff check, a little icon on the screen will tell
    // if someone is trying to bluff party
    menuSlot: MenuSlot.NONE,

    name: 'Sense Bluff',

    target: ActionTarget.SELF,
  };
  export const GREEDY_INTENT_LV1: SkillType = {
    description: 'Gain more experience than the party.',
    effect: [
      {
        add: Attribute.EXPERIENCE,
        chance: 1.0,
        quantity: '5',
      },
    ],
    menuSlot: MenuSlot.NONE,
    name: 'Greedy Intent',
    target: ActionTarget.SELF,
  };

  export const SLOTH_COMPOSURE_LV1: SkillType = {
    description: 'Decreases damage taken',
    effect: [
      {
        add: Attribute.DEFENSE,
        chance: 1.0,
        quantity: '10',
      },
    ],
    menuSlot: MenuSlot.NONE,
    name: 'Sloth Composure',
    target: ActionTarget.SELF,
  };

  export const BLOOD_LUST_LV1: SkillType = {
    description: 'Increases speed.', // Acquired by defeating Lust.
    effect: [
      {
        add: Attribute.SPEED,
        chance: 1.0,
        quantity: '10',
      },
    ],
    menuSlot: MenuSlot.NONE,
    name: 'Blood Lust',
    target: ActionTarget.SELF,
  };

  export const ENVIOUS_OF_COMBAT_LV1: SkillType = {
    description: 'Gains increased power.', // Acquired by defeating Envy.
    effect: [
      {
        add: Attribute.POWER,
        chance: 1.0,
        quantity: '10',
      },
    ],
    menuSlot: MenuSlot.NONE,
    name: 'Envious of Combat',
    target: ActionTarget.SELF,
  };

  export const GLUTTONOUS_DESIRE_LV1: SkillType = {
    description: 'Consumes food items twice as fast.',
    effect: [
      {
        add: Attribute.LIFE,
        chance: 1.0,
        quantity: '10',
      },
      // TODO add effect for consuming food
    ],
    // Acquired by defeating Gluttony.
    menuSlot: MenuSlot.NONE,
    name: 'Gluttonous Desire',
    target: ActionTarget.SELF,
  };

  export const CATCHER_LV1: SkillType = {
    description: 'Receives bonuses when catching items.',
    effect: [
      {
        add: Attribute.SPEED,
        chance: 1.0,
        quantity: '10',
      },
    ],
    menuSlot: MenuSlot.NONE,
    name: 'Catcher',
    target: ActionTarget.SELF,
  };

  export const LIMITLESS_LV1: SkillType = {
    description: 'Higher level cap.',
    menuSlot: MenuSlot.NONE,
    name: 'Limitless',
    target: ActionTarget.SELF,
  };
}
