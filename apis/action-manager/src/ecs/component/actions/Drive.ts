import {
  MeekuOni,
  PennyKibbutz,
  PlayerCharacter,
  TraezUthsha,
} from '../archetype/PlayerCharacter';

/**
 * Drive actions are special actions that consume Drive gauge
 * Slot 3
 */
export interface Drive {
  name: string;
  description: string;
  character: PlayerCharacter;
}

export class Berserk implements Drive {
  name: 'Berserk';
  description: 'Become completely focused on winning';
  character: MeekuOni;
}

export class ToxicThrust implements Drive {
  name: 'Toxic Thrust';
  description: '';
  character: PennyKibbutz;
}

export class AerialAssault {
  name: 'Aerial assault';
  description: 'Jump into air and throws boomerang (jump attack)';
  character: TraezUthsha;
}
