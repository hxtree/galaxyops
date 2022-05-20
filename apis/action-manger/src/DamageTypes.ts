export enum Type {
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

// EffectFactors?
// absorbtion necessates group processing of damage type to area of impact
export enum Effect {
    Resistance, // decreases damage taken by the damage type.
    Weakness, // increases damage taken by the damage type.
    Nullify, // completely nullifies damage taken by the damage type.
    Immunity, // completely blocks damage taken by the damage type.
    Absorption, // reduces damage type area of effect to nearby targets.
    Healing, // reverses damage taken into healing by the damage type.
}

export enum Operator {
    '*', // multiply
    '-', // subtract
    '+', // add
    '/' // divide
}

export type Modifier = Number;

export type DTM = [Type, Effect, Operator, Modifier];
export type DTMs = Array<DTM>;


export type Amount = Number;
export type Damage = [Amount, Type];
export type Damages = Array<Damage>;

export type DamageTotal = Number;

// Can damages only effect HP or can they effect MP?

export class DamageTypeModifier {

    public proccess(damage: Damage, dtms: DTMs): DamageTotal {
        const amount = damage[0];
        let total: DamageTotal = 0;
        

        // stackable, and entity may be have multiple DamageEffects for a single type.
        dtms.forEach(function (dtm) {
            if(dtm[0] == damage[1]){
                // todo

            }
        });
        return total;
    }

    // perhaps move to API
    public batchProcess(damages: Damages, dtms: DTMs) : DamageTotal {
        let total: DamageTotal = 0;
        for (var damage of damages) {
            total = this.proccess(damage, dtms);
        }
        return total;
    }

    // resolve rolls
    // adjust rolls for impacted parties using DTM

    
    // Actor Deals -> calculate -> Subject Takes
    // Action
    // 100, Fire, Resistance, *, 1.5

    // what about status effects caused by damages :?
}


// should another var be status, MP, HP, SP?
const ExampleCharacterDamageTypeEffect = [
    ["Physical", "Resistance", "%", "5"], // effect of armor
    ["Physical", "Resistance", "-", "50"], // effect of armor
    ["Electric", "Resistance", "-", "200"], // natural ability
    ["Electric", "Resistance", "/", "2"], // natural ability
    ["Electric", "Absorption", "/", "4"], // natural ability
    ["Air", "Weakness", "+", "100"], // natural ability
    ["Earth", "Nullify", "-", "0"], // effect of magic ring
    ["Fire", "Immunity", "-", "0"], // effect of magic necklace
    ["Water", "Absorption", "-", "0"], // effect of magic ring
    ["Nature", "Healing", "+", "20"] // effect of tunic 
];

// todo need to determine where roll occurs
const ExampleAction = [
    ["200", "Fire"],
    ["1000", "Physical"],
];

const ExampleActionWithRoll = [
    ["2d2+5", "Fire"],
    ["51", "Physical"],
    ["40d6", "Physical"],
];



// DTM can be 
// * Resistance < 0 NEGTIVE (damage resistance), 
// * Neutral = 0 (standard damage) values.
// * Weakness > 0 POSTIVE (damage weakness), and 

