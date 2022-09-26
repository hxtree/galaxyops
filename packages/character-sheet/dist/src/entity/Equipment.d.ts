import { Item } from './Item';
import { Character } from './Character';
export declare abstract class Equipment {
    id: string;
    character: Character;
    item: Item;
    gearSlot: string;
    updatedAt: Date;
    createdAt: Date;
}
