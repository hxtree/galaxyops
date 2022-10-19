import { BaseSkill } from './base.skill';
import { MenuSlot } from './menu-slot';
export declare enum ItemSkillList {
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
export declare class ItemSkill implements BaseSkill {
    name: ItemSkillList;
    description: string;
    menuSlot: MenuSlot.Fifth;
}
export declare class Appraise extends ItemSkill {
    name: ItemSkillList.APPRIASE;
    description: 'Determine the market value of an item';
}
export declare class Combine extends ItemSkill {
    name: ItemSkillList.COMBINE;
    description: 'Turn two or more items into one item if combatiable';
}
export declare class Throw extends ItemSkill {
    name: ItemSkillList.THROW;
    description: 'Toss an item from stock away or to injure enemy.';
}
export declare class PrepareFood extends ItemSkill {
    name: ItemSkillList.PREPARE_FOOD;
    description: 'Make a meal';
}
