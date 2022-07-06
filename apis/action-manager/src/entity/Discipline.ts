import {Entity, PrimaryGeneratedColumn, ManyToOne, Column} from 'typeorm';
   
import { Character } from "./Character";

/**
 * A Discipline record for a character experience in a specific 
 */
 @Entity()
 export class Discipline { 

    @PrimaryGeneratedColumn()
    private id: string;
      
    @ManyToOne(() => Character, (character) => character.equipment)
    private _character: Character;

    @Column()
    public _discipline: string;

    @Column()
    private _experience: number;

    @Column()
    private _lastUpdated: Date;

    public get character(): Character {
        return this.character;
    }

    public set character(character: Character) {
        this.character = character;
    }

    public get experience(): number {
        return this._experience;
    }

    public set experience(experience: number) {
        this._experience = experience;
    }

    public get discipline(): string {
        return this.discipline;
    }

    public set discipline(discipline: string) {
        this.discipline = discipline;
    }

    public get level(): number {
        return Math.floor(Math.sqrt(this._experience / 100));
    }

    public get nextLevel(): number {
        return (this._experience - (this.level * (this.level - 1) / 2) * 100);
    }

    public get experienceToNextLevel(): number {
        return this.nextLevel - this.experience;
    }

    public get experienceToNextLevelPercentage(): number {
        return this.experienceToNextLevel / this.nextLevel;
    }

    public get lastUpdated(): Date {
        return this.lastUpdated;
    }

    public set lastUpdated(lastUpdated: Date) {
        this.lastUpdated = lastUpdated;
    }

    // todo load from Class
    public get effects(): Array<string> {
        return [];
    }
}