import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import { Character } from "./Character";

export enum Discipline {
    AMBER_ASSASSIN = 'Amber Assassin',
    ELITE_ASSASIN = 'Elite Assasin',
    BARD = 'Bard',
    BODY_BUILDER = 'Body Builder',
    COMMANDER = 'Commander',
    DUELIST = 'Duelist',
    ENGINEER = 'Engineer',
    GAURD = 'Gaurd',
    GYMNAST = 'Gymnast',
    HISTORIAN = 'Historian',
    KNIGHT = 'Knight',
    LIGHTENING_WARRIOR = 'Lightening Warrior',
    NINJA = 'Ninja',
    POSSESSED = 'Possessed',
    REBEL = 'Rebel',
    RUNE_KING = 'Rune King',
    SCOUT = 'Scout',
    SOLIDER = 'Solider',
    THIEF = 'Thief',
    WARRIOR = 'Warrior',
    WIZARD = 'Wizard',
    XSOLIDER = 'XSolider'
}

/**
 * Experience records a character experience for a specific discipline.
 * Different disciplines have different experience requirements.
 * A character can have multiple disciplines and therefore multiple experience records.
 * Progression in one discipine may unlock other disciplines, actions, and attributes bonuses.
 */
@Entity()
export class Experience {

    @PrimaryGeneratedColumn("uuid")
    id: string;
      
    @ManyToOne(() => Character, (character) => character.equipment)
    character: Character;

    @Column({
        type: "enum",
        enum: Discipline
    })
    discipline: Discipline;

    @Column()
    experience: number;

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}