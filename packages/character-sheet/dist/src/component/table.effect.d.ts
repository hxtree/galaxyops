import { EffectTag } from './tag.effect';
import { StatusEffect } from './status.effect';
import { Attribute } from './attribute';
import { BaseSkill } from './base.skill';
export declare enum Modifier {
    ADD = "ADD",
    REMOVE = "REMOVE"
}
export declare enum StatusEffectModifier {
    ADD = "ADD",
    REMOVE = "REMOVE"
}
export declare enum SkillffectModifier {
    ADD = "ADD",
    REMOVE = "REMOVE"
}
export interface AttributeEffectRecord {
    name: Attribute;
    modifier: Modifier;
    quantity: string;
    chance?: number;
    tags?: Array<EffectTag>;
}
export interface SkillEffectRecord {
    skill: BaseSkill;
    modifer: SkillffectModifier;
    tags?: Array<EffectTag>;
}
export interface StatusEffectRecord {
    name: StatusEffect;
    modifier: StatusEffectModifier;
    chance: number;
    tags?: Array<EffectTag>;
}
export declare type EffectRecord = SkillEffectRecord | StatusEffectRecord | AttributeEffectRecord;
/**
 * EffectTable
 * A representation of the effect of an action
 */
export declare type EffectTable = Array<EffectRecord>;
