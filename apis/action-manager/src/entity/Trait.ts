import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Character } from "./Character";
import { Modifier } from "../model/tag/Modifier";

export enum Operator {
    ADD = "ADD",
    MULTIPLY = "MULTIPLY",
    SUBTRACT = "SUBTRACT",
    DIVIDE = "DIVIDE"
}

export enum Effect {
    WEAK = 'Weak', // Weakness, increases damage taken by the damage type.
    RESIST = 'Resist', // Resistance. decreases damage taken by the damage type.
    ABSORB = 'Absorb', // Absorption, reduces damage type area of effect to nearby targets.
    IMMUNE = 'Immune', // Immunity, completely blocks damage taken by the damage type.
    HEAL = 'Heal', // Healing, reverses damage taken into healing by the damage type.
}

/**
 * Trait indicates a characters single resistances or weakness to type of effect 
 * Trait-based resistances and weaknesses are calculated by the game engine based on whether tag is associated 
 * with action being applied to target character.
 * Traits are stackable; a character can have multiple traits with the same ModifierType.
 * 
 * e.g. 
 * RESIST FIRE ADD 50
 * WEAK ICE MULTIPLY 0.5
 * IMMUNE BLADE NULL NULL
 * IMMUNE POSION NULL NULL
 * RESISTANT SPEED_DECREASE DIVIDE 0.5
*/
@Entity()
export class Trait {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Character, (character) => character.traits)
    character: Character;

    @Column({
        type: "enum",
        enum: Effect
    })
    effect: Effect;

    @Column({
        type: "enum",
        enum: Modifier
    })
    modifier: Modifier;

    @Column({
        type: "enum",
        enum: Operator
    })
    operator: Operator;

    @Column()
    value: number;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    /**
     * Describe the trait
     * "Resistant to fire (-70%)"
     * "Weak to cold (x2.5)"
     * "Immune to frost"
     */
    public describe() : string {
        let description = '';
        let modifier = this.modifier.toString().toLowerCase();

        switch (this.effect){
            case Effect.WEAK:
                description = `Weak to ${modifier}`;
                break;
            case Effect.RESIST:
                description = `Resistant to ${modifier}`;
                break;
            case Effect.ABSORB:
                description = `Absorbs ${modifier}`;
                break;
            case Effect.IMMUNE:
                description = `Immune to ${modifier}`;
                return description;
            case Effect.HEAL:
                description = `Heals ${modifier}`;
                break;
        }

        // todo revisit this
        switch (this.operator) {
            case Operator.ADD:
                description += ` (+${modifier})`;
                break;
            case Operator.MULTIPLY:
                description += ` (x${modifier})`;
                break;
            case Operator.SUBTRACT:
                description += ` (-${modifier})`;
                break;
            case Operator.DIVIDE:                    
                description += ` (-${modifier}%)`;
                break;
        }

        return description;
    }
}


