import { Duration } from 'luxon';
import {
  Attribute,
  MenuSlot,
  Skill,
  SkillLevel,
  ActionTarget,
  AreaOfEffect,
} from '@galaxyops/character-sheet-contracts';

/**
 * Drive Actions are special actions that consume drive gauge
 */
export namespace Drive {
  export const BERSERK_LV1: Skill = {
    description: 'Become completely focused on winning',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.DRIVE,
    name: 'Berserk',
    outcome: {
      PERFORMER: [
        {
          add: 'BERSERK',
          chance: 1.0,
          duration: Duration.fromObject({ minutes: 5 }),
          tags: [],
        },
      ],
    },
  };

  export const TOXIC_THRUST_LV1: Skill = {
    areaOfEffect: AreaOfEffect.LINE_10FT,
    description: 'Thrusts forward using poison',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.DRIVE,
    name: 'Toxic Thrust',
    outcome: {
      OPPONENT: [
        {
          add: 'POISON',
          chance: 1.0,
          duration: Duration.fromObject({ minutes: 20 }),
          tags: [],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const AERIAL_ASSAULT_LV1: Skill = {
    areaOfEffect: AreaOfEffect.LINE_10FT,
    description: 'Jump into air and throws boomerang (jump attack)',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.DRIVE,
    name: 'Aerial Assault',
    outcome: {
      OPPONENT: [
        {
          chance: 0.3,
          quantity: '1d6',
          remove: Attribute.LIFE,
          tags: [],
        },
        {
          add: 'STUNNED',
          chance: 0.3,
          duration: Duration.fromObject({ seconds: 20 }),
          tags: [],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const ONI_LV1: Skill = {
    description: `Become engulfed in a blood thirsty rage that multiplies your power but drains spirit.
      If character stays in Oni too long they will go Berserk`,
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.DRIVE,
    name: 'Oni',
    outcome: {
      PERFORMER: [
        {
          add: 'ONI',
          chance: 1.0,
          duration: Duration.fromObject({ minutes: 3 }),
          tags: [],
        },
      ],
    },
    target: ActionTarget.SELF,
  };

  export const ONI_LV2: Skill = {
    ...ONI_LV1,
    conditions:
      'Player must have very little life left and max DriveAction in order to perform.',
    level: SkillLevel.LV2,
    name: 'True Oni',
  };
}
