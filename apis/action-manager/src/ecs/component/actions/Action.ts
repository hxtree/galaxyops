import {EffectTag} from '../character/EffectTag';
import {StatusEffect} from '../character/StatusEffect';
import {Attribute} from '../character/Attribute';

// Some tags can be automatically added, like LIFE_DECREASE IF attack decreases life.

export interface ActionEffect {
  add?: Attribute | StatusEffect;
  remove?: Attribute | StatusEffect;
  quanity?: string;
  chance?: number;
  tags?: Array<EffectTag>;
}

/**
 * Actions are decoupled from the actor and target.
 * Actions are moves that can be used by a character.
 * They are motor programs that a character learns.
 * Actions progression is often determined by determined by class.
 */
export interface Action {
  name: string;
  description: string;
  effect: Array<ActionEffect>;
}

// Whether when performing move if character can hold action to put more effort into action
//
export enum Focusable {
  STAMINA = 'Stamina',
  TRUE = 'True',
  FALSE = 'False',
}
