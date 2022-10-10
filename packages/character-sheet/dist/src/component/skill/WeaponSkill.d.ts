import { Attribute } from '../character/Attribute';
import { EffectTag } from '../effect/EffectTag';
import { BaseSkill, SkillCategory } from './BaseSkill';
import { EffectTable, Modifier } from '../effect/EffectTable';
import { MenuSlot } from '../character/MenuSlot';
/**
 * Weapon Skill
 *
 * Weapon sklills are granted based on the equipped item and characters ability to use weapon.
 * Each directly related to simple use of the players equipped weapon.
 * Each are a type of Command Menu Action which means they can be used in game.
 * They are always located in the first slot of the Basic Command Menu Actions.
 */
export declare enum WeaponSkillList {
    PARRY = "Parry",
    SLASH = "Slash",
    STRIKE = "Strike",
    STAB = "Stab",
    CHOP = "Chop",
    CLEAVE = "Cleave"
}
export declare abstract class WeaponSkill implements BaseSkill {
    abstract name: WeaponSkillList;
    abstract description: string;
    abstract effect: EffectTable;
    menuSlot: MenuSlot.First;
    category: SkillCategory.WEAPON;
}
export declare class Parry extends WeaponSkill {
    name: WeaponSkillList.PARRY;
    description: 'Ward off incoming attack with a countermove.';
    effect: [];
}
export declare class Slash extends WeaponSkill {
    name: WeaponSkillList.SLASH;
    description: 'Attack with a blade.';
    effect: [
        {
            name: Attribute.LIFE;
            modifier: Modifier.REMOVE;
            quantity: '1d6+2';
            tags: [EffectTag.PHYSICAL];
        }
    ];
}
export declare class Strike extends WeaponSkill {
    name: WeaponSkillList.STRIKE;
    description: 'Attack with a sudden effect with a blade.';
    effect: [
        {
            name: Attribute.LIFE;
            modifier: Modifier.REMOVE;
            quantity: '1d6+2';
            tags: [EffectTag.PHYSICAL];
        }
    ];
}
export declare class Stab extends WeaponSkill {
    name: WeaponSkillList.STAB;
    description: 'Attach with a forward striking motion with a blade.';
    effect: [
        {
            name: Attribute.LIFE;
            modifier: Modifier.REMOVE;
            quantity: '1d6+2';
            tags: [EffectTag.PHYSICAL];
        }
    ];
}
export declare class Chop extends WeaponSkill {
    name: WeaponSkillList.CHOP;
    description: 'Attack with a downward motion with a blade.';
    effect: [
        {
            name: Attribute.LIFE;
            modifier: Modifier.REMOVE;
            quantity: '1d6+2';
            tags: [EffectTag.PHYSICAL];
        }
    ];
}
export declare class Cleave extends WeaponSkill {
    name: WeaponSkillList.CLEAVE;
    description: 'A slash technique.';
    effect: [
        {
            name: Attribute.LIFE;
            modifier: Modifier.REMOVE;
            quantity: '1d6+2';
            tags: [EffectTag.PHYSICAL];
        }
    ];
}
