import { Attribute } from '../character/Attribute';
import { ClassSkillList } from './ClassSkill';
import { ComboSkillList } from './ComboSkill';
import { DriveSkillList } from './DriveSkill';
import { InteractionSkillList } from './InteractionSkill';
import { ItemSkillList } from './ItemSkill';
import { PassiveSkillList } from './PassiveSkill';
import { SpellSkillList } from './SpellSkill';
import { SummonSkillList } from './SummonSkill';
import { TeamworkSkillList } from './TeamworkSkill';
import { ToolSkillList } from './ToolSkill';
import { TrapSkillList } from './TrapSkill';
import { WeaponSkillList } from './WeaponSkill';
declare const MasterSkillList: {
    VACHEL: SummonSkillList.VACHEL;
    FELIX: SummonSkillList.FELIX;
    HERALDIC_LION: SummonSkillList.HERALDIC_LION;
    LYRE: SummonSkillList.LYRE;
    SANDY: SummonSkillList.SANDY;
    OURUBORUS: SummonSkillList.OURUBORUS;
    MISCHIEVOUS: SummonSkillList.MISCHIEVOUS;
    SCRIBBLES: SummonSkillList.SCRIBBLES;
    GRAPPLING_HOOK: ToolSkillList.GRAPPLING_HOOK;
    GRAB: InteractionSkillList.GRAB;
    PUSH: InteractionSkillList.PUSH;
    PULL: InteractionSkillList.PULL;
    LIFT: InteractionSkillList.LIFT;
    THROW: InteractionSkillList.THROW;
    APPRIASE: ItemSkillList.APPRIASE;
    COMBINE: ItemSkillList.COMBINE;
    PREPARE_FOOD: ItemSkillList.PREPARE_FOOD;
    DUAL_WELD: PassiveSkillList.DUAL_WELD;
    ESCAPE_ARTIST: PassiveSkillList.ESCAPE_ARTIST;
    INTIMIDATE: PassiveSkillList.INTIMIDATE;
    CONCENTRATION: PassiveSkillList.CONCENTRATION;
    BLUFF: PassiveSkillList.BLUFF;
    SENSE_BLUFF: PassiveSkillList.SENSE_BLUFF;
    GREEDY_INTENT: PassiveSkillList.GREEDY_INTENT;
    SLOTH_COMPOSURE: PassiveSkillList.SLOTH_COMPOSURE;
    BLOOD_LUST: PassiveSkillList.BLOOD_LUST;
    ENVIOUS_OF_COMBAT: PassiveSkillList.ENVIOUS_OF_COMBAT;
    GLUTTONOUS_DESIRE: PassiveSkillList.GLUTTONOUS_DESIRE;
    CATCHER: PassiveSkillList.CATCHER;
    COMMAND: TeamworkSkillList.COMMAND;
    FORMATIONS: TeamworkSkillList.FORMATIONS;
    ORDER: TeamworkSkillList.ORDER;
    Gravity: SpellSkillList.Gravity;
    Shock: SpellSkillList.Shock;
    Quake: SpellSkillList.Quake;
    Landslide: SpellSkillList.Landslide;
    Blizzard: SpellSkillList.Blizzard;
    BLITZ: ComboSkillList.BLITZ;
    BERSERK: DriveSkillList.BERSERK;
    TOXIC_THRUST: DriveSkillList.TOXIC_THRUST;
    AERIAL_ASSUALT: DriveSkillList.AERIAL_ASSUALT;
    ONI: DriveSkillList.ONI;
    TRUE_ONI: DriveSkillList.TRUE_ONI;
    BARRIER: ClassSkillList.BARRIER;
    BOAST: ClassSkillList.BOAST;
    DISGUISE: ClassSkillList.DISGUISE;
    FOCUS: ClassSkillList.FOCUS;
    GRAPPLE: ClassSkillList.GRAPPLE;
    HIDE: ClassSkillList.HIDE;
    SCAN: ClassSkillList.SCAN;
    CHEER: ClassSkillList.CHEER;
    SUPPORT: ClassSkillList.SUPPORT;
    HOPE: ClassSkillList.HOPE;
    INSPIRE: ClassSkillList.INSPIRE;
    SCOUT: ClassSkillList.SCOUT;
    MIMIC: ClassSkillList.MIMIC;
    PICKPOCKET: ClassSkillList.PICKPOCKET;
    SEAL: ClassSkillList.SEAL;
    LULLABY: ClassSkillList.LULLABY;
    WARD: ClassSkillList.WARD;
    SACRIFICE: ClassSkillList.SACRIFICE;
    PROTECT: ClassSkillList.PROTECT;
    MOCK: ClassSkillList.MOCK;
    SEARCH: ClassSkillList.SEARCH;
    STEAL: ClassSkillList.STEAL;
    PROTECTION: ClassSkillList.PROTECTION;
    LIGHT: ClassSkillList.LIGHT;
    REFLECT: ClassSkillList.REFLECT;
    RAGE: ClassSkillList.RAGE;
    DISMISS: ClassSkillList.DISMISS;
    POISON_TRAP: TrapSkillList.POISON_TRAP;
    EXPLOSIVE_TRAP: TrapSkillList.EXPLOSIVE_TRAP;
    TIME_BOMB_TRAP: TrapSkillList.TIME_BOMB_TRAP;
    CALTROPS_TRAP: TrapSkillList.CALTROPS_TRAP;
    DISABLE_TRAP: TrapSkillList.DISABLE_TRAP;
    PARRY: WeaponSkillList.PARRY;
    SLASH: WeaponSkillList.SLASH;
    STRIKE: WeaponSkillList.STRIKE;
    STAB: WeaponSkillList.STAB;
    CHOP: WeaponSkillList.CHOP;
    CLEAVE: WeaponSkillList.CLEAVE;
};
export declare type MasterSkillListType = typeof MasterSkillList;
export declare enum SkillCategory {
    MOVEMENT = "Movement",
    MENU = "Menu",
    COMBO = "Combo",
    INTERACTION = "Interaction",
    WEAPON = "Weapon",
    CLASS = "Class",
    DRIVE = "Drive",
    PARTY = "Party",
    GEAR = "Gear",
    NATURAL = "Natural"
}
/**
 * BaseSkill
 * Skills are decoupled from the actor and target.
 * Skills refer to abilities that assigned to characters.
 */
export interface BaseSkill {
    /**
     * The name is used to identify the skill
     */
    name: string;
    /**
     * The description explains the skill to the player
     */
    description: string;
    /**
     * Whether the skill must be canceled or automatically stop being performed
     */
    fixed?: boolean;
    /**
     * Stamina Boost Enabled Action
     * By holding down the button used to make that move
     * a player may place more stamina into the move
     * making it a more powerful action.
     * For every 6 seconds, character gains a plus 1 for example.
     */
    booster?: Attribute;
}
export {};
