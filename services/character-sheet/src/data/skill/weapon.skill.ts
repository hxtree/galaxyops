import { Duration } from 'luxon';
import { Attribute } from '../attribute';
import { EffectTag } from '../tag.effect';
import { MenuSlot } from '../menu-slot';
import { SkillType, SkillLevel } from './skill.type';
import { ActionTarget } from '../action-target';

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
  export const BLOCK_LV1: SkillType = {
    actionEffects: {
      OPPONENT: [
        {
          add: Attribute.DEFENSE,
          duration: Duration.fromObject({ seconds: 2 }),
          quantity: '1d6+2',
          tags: [EffectTag.PHYSICAL],
        },
      ],
    },
    description: 'Prevents or obstructs incoming opponent actions.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Block',
    target: ActionTarget.SELF,
  };

  export const PARRY_LV1: SkillType = {
    actionEffects: {
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
    description:
      'Deflect or counter incoming attacks with a strategic maneuver.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Parry',
    target: ActionTarget.SELF,
  };

  export const SLASH_LV1: SkillType = {
    actionEffects: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL, EffectTag.BLADE],
        },
      ],
    },
    description: 'Attack with a blade.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Slash',
    target: ActionTarget.OPPONENT,
  };

  export const STRIKE_LV1: SkillType = {
    actionEffects: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL],
        },
      ],
    },
    description: 'Execute a sudden attack with a blade.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Strike',
    target: ActionTarget.OPPONENT,
  };

  export const STAB_LV1: SkillType = {
    actionEffects: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL],
        },
      ],
    },
    description: 'Perform a forward striking motion with a blade.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Stab',
    target: ActionTarget.OPPONENT,
  };

  export const CHOP_LV1: SkillType = {
    actionEffects: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL],
        },
      ],
    },
    description: 'Execute a downward motion with a blade.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Chop',
    target: ActionTarget.OPPONENT,
  };

  export const CLEAVE_LV1: SkillType = {
    actionEffects: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL],
        },
      ],
    },
    description: 'Perform a slashing technique.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ATTACK,
    name: 'Cleave',
    target: ActionTarget.OPPONENT,
  };
}
