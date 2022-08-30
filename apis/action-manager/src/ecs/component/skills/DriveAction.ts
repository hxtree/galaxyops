import {
  MeekuOni,
  PennyKibbutz,
  PlayerCharacter,
  TraezUthsha,
} from '../archetype/PlayerCharacter';
import {ActionCategory} from './Action';
import {MenuSlot} from '../character/MenuSlot';

/**
 * Drive Actions are special actions that consume drive gauge
 */
export abstract class DriveAction {
  abstract name: string;
  abstract description: string;
  abstract character: PlayerCharacter;
  menuSlot: MenuSlot.Third;
  category: ActionCategory.DRIVE;
}

export class Berserk extends DriveAction {
  name: 'Berserk';
  description: 'Become completely focused on winning';
  character: MeekuOni;
}

export class ToxicThrust extends DriveAction {
  name: 'Toxic Thrust';
  description: '';
  character: PennyKibbutz;
}

export class AerialAssault extends DriveAction {
  name: 'Aerial assault';
  description: 'Jump into air and throws boomerang (jump attack)';
  character: TraezUthsha;
}

export class Oni extends DriveAction {
  name: 'Oni';
  description: `Become engulfed in a blood thirsty rage that multiplies your power but drains spirit.
    If character stays in Oni too long they will go Berserk`;
  character: MeekuOni;
}

export class TrueOni extends DriveAction {
  name: 'True Oni';
  description: `Become engulfed in a more powerful blood thirsty rage that multiplies power but drains spirit.
    If character stays in Oni too long they will go Berserk.`;
  character: MeekuOni;
  conditions: 'Player must have very little life left and max DriveAction in order to perform.';
}
