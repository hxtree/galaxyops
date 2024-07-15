import {
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

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
  export const THE_ONE_MAX: Skill = {
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
    description: 'Hidden.',
    level: SkillLevel.MAX,
    menuSlot: MenuSlot.NONE,
    name: '(Unknown)',
    target: ActionTarget.SELF,
  };

  export const PHYSICAL_CONDITIONING_LV1: Skill = {
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

  export const SPIRITUAL_GROWTH_LV1: Skill = {
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

  export const MENTAL_DISCIPLINE_LV1: Skill = {
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

  export const PRECISION_AND_TECHNIQUE_LV1: Skill = {
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

  export const DUAL_WELD_LV1: Skill = {
    description: 'Can use two one handed weapons at once.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Dual Weld',
    target: ActionTarget.SELF,
  };

  export const ESCAPE_ARTIST_LV1: Skill = {
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

  export const INTIMIDATE_LV1: Skill = {
    description: 'Causes fear in enemy',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Intimidate',
    target: ActionTarget.OPPONENT,
  };

  export const CONCENTRATION_LV1: Skill = {
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

  export const BLUFF_LV1: Skill = {
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

  export const SENSE_BLUFF_LV1: Skill = {
    description: 'Detect if a lie is being told',
    level: SkillLevel.LV1,
    // if character beats bluff check, a little icon on the screen will tell
    // if someone is trying to bluff party
    menuSlot: MenuSlot.NONE,
    name: 'Sense Bluff',
    target: ActionTarget.SELF,
  };
  export const GREEDY_INTENT_LV1: Skill = {
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

  export const SLOTH_COMPOSURE_LV1: Skill = {
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

  export const BLOOD_LUST_LV1: Skill = {
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

  export const ENVIOUS_OF_COMBAT_LV1: Skill = {
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

  export const GLUTTONOUS_DESIRE_LV1: Skill = {
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

  export const CATCHER_LV1: Skill = {
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

  export const LIMITLESS_LV1: Skill = {
    description: 'Higher level cap.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Limitless',
    target: ActionTarget.SELF,
  };

  /** Seven Sins */

  export const WRATH_INCARNATE: Skill = {
    actionEffects: {
      SELF: [
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '150',
        },
      ],
    },
    description: 'Manifestation of wrath.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,

    name: 'Wrath Incarnate',
    target: ActionTarget.SELF,
  };

  export const SLOTH_INCARNATE: Skill = {
    actionEffects: {
      SELF: [
        {
          chance: 1.0,
          quantity: '50',
          remove: Attribute.SPEED,
        },
        {
          add: Attribute.POWER,
          chance: 1.0,
          quantity: '300',
        },
      ],
    },
    description: 'Manifestation of sloth.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Sloth Incarnate',
    target: ActionTarget.SELF,
  };

  export const LUST_INCARNATE: Skill = {
    description: 'Manifestation of lust.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Lust Incarnate',
    target: ActionTarget.SELF,
  };

  export const GLUTTONY_INCARNATE: Skill = {
    description: 'Manifestation of gluttony.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Gluttony Incarnate',
    target: ActionTarget.SELF,
  };

  export const PRIDE_INCARNATE: Skill = {
    description: 'Manifestation of pride.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Pride Incarnate',
    target: ActionTarget.SELF,
  };

  export const ENVY_INCARNATE: Skill = {
    description: 'Manifestation of envy.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Envy Incarnate',
    target: ActionTarget.SELF,
  };

  export const GREED_INCARNATE: Skill = {
    description: 'Manifestation of greed.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.NONE,
    name: 'Greed Incarnate',
    target: ActionTarget.SELF,
  };

  // TODO add more passive skills for the following:
  // FISH
  // FOX
  // HYENA_
  // OX_KING
  // SERPANT_GOD
}
