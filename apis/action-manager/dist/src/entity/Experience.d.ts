import { Character } from "./Character";
import { Discipline } from "./../discipline/BaseDiscipline";
/**
 * Experience records a character experience for a specific discipline.
 * Different disciplines have different experience requirements.
 * A character can have multiple disciplines and therefore multiple experience records.
 * Progression in one discipine may unlock other disciplines, actions, and attributes bonuses.
 */
export declare class Experience {
    id: string;
    character: Character;
    discipline: Discipline;
    experience: number;
    updatedAt: Date;
    createdAt: Date;
}
