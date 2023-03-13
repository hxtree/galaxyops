// category: SkillCategory.DRIVE;

/**
 * Drive Actions are special actions that consume drive gauge
 */
export namespace Drive {
  export type Type = {
    name: string;
    description: string;
    conditions?: string;
  };

  export const BERSERK: Type = {
    name: 'Berserk',
    description: 'Become completely focused on winning',
  };

  export const TOXIC_THRUST: Type = {
    name: 'Toxic Thrust',
    description: '',
  };

  export const AERIAL_ASSUALT: Type = {
    name: 'Aerial Assault',
    description: 'Jump into air and throws boomerang (jump attack)',
  };

  export const ONI: Type = {
    name: 'Oni',
    description: `Become engulfed in a blood thirsty rage that multiplies your power but drains spirit.
      If character stays in Oni too long they will go Berserk`,
  };

  export const TRUE_ONI: Type = {
    name: 'True Oni',
    description: `Become engulfed in a more powerful blood thirsty rage that multiplies power but drains spirit.
      If character stays in Oni too long they will go Berserk.`,
    conditions:
      'Player must have very little life left and max DriveAction in order to perform.',
  };
}
