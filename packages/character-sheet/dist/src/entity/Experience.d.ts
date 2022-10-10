import { CharacterSheet } from './CharacterSheet';
import { Discipline } from '../component/character/Discipline';
/**
 * Experience records a character experience for a specific discipline.
 * Different disciplines have different experience requirements.
 * A character can have multiple disciplines and therefore multiple experience records.
 * Progression in one discipine may unlock other disciplines, actions, and attributes bonuses.
 */
export declare class Experience {
    id: string;
    characterSheet: CharacterSheet;
    discipline: Discipline;
    experience: number;
    updatedAt: Date;
    createdAt: Date;
}
