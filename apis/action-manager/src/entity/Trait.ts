import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Character } from "./Character";

// "Resistant to fire (-50%)"
// "Weak to cold (x2.5)"
// "Immune to frost (-1000%)"

export enum OperatorType {
    ADD = "ADD", 
    SUBTRACT = "SUBTRACT", 
    MULTIPLY = "MULTIPLY",
    DIVIDE = "DIVIDE"
}

// todo fire resistance? posion immune? immune to blades?
export enum AttributeType {
    LIFE = "LIFE",
    SPIRIT = "SPIRIT",
    DRIVE = "DRIVE",
    POWER = "POWER",
    SPEED = "SPEED",
    WISDOM = "WISDOM",
    INTELLIGENCE = "INTELLIGENCE",
    DEFENSE = "DEFENSE",
    ACCURACY = "ACCURACY",
    EVASION = "EVASION",
    LUCK = "LUCK"
}

/**
 * Trait indicates a characters resistances and weakness to effects 
 */
@Entity()
export class Trait {

    @PrimaryGeneratedColumn()
    private _id: number;

    @ManyToOne(() => Character, (character) => character.traits)
    public character: Character;

    @Column({
        type: "enum",
        enum: AttributeType
    })
    private attribute: AttributeType;

    @Column({
        type: "enum",
        enum: OperatorType,
        default: OperatorType.ADD
    })
    private operator: OperatorType;

    @Column()
    private _amount: number;

    @CreateDateColumn()
    private createdAt: Date;
        
    @UpdateDateColumn()
    private updatedAt: Date;
}


