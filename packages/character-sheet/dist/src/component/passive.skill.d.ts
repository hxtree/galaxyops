import { BaseSkill } from './base.skill';
export declare enum PassiveSkillList {
    DUAL_WELD = "Dual Weld",
    ESCAPE_ARTIST = "Escape Artist",
    INTIMIDATE = "Intimidate",
    CONCENTRATION = "Concentration",
    BLUFF = "Bluff",
    SENSE_BLUFF = "Sense Bluff",
    GREEDY_INTENT = "Greedy Intent",
    SLOTH_COMPOSURE = "Sloth Composure",
    BLOOD_LUST = "Blood Lust",
    ENVIOUS_OF_COMBAT = "Envious of Combat",
    GLUTTONOUS_DESIRE = "Gluttonous Desire",
    CATCHER = "Catcher"
}
/**
 * PassiveSkill are abilities that are not actions
 * They are kind of like natural actions as they do not need to be called to be used.
 */
export interface PassiveSkill extends BaseSkill {
}
export declare class DualWeld implements PassiveSkill {
    name: PassiveSkillList.DUAL_WELD;
    description: 'Can use two one handed weapons at once.';
}
export declare class EscapeArtist implements PassiveSkill {
    name: PassiveSkillList.ESCAPE_ARTIST;
    description: 'Makes it easier to run away from aggresive targets';
}
export declare class Intimidate implements PassiveSkill {
    name: PassiveSkillList.INTIMIDATE;
    description: 'Causes fear in enemy';
}
export declare class Concentration implements PassiveSkill {
    name: PassiveSkillList.CONCENTRATION;
    description: 'Stay focused';
}
export declare class Bluff implements PassiveSkill {
    name: PassiveSkillList.BLUFF;
    description: 'Tell a lie without being caught';
}
export declare class SenseBluff implements PassiveSkill {
    name: PassiveSkillList.SENSE_BLUFF;
    description: 'Detect if a lie is being told';
}
export declare class GreedyIntent implements PassiveSkill {
    name: PassiveSkillList.GREEDY_INTENT;
    description: 'Gain 5% more experience than party';
}
export declare class SlothComposure implements PassiveSkill {
    name: PassiveSkillList.SLOTH_COMPOSURE;
    description: 'Blows taken when not doing action are halved';
}
export declare class BloodLust implements PassiveSkill {
    name: PassiveSkillList.BLOOD_LUST;
    description: 'Speed in battle increased';
}
export declare class EnviousOfCombat implements PassiveSkill {
    name: PassiveSkillList.ENVIOUS_OF_COMBAT;
    description: 'Gain rage from watching combat';
}
export declare class GluttonousDesire implements PassiveSkill {
    name: PassiveSkillList.GLUTTONOUS_DESIRE;
    description: 'Comsumer food items twice as fast';
}
export declare class Catcher implements PassiveSkill {
    name: PassiveSkillList.CATCHER;
    description: 'Receive bonus when catching items';
}
