import { Experience } from './Experience';
import { Equipment } from './Equipment';
import { Trait } from './Trait';
import { Attributes } from './Attributes';
export declare class CharacterSheet {
    id: number;
    /**
     * base character information not stored in database
     * contains potentialGeatSlots, potentialDisciplines, etc.
     */
    archetype: string;
    traits: Array<Trait>;
    attributes: Attributes;
    experiences: Experience[];
    equipment: Equipment[];
    updatedAt: Date;
    createdAt: Date;
    /**
     * characters actual stats vary based on disciplines, afflictions, and equipment
     * the values actually stored in the database are the raw stats
     */
    getStats(): void;
    /**
     * skills are determined based on disciplines, afflictions, and equipment
     * they are not correlated to character
     */
    getSkills(): void;
    addEquipment(equipment: Equipment): void;
    removeEquipment(equipment: Equipment): void;
}
