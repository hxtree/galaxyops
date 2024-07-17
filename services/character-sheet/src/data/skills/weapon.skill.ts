import { Duration } from 'luxon';
import {
  Attribute,
  EffectTag,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

/**
 * Weapon Skill
 *
 * Weapon skills are granted based on the equipped item and the character's ability to use weapons.
 * Each skill is directly related to the simple use of the player's equipped weapon.
 * They are categorized as Command Menu Actions and can be used in-game.
 * These skills are always located in the first slot of the Basic Command Menu Actions.
 *
 * Each weapon skill has a level
 *
 * e.g. Block lv1
 */
export namespace Weapon {
  export const BLOCK_LV1: Skill = {
    description: 'Prevents or obstructs incoming opponent actions.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Block',
    outcome: {
      OPPONENT: [
        {
          add: Attribute.DEFENSE,
          duration: Duration.fromObject({ seconds: 2 }),
          quantity: '1d6+2',
          tags: [EffectTag.PHYSICAL],
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const PARRY_LV1: Skill = {
    description:
      'Deflect or counter incoming attacks with a strategic maneuver.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Parry',
    outcome: {
      OPPONENT: [
        {
          chance: 0.2,
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL, EffectTag.BLADE],
        },
      ],
      SELF: [
        {
          add: Attribute.DEFENSE,
          duration: Duration.fromObject({ seconds: 6 }),
          quantity: '1d6+2',
          tags: [EffectTag.PHYSICAL],
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const SLASH_LV1: Skill = {
    description: 'Attack with a blade.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Slash',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL, EffectTag.BLADE],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const STRIKE_LV1: Skill = {
    description: 'Execute a sudden attack with a blade.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Strike',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const STAB_LV1: Skill = {
    description: 'Perform a forward striking motion with a blade.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Stab',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const CHOP_LV1: Skill = {
    description: 'Execute a downward motion with a blade.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Chop',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const CLEAVE_LV1: Skill = {
    description: 'Perform a slashing technique.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Cleave',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };
}
