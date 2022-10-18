import { EffectTable } from './table.effect';
import { MenuSlot } from './menu-slot';
import { BaseSkill } from './base.skill';
export declare enum Focusable {
    STAMINA = "Stamina",
    TRUE = "True",
    FALSE = "False"
}
export declare enum ClassSkillList {
    BARRIER = "Barrier",
    BOAST = "Boast",
    DISGUISE = "Disguise",
    FOCUS = "Focus",
    GRAPPLE = "Grapple",
    HIDE = "Hide",
    SCAN = "Scan",
    CHEER = "Cheer",
    SUPPORT = "Support",
    HOPE = "Hope",
    INSPIRE = "Inspire",
    SCOUT = "Scout",
    MIMIC = "Mimic",
    PICKPOCKET = "Pickpocket",
    SEAL = "Seal",
    LULLABY = "Lullaby",
    WARD = "Ward",
    SACRIFICE = "Sacrifice",
    PROTECT = "Protect",
    MOCK = "Mock",
    SEARCH = "Search",
    STEAL = "Steal",
    PROTECTION = "Protection",
    LIGHT = "Light",
    REFLECT = "Reflect",
    RAGE = "Rage",
    DISMISS = "Dismiss"
}
/**
 * Class Skills are motor programs that a character learns to preform.
 * Each skill can be acquired via items, etc. but often
 * progression is determined by class.
 */
export declare abstract class ClassSkill implements BaseSkill {
    abstract name: string;
    abstract description: string;
    abstract effect: EffectTable;
    menuSlot: MenuSlot.First;
}
export declare class Barrier extends ClassSkill {
    name: ClassSkillList.BARRIER;
    description: '';
    effect: [];
}
export declare class Boast extends ClassSkill {
    name: ClassSkillList.BOAST;
    description: 'increase party’s moral';
    effect: [];
}
export declare class Disguise extends ClassSkill {
    name: ClassSkillList.DISGUISE;
    description: 'Changes appearance and disables command menu until canceled.';
    effect: [];
}
export declare class Dismiss extends ClassSkill {
    name: ClassSkillList.DISMISS;
    description: 'Release a summon.';
    effect: [];
}
export declare class Focus extends ClassSkill {
    name: ClassSkillList.FOCUS;
    description: 'raise attack and attack percent for following move.';
    effect: [];
}
export declare class Grapple extends ClassSkill {
    name: ClassSkillList.GRAPPLE;
    description: 'Lowers character and opponents life.';
    effect: [];
}
export declare class Hide extends ClassSkill {
    name: ClassSkillList.HIDE;
    description: 'Enemy cannot see you';
    effect: [];
}
export declare class Scan extends ClassSkill {
    name: ClassSkillList.SCAN;
    description: 'Read enemies stats.';
    effect: [];
}
export declare class Cheer extends ClassSkill {
    name: ClassSkillList.CHEER;
    description: 'Targets Spirit increases by 10% for a duration';
    effect: [];
}
export declare class Support extends ClassSkill {
    name: ClassSkillList.SUPPORT;
    description: 'Read enemies stats.';
    effect: [];
}
export declare class Hope extends ClassSkill {
    name: ClassSkillList.HOPE;
    description: 'The most powerful status bonus';
    effect: [];
}
export declare class Inspire extends ClassSkill {
    name: ClassSkillList.INSPIRE;
    description: 'Increases target Drive gauge';
    effect: [];
}
export declare class Scout extends ClassSkill {
    name: ClassSkillList.SCOUT;
    description: 'Move ahead of party.';
    effect: [];
}
export declare class Mimic extends ClassSkill {
    name: ClassSkillList.MIMIC;
    description: 'Use the same move that was used on you on the enemy.';
    effect: [];
}
export declare class Pickpocket extends ClassSkill {
    name: ClassSkillList.PICKPOCKET;
    description: 'Steal from enemy.';
    effect: [];
}
export declare class Seal extends ClassSkill {
    name: ClassSkillList.SEAL;
    description: 'Keep enemies from getting close.';
    effect: [];
}
export declare class Lullaby extends ClassSkill {
    name: ClassSkillList.LULLABY;
    description: 'Send enemies moves back at them';
    effect: [];
}
export declare class Ward extends ClassSkill {
    name: ClassSkillList.WARD;
    description: '"Keep enemies from getting close.';
    effect: [];
}
export declare class Sacrifice extends ClassSkill {
    name: ClassSkillList.SACRIFICE;
    description: '';
    effect: [];
}
export declare class Protect extends ClassSkill {
    name: ClassSkillList.PROTECT;
    description: 'guard party members behind you.';
    effect: [];
}
export declare class Mock extends ClassSkill {
    name: ClassSkillList.MOCK;
    description: 'make a mocking action to cause Berserk on the opponent';
    effect: [];
}
export declare class Search extends ClassSkill {
    name: ClassSkillList.SEARCH;
    description: 'scan nearby area for goods.';
    effect: [];
}
export declare class Steal extends ClassSkill {
    name: ClassSkillList.STEAL;
    description: 'Take item from opponent';
    effect: [];
}
export declare class Reflect extends ClassSkill {
    name: ClassSkillList.REFLECT;
    description: 'Send enemies moves back at them.';
    effect: [];
}
export declare class Protection extends ClassSkill {
    name: ClassSkillList.PROTECTION;
    description: 'Create a barrier around a ally';
    effect: [];
}
export declare class Light extends ClassSkill {
    name: ClassSkillList.LIGHT;
    description: 'Keep enemies from moving for a duration of time. Chance Puts enemy to sleep. Stops rage';
    effect: [];
}
export declare class Rage extends ClassSkill {
    name: ClassSkillList.RAGE;
    description: 'Increase power decrease wisdom';
    effect: [];
}
