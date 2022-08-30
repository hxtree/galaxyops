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

export type EffectTable = Array<EffectRecord>;
