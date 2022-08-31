import {EffectTag} from './EffectTag';
import {StatusEffect} from './StatusEffect';
import {Attribute} from '../character/Attribute';

export interface EffectRecord {
  add?: Attribute | StatusEffect;
  remove?: Attribute | StatusEffect;
  quanity?: string;
  chance?: number;
  tags?: Array<EffectTag>;
}

/**
 * EffectTable
 * A representation of the effect of an action
 */
export type EffectTable = Array<EffectRecord>;
