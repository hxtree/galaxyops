import {StatusEffects} from '../character/StatusEffect';
import {Drive, Life, Spirit, Stats} from '../character/Attribute';
import {Traits} from '../character/Trait';
import {Token} from './../equipment/Token';

/**
 * A character that can be played
 * values are relative to player instance
 */
export interface PlayerCharacter {
  firstName: string;
  lastName: string;
  backstory: string;
  experience?: number;
  life?: Life;
  drive?: Drive;
  spirit?: Spirit;
  stats?: Stats;
  traits?: Traits;
  statusEffects?: StatusEffects;
  token?: Token;
}

export class ArinothDiyath implements PlayerCharacter {
  firstName: 'Arinoth';
  lastName: 'Diyath';
  backstory: '';
}

export class FayeImago implements PlayerCharacter {
  firstName: 'Faye';
  lastName: 'Imago';
  backstory: 'A young girl who weilds magic and studies history';
}

export class GaaliRuin implements PlayerCharacter {
  firstName: 'Gaali';
  lastName: 'Ruin';
  backstory: 'A prince with little interest in becoming king. Instead, he lives for testing his sword in raw danger.';
}

export class GunterStonewell implements PlayerCharacter {
  firstName: 'Gunter';
  lastName: 'Stonewell';
  backstory: 'A solider for life';
}

export class LoomeeAngora implements PlayerCharacter {
  firstName: 'Loomee';
  lastName: 'Angora';
  backstory: 'A girl created when the Song Maiden left her post to become human.';
  symbolizes: 'The Keeper of Heart';
  affiliation: ['The Keeper'];
}

export class MalaceTsia implements PlayerCharacter {
  firstName: 'Malace';
  lastName: 'Tsia';
  backstory: 'was used as a scarifice for his people to hold demons by sewing them to his skin';
}

export class MeekuOni implements PlayerCharacter {
  firstName: 'Meeku';
  lastName: 'Oni';
  backstory: '';
}

export class PennyKibbutz implements PlayerCharacter {
  firstName: 'Penny';
  lastName: 'Kibbutz';
  backstory: '';
}

export class TraezUthsha implements PlayerCharacter {
  firstName: 'Traez';
  lastName: 'Uthsha';
  backstory: '';
}
