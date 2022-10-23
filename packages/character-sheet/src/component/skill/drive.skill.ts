export enum Drive {
  BERSERK = 'Berserk',
  TOXIC_THRUST = 'Toxic Thrust',
  AERIAL_ASSUALT = 'Aerial Assualt',
  ONI = 'Oni',
  TRUE_ONI = 'True Oni',
}

// category: SkillCategory.DRIVE;

/**
 * Drive Actions are special actions that consume drive gauge
 */
export namespace DriveSkill {
  export type DriveType = {
    name: Drive;
    description: string;
    conditions?: string;
  };

  export const Berserk: DriveType = {
    name: Drive.BERSERK,
    description: 'Become completely focused on winning',
  };

  export const ToxicThrust: DriveType = {
    name: Drive.TOXIC_THRUST,
    description: '',
  };

  export const AerialAssault: DriveType = {
    name: Drive.AERIAL_ASSUALT,
    description: 'Jump into air and throws boomerang (jump attack)',
  };

  export const Oni: DriveType = {
    name: Drive.ONI,
    description: `Become engulfed in a blood thirsty rage that multiplies your power but drains spirit.
      If character stays in Oni too long they will go Berserk`,
  };

  export const TrueOni: DriveType = {
    name: Drive.TRUE_ONI,
    description: `Become engulfed in a more powerful blood thirsty rage that multiplies power but drains spirit.
      If character stays in Oni too long they will go Berserk.`,
    conditions:
      'Player must have very little life left and max DriveAction in order to perform.',
  };
}
