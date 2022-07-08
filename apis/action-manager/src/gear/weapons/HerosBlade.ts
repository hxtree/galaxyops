import { BaseWeapon, WeaponCategory } from './BaseWeapon';

class HerosBlade extends BaseWeapon {
    protected _name: string = 'Hero\'s Blade';
    protected _category = WeaponCategory.SHEILD_SWORD;
    protected _description: string = 'a mystical blade that is destine to fall into the hands of the next true hero.';
}