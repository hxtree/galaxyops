// category: SkillCategory.DRIVE;

import { Duration } from 'luxon';
import { MenuSlot, MenuSlotType } from '../menu-slot';
import { ActionEffects } from '../table.effect';
import { Attribute } from '../attribute';
import { AreaOfEffect } from '../area-of-effect';

/**
 * Drive Actions are special actions that consume drive gauge
 */
export namespace Drive {
  export type Type = {
    name: string;
    description: string;
    conditions?: string;
    menuSlot: MenuSlotType;
    menuName?: string;
    areaOfEffect?: AreaOfEffect.Type;
    actionEffects?: ActionEffects;
  };

  export const BERSERK: Type = {
    name: 'Berserk',
    description: 'Become completely focused on winning',
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
    menuSlot: MenuSlot.DRIVE,
  };

  export const TOXIC_THRUST: Type = {
    name: 'Toxic Thrust',
    description: 'Thrusts forward using posion',
    areaOfEffect: AreaOfEffect.LINE_10FT,
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
    menuSlot: MenuSlot.DRIVE,
  };

  export const AERIAL_ASSAULT: Type = {
    name: 'Aerial Assault',
    description: 'Jump into air and throws boomerang (jump attack)',
    areaOfEffect: AreaOfEffect.LINE_10FT,
    actionEffects: {
      OPPONENT: [
        {
          remove: Attribute.LIFE,
          quantity: '1d6',
          chance: 0.3,
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
    menuSlot: MenuSlot.DRIVE,
  };

  export const ONI: Type = {
    name: 'Oni',
    description: `Become engulfed in a blood thirsty rage that multiplies your power but drains spirit.
      If character stays in Oni too long they will go Berserk`,
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
    menuSlot: MenuSlot.DRIVE,
  };

  export const TRUE_ONI: Type = {
    name: 'True Oni',
    description: `Become engulfed in a more powerful blood thirsty rage that multiplies power but drains spirit.
      If character stays in Oni too long they will go Berserk.`,
    conditions:
      'Player must have very little life left and max DriveAction in order to perform.',
    menuSlot: MenuSlot.DRIVE,
  };
}
