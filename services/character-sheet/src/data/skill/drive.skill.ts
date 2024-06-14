// category: SkillCategory.DRIVE;

import { Duration } from 'luxon';
import { MenuSlot } from '../menu-slot';
import { ActionEffects } from '../table.effect';

/**
 * Drive Actions are special actions that consume drive gauge
 */
export namespace Drive {
  export type Type = {
    name: string;
    description: string;
    conditions?: string;
    menuSlot: MenuSlot;
    actionEffects?: ActionEffects;
  };

  export const BERSERK: Type = {
    name: 'Berserk',
    description: 'Become completely focused on winning',
    menuSlot: MenuSlot.THIRD,
    actionEffects: {
      CASTER: [
        {
          add: 'BERSERK',
          chance: 1.0,
          duration: Duration.fromObject({ minutes: 5 }),
          tags: [],
        },
      ],
    },
  };

  export const TOXIC_THRUST: Type = {
    name: 'Toxic Thrust',
    description: '',
    menuSlot: MenuSlot.THIRD,
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
  };

  export const AERIAL_ASSUALT: Type = {
    name: 'Aerial Assault',
    description: 'Jump into air and throws boomerang (jump attack)',
    menuSlot: MenuSlot.THIRD,
  };

  export const ONI: Type = {
    name: 'Oni',
    description: `Become engulfed in a blood thirsty rage that multiplies your power but drains spirit.
      If character stays in Oni too long they will go Berserk`,
    actionEffects: {
      CASTER: [
        {
          add: 'ONI',
          chance: 1.0,
          duration: Duration.fromObject({ minutes: 3 }),
          tags: [],
        },
      ],
    },
    menuSlot: MenuSlot.THIRD,
  };

  export const TRUE_ONI: Type = {
    name: 'True Oni',
    description: `Become engulfed in a more powerful blood thirsty rage that multiplies power but drains spirit.
      If character stays in Oni too long they will go Berserk.`,
    conditions:
      'Player must have very little life left and max DriveAction in order to perform.',
    menuSlot: MenuSlot.THIRD,
  };
}
