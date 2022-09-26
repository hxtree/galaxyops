import { Trait } from "./Trait";
import { Experience } from "./Experience";
import { Equipment } from "./Equipment";
import { Attributes } from "./Attributes";
/**
 * A character is a instance of a player or non-player
 */
export declare abstract class Character {
    id: string;
    traits: Array<Trait>;
    attributes: Attributes;
    experiences: Array<Experience>;
    equipment: Equipment[];
    private _actions;
    private _equipmentSlots;
    updatedAt: Date;
    createdAt: Date;
    addEquipment(equipment: Equipment): void;
    removeEquipment(equipment: Equipment): void;
}
