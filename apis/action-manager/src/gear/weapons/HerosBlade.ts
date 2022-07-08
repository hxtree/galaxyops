import { BaseWeapon, WeaponCategory } from './BaseWeapon';

class HerosBlade extends BaseWeapon {
    protected _category: string = WeaponCategory.SHEILD_SWORD;
    protected _name: string = 'Hero\'s Blade';
    protected _description: string = 'a mystical blade that is destine to fall into the hands of the next true hero.';
}