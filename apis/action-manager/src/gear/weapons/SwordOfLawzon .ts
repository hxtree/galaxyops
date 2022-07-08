import { BaseWeapon, WeaponCategory } from './BaseWeapon';

class SwordOfLawzon extends BaseWeapon {
    protected _category: string = WeaponCategory.SWORD;
    protected _name: string = 'Sword of Lawzon';
}