import { MenuSlot } from '../character/MenuSlot';
import { BaseSkill } from './base.skill';
import { Slash, WeaponSkill } from './weapon.skill';
export declare enum ComboSkillList {
    BLITZ = "Blitz"
}
export declare abstract class ComboSkill implements BaseSkill {
    abstract name: string;
    abstract description: string;
    /**
     * Combo Skills use is revoked unless character action history matches exactly
     * prerequisite of prior skills
     * Once prerequisite is matched the combination activation button (Square by default)
     * can be pressed to activate the action
     *
     * If prerequestes is undefined, a player may customize a characters to set a custom
     * combo in order for quicker action selection.
     */
    prerequisite?: Array<WeaponSkill>;
    menuSlot: MenuSlot.First;
}
export declare class Blitz extends ComboSkill {
    name: ComboSkillList.BLITZ;
    description: '';
    prerequisite: [Slash, Slash, Slash];
}
