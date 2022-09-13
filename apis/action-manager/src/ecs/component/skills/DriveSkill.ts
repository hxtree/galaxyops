import {
  MeekuOni,
  PennyKibbutz,
  PlayerCharacter,
  TraezUthsha,
} from '../archetype/PlayerCharacter';
import {BaseSkill, SkillCategory} from './BaseSkill';
import {MenuSlot} from '../character/MenuSlot';

export enum DriveSkillList {
  BERSERK = 'Berserk',
  TOXIC_THRUST = 'Toxic Thrust',
  AERIAL_ASSUALT = 'Aerial Assualt',
  ONI = 'Oni',
  TRUE_ONI = 'True Oni',
}

/**
 * Drive Actions are special actions that consume drive gauge
 */
export abstract class DriveAction implements BaseSkill {
  abstract name: DriveSkillList;
  abstract description: string;
  abstract character: PlayerCharacter;
  menuSlot: MenuSlot.Third;
  category: SkillCategory.DRIVE;
}

export class Berserk extends DriveAction {
  name: DriveSkillList.BERSERK;
  description: 'Become completely focused on winning';
  character: MeekuOni;
}

export class ToxicThrust extends DriveAction {
  name: DriveSkillList.TOXIC_THRUST;
  description: '';
  character: PennyKibbutz;
}

export class AerialAssault extends DriveAction {
  name: DriveSkillList.AERIAL_ASSUALT;
  description: 'Jump into air and throws boomerang (jump attack)';
  character: TraezUthsha;
}

export class Oni extends DriveAction {
  name: DriveSkillList.ONI;
  description: `Become engulfed in a blood thirsty rage that multiplies your power but drains spirit.
    If character stays in Oni too long they will go Berserk`;
  character: MeekuOni;
}

export class TrueOni extends DriveAction {
  name: DriveSkillList.TRUE_ONI;
  description: `Become engulfed in a more powerful blood thirsty rage that multiplies power but drains spirit.
    If character stays in Oni too long they will go Berserk.`;
  character: MeekuOni;
  conditions: 'Player must have very little life left and max DriveAction in order to perform.';
}
