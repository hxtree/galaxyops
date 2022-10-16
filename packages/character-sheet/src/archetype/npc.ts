import {IArchetype} from './archetype.interface';
import {Drive, Life, Spirit} from '../component/gauges';
import {Stats} from '../component/stats';
import {Trait} from '../component/trait';
import {Items} from '../component/item.gear';
import {StatusEffect} from '../component/status.effect';

/**
 * A human or non-humanoid character.
 */
export interface INonPlayerCharacter extends IArchetype {
  name: string;
  description: string;
  life?: Life;
  drive?: Drive;
  spirit?: Spirit;
  stats?: Stats;
  traits?: Trait[];
  statusEffects?: StatusEffect[];
  loot?: Items;
}

export class VallonOni implements INonPlayerCharacter {
  name: 'Vallon Oni';
  description: '';
}

export class Mischievous implements INonPlayerCharacter {
  name: 'Mischievous';
  description: 'A black and white cat with yellow eyes.';
  affiliation: Array<string> = ['The Keepers of Law'];
}

export class MahdiTsia implements INonPlayerCharacter {
  name: 'Mahdi Tsia';
  description: "Malace's brother";
}

export class Lawzon implements INonPlayerCharacter {
  name: string = 'Lawzon';
  description: string = '';
  history: string =
    'Rumored to be the most powerful fighter from the north. He fought only to protect his village until it was wiped out from a great frost. He now wonders around lifelessly in search of an end. He is by far the most strongest of the seven but has no will to fight.';
}

export class Janus implements INonPlayerCharacter {
  name: string = 'Janus';
  description: string = 'The Keeper of Time';
}

export class Spider implements INonPlayerCharacter {
  name: string = 'Spider';
  description: string = 'A spider';
}
