import { BaseWeapon, WeaponCategory } from './BaseWeapon';

class SwordOfLawzon extends BaseWeapon {
    protected _name: string = 'Sword of Lawzon';
    protected _category = WeaponCategory.SWORD;
    protected _description: string = 'A dirty simple solid blade forged of harden steel.';
}