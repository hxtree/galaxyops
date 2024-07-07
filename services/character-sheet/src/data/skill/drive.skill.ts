import { Duration } from 'luxon';
import { MenuSlot, MenuSlotType } from '../menu-slot';
import { ActionEffects } from '../table.effect';
import { Attribute } from '../attribute';
import { AreaOfEffect } from '../area-of-effect';
import { SkillType } from '.';
import { ActionTarget } from '../action-target';

/**
 * Drive Actions are special actions that consume drive gauge
 */
export namespace Drive {
  export const BERSERK: SkillType = {
    actionEffects: {
      PERFORMER: [
        {
          add: 'BERSERK',
          chance: 1.0,
          duration: Duration.fromObject({ minutes: 5 }),
          tags: [],
        },
      ],
    },
    description: 'Become completely focused on winning',
    menuSlot: MenuSlot.DRIVE,
    name: 'Berserk',
  };

  export const TOXIC_THRUST: SkillType = {
    actionEffects: {
      OPPONENT: [
        {
          add: 'POISON',
          chance: 1.0,
          duration: Duration.fromObject({ minutes: 20 }),
          tags: [],
        },
      ],
    },
    areaOfEffect: AreaOfEffect.LINE_10FT,
    description: 'Thrusts forward using poison',
    menuSlot: MenuSlot.DRIVE,
    name: 'Toxic Thrust',
    target: ActionTarget.OPPONENT,
  };

  export const AERIAL_ASSAULT: SkillType = {
    actionEffects: {
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
    areaOfEffect: AreaOfEffect.LINE_10FT,
    description: 'Jump into air and throws boomerang (jump attack)',
    menuSlot: MenuSlot.DRIVE,
    name: 'Aerial Assault',
    target: ActionTarget.OPPONENT,
  };

  export const ONI: SkillType = {
    actionEffects: {
      PERFORMER: [
        {
          add: 'ONI',
          chance: 1.0,
          duration: Duration.fromObject({ minutes: 3 }),
          tags: [],
        },
      ],
    },
    description: `Become engulfed in a blood thirsty rage that multiplies your power but drains spirit.
      If character stays in Oni too long they will go Berserk`,
    menuSlot: MenuSlot.DRIVE,
    name: 'Oni',
    target: ActionTarget.SELF,
  };

  export const TRUE_ONI: SkillType = {
    conditions:
      'Player must have very little life left and max DriveAction in order to perform.',
    description: `Become engulfed in a more powerful blood thirsty rage that multiplies power but drains spirit.
      If character stays in Oni too long they will go Berserk.`,
    menuSlot: MenuSlot.DRIVE,
    name: 'True Oni',
    target: ActionTarget.SELF,
  };
}
