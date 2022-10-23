import { EffectTable } from '../table.effect';
/**
 * Weapon Skill
 *
 * Weapon sklills are granted based on the equipped item and characters ability to use weapon.
 * Each directly related to simple use of the players equipped weapon.
 * Each are a type of Command Menu Action which means they can be used in game.
 * They are always located in the first slot of the Basic Command Menu Actions.
 */
export declare enum Weapon {
    PARRY = "Parry",
    SLASH = "Slash",
    STRIKE = "Strike",
    STAB = "Stab",
    CHOP = "Chop",
    CLEAVE = "Cleave"
}
export declare namespace WeaponSkill {
    type WeaponType = {
        name: Weapon;
        description: string;
        effect: EffectTable;
    };
    const Parry: WeaponType;
    const Slash: WeaponType;
    const Strike: WeaponType;
    const Stab: WeaponType;
    const Chop: WeaponType;
    const Cleave: WeaponType;
}
