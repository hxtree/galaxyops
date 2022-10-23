import { Weapon } from './weapon.skill';
export declare enum Combo {
    BLITZ = "Blitz"
}
/**
 * Combo Skills use is revoked unless character action history matches exactly
 * prerequisite of prior skills
 * Once prerequisite is matched the combination activation button (Square by default)
 * can be pressed to activate the action
 *
 * If prerequestes is undefined, a player may customize a characters to set a custom
 * combo in order for quicker action selection.
 */
export declare namespace Combo {
    type ComboType = {
        name: string;
        description: string;
        prerequisite?: Weapon[];
    };
    const Blitz: ComboType;
}
