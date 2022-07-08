import { BaseWeapon, WeaponCategory } from './BaseWeapon';

class TheManSlayer extends BaseWeapon {
    protected _name: string = 'The Man Slayer';
    protected _category = WeaponCategory.SHEILD_SWORD;
    protected _description: string = 'A giant ancient hellish looking blade. Its handle bares a dogtooth design.';
    protected _history: 'It was reportedly used by Galax to bring peace.';
}