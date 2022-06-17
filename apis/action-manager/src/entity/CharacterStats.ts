import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

import { Gauge } from "../Gauge";

@Entity()
export class CharacterStats {
    
    @PrimaryGeneratedColumn()
    private id: number;

    @Column({ unique: true })
    private _characterId: number;

    // A measurement of ones ability to hold spirit to physical plain
    @Column()
    private _life: Gauge;

    // A measurement of ones spiritual ability
    @Column()
    private _spirit: Gauge;

    // A gauge of  ability to do special skills
    @Column()
    private _drive: Gauge;

    // The ability to apply force to ones movements
    @Column()
    private _power: number;

    // The ability to move quickly
    @Column()
    private _speed: number;   

    // The quality of having experience, knowledge, and good judgment.
    @Column()
    private _wisdom: number;

    // The ability to think and reason logically.
    @Column()
    private _intelligence: number;
 
    // The ability to protect and defend oneself.
    @Column()
    private _defense: number;
 
    // The ability to hit and injure others.
    @Column()
    private _accuracy: number;
 
    // The ability to avoid and evade attacks.
    @Column()
    private _evasion: number;
 
    // The ability to have a favorable outcome.
    @Column()
    private luck: number;
     
    public get life(): Gauge {
        return this._life;
    }

    public set life(life: Gauge) {
        this._life = life;
    }

    public get spirit(): Gauge {
        return this._spirit;
    }

    public set spirit(spirit: Gauge) {
        this._spirit = spirit;
    }
    
    public get power(): number {
        return this._power;
    }

    public set power(power: number) {
        this._power = power;
    }

    public get speed(): number {
        return this._speed;
    }

    public set speed(speed: number) {
        this._speed = speed;
    }

    public get wisdom(): number {
        return this._wisdom;
    }

    public set wisdom(wisdom: number) {
        this._wisdom = wisdom;
    }
   
    public get intelligence(): number {
        return this._intelligence;
    }

    public set intelligence(intelligence: number) {
        this._intelligence = intelligence;
    }
    
     public get defense(): number {
        return this._defense;
    }

    public set defense(defense: number) {
        this._defense = defense;
    }

    public get accuracy(): number {
        return this._accuracy;
    }

    public set accuracy(accuracy: number) {
        this._accuracy = accuracy;
    }
   
    public get evasion(): number {
        return this._evasion;
    }

    public set evasion(evasion: number) {
        this._evasion = evasion;
    }
}