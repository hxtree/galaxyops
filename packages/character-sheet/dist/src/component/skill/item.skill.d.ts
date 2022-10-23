export declare enum Item {
    APPRIASE = "Appraise",
    COMBINE = "Combine",
    THROW = "Throw",
    PREPARE_FOOD = "Prepare Food"
}
/**
 * Item Skill
 * Are quite simply actions that are related to the use of an item.
 * Are only accessible by a Player through the Menu screen
 */
export declare namespace ItemSkill {
    type ItemType = {
        name: Item;
        description: string;
    };
    const Appraise: ItemType;
    const Combine: ItemType;
    const Throw: ItemType;
    const PrepareFood: ItemType;
}
