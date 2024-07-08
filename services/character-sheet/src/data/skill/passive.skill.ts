import { Attribute } from '../attribute';
import { MenuSlot, MenuSlotType } from '../menu-slot';
import { EffectTable } from '../table.effect';
import { SkillLevel, SkillType } from './skill.type';
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
  export const PHYSICAL_CONDITIONING_LV1: SkillType = {
    actionEffects: {
      SELF: [
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '10',
        },
        {
          add: Attribute.DEFENSE,
          chance: 1.0,
          quantity: '10',
        },
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '10',
        },
        {
          add: Attribute.SPIRIT,
          chance: 1.0,
          quantity: '10',
        },
        {
          add: Attribute.LIFE,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    description: 'Increases all attributes.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Physical Conditioning',
    target: ActionTarget.SELF,
  };

  export const SPIRITUAL_GROWTH_LV1: SkillType = {
    actionEffects: {
      SELF: [
        {
          add: Attribute.SPIRIT,
          chance: 1.0,
          quantity: '20',
        },
      ],
    },
    description: 'Increases spirit',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Spiritual Growth',
    target: ActionTarget.SELF,
  };

  export const MENTAL_DISCIPLINE_LV1: SkillType = {
    actionEffects: {
      SELF: [
        {
          add: Attribute.INTELLIGENCE,
          chance: 1.0,
          quantity: '20',
        },
        {
          add: Attribute.DRIVE,
          chance: 1.0,
          quantity: '20',
        },
      ],
    },
    description: 'Mental Discipline',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Mental Discipline',
    target: ActionTarget.SELF,
  };

  export const PRECISION_AND_TECHNIQUE_LV1: SkillType = {
    actionEffects: {
      SELF: [
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '20',
        },
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '20',
        },
      ],
    },
    description: 'Align body correctly to generate more power and speed.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Precision and Technique',
    target: ActionTarget.SELF,
  };

  export const DUAL_WELD_LV1: SkillType = {
    description: 'Can use two one handed weapons at once.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Dual Weld',
    target: ActionTarget.SELF,
  };

  export const ESCAPE_ARTIST_LV1: SkillType = {
    actionEffects: {
      SELF: [
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    description: 'Makes it easier to run away from aggressive targets',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Escape Artist',
    target: ActionTarget.SELF,
  };

  export const INTIMIDATE_LV1: SkillType = {
    description: 'Causes fear in enemy',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Intimidate',
    target: ActionTarget.OPPONENT,
  };

  export const CONCENTRATION_LV1: SkillType = {
    actionEffects: {
      SELF: [
        {
          add: Attribute.SPIRIT,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    description: 'Maintain focused for longer periods of time',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Concentration',
    target: ActionTarget.SELF,
  };

  export const BLUFF_LV1: SkillType = {
    actionEffects: {
      SELF: [
        {
          add: Attribute.SPIRIT,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    description: 'Tell a lie without being caught',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Bluff',
    target: ActionTarget.SELF,
  };

  export const SENSE_BLUFF_LV1: SkillType = {
    description: 'Detect if a lie is being told',
    level: SkillLevel.LV1,
    // if character beats bluff check, a little icon on the screen will tell
    // if someone is trying to bluff party
    menuSlot: MenuSlot.NONE,
    name: 'Sense Bluff',
    target: ActionTarget.SELF,
  };
  export const GREEDY_INTENT_LV1: SkillType = {
    actionEffects: {
      SELF: [
        {
          add: Attribute.EXPERIENCE,
          chance: 1.0,
          quantity: '5',
        },
      ],
    },
    description: 'Gain more experience than the party.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Greedy Intent',
    target: ActionTarget.SELF,
  };

  export const SLOTH_COMPOSURE_LV1: SkillType = {
    actionEffects: {
      SELF: [
        {
          add: Attribute.DEFENSE,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    description: 'Decreases damage taken',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Sloth Composure',
    target: ActionTarget.SELF,
  };

  export const BLOOD_LUST_LV1: SkillType = {
    // Acquired by defeating Lust.
    actionEffects: {
      SELF: [
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },

    description: 'Increases speed.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Blood Lust',
    target: ActionTarget.SELF,
  };

  export const ENVIOUS_OF_COMBAT_LV1: SkillType = {
    // Acquired by defeating Envy.
    actionEffects: {
      SELF: [
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },

    description: 'Gains increased power.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Envious of Combat',
    target: ActionTarget.SELF,
  };

  export const GLUTTONOUS_DESIRE_LV1: SkillType = {
    actionEffects: {
      SELF: [
        {
          add: Attribute.LIFE,
          chance: 1.0,
          quantity: '10',
        },
        // TODO add effect for consuming food
      ],
    },
    description: 'Consumes food items twice as fast.',
    level: SkillLevel.LV1,
    // Acquired by defeating Gluttony.
    menuSlot: MenuSlot.NONE,
    name: 'Gluttonous Desire',
    target: ActionTarget.SELF,
  };

  export const CATCHER_LV1: SkillType = {
    actionEffects: {
      SELF: [
        {
          add: Attribute.SPEED,
          chance: 1.0,
          quantity: '10',
        },
      ],
    },
    description: 'Receives bonuses when catching items.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Catcher',
    target: ActionTarget.SELF,
  };

  export const LIMITLESS_LV1: SkillType = {
    description: 'Higher level cap.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Limitless',
    target: ActionTarget.SELF,
  };
}
