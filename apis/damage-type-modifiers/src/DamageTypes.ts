export enum DamageType {
    Electric, // this is the damage type modifier for lightning. 
    Air, // this is the damage type modifier for wind.
    Earth, // this is the damage type modifier for earth.
    Fire, // this is the damage type modifier for fire.
    Water, // this is the damage type modifier for water.
    Nature, // this is the damage type modifier for nature. 
    Physical, // this is the damage type modifier for physical.
    Psychic, // this is the damage type modifier for psychic.
    Darkness, // this is the damage type modifier for darkness.
    Light // this is the damage type modifier for light.
}

// asborbtion necessates group processing of damage type to area of impact
// stackable, and entity may be have multiple DamageEffects for a single type.

export enum DamageEffect {
    Resistance, // decreases damage taken by the damage type.
    Weakness, // increases damage taken by the damage type.
    Nullify, // completely nullifies damage taken by the damage type.
    Immunity, // completely blocks damage taken by the damage type.
    Absorption, // reduces damage type area of effect to nearby targets.
    Healing, // completely heals damage taken by the damage type.
}



export enum DamageOperator {
    '*',
    '-',
    '+',
    '/',
}

export type DamageEffectModifier = Number;
export type DamageAmount = Number;
export type DamageTotal = Number;



export class DamageTypeModifier {

    private ExampleCharacterEffect = [
        ["Electric", "Resistance", "-", "200"],
        ["Electric", "Resistance", "/", "2"],
        ["Electric", "Absorption", "/", "4"],
        ["Air", "Weakness", "+", "100"],
        ["Earth", "Nullify", "-", "0"],
        ["Fire", "Immunity", "-", "0"],
        ["Water", "Absorption", "-", "0"],
        ["Nature", "Healing", "-", "0"]
    ];

    // todo need to determine where roll occurs
    private ExampleAction = [
        ["200", "Fire"],
        ["1000", "Physical"],
    ];
    private ExampleActionWithRoll = [
        ["2d2+5", "Fire"],
        ["51", "Physical"],
        ["40d6", "Physical"],
    ];

    
    // Actor Deals -> calculate -> Subject Takes
    // Action
    // 100, Fire, Resistance, *, 1.5

    public calculateDamage(damageType: DamageType, damageEffect: DamageEffect, damageOperator: DamageOperator, damageEffectModifier: DamageEffectModifier): DamageTotal {
        return 0;
    }

    // perhaps move to API
    public batchProcessor(): DamageTotal {
        return 0;
    }

}


// DTM can be 
// * Resistance < 0 NEGTIVE (damage resistance), 
// * Neutral = 0 (standard damage) values.
// * Weakness > 0 POSTIVE (damage weakness), and 

