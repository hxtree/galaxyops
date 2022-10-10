/**
 * Item Skill
 *
 * MenuAction.Fifth
 *
 * Item actions are quite simply actions that are related to the use of an item.
 * Item actions are only accessible by a Player through the Menu screen
 */
import { BaseSkill } from './BaseSkill';
export declare enum ItemSkillList {
    APPRIASE = "Appraise",
    COMBINE = "Combine",
    THROW = "Throw",
    PREPARE_FOOD = "Prepare Food"
}
export interface ItemSkill extends BaseSkill {
    name: ItemSkillList;
}
export declare class Appraise implements ItemSkill {
    name: ItemSkillList.APPRIASE;
    description: 'Determine the market value of an item';
}
export declare class Combine implements ItemSkill {
    name: ItemSkillList.COMBINE;
    description: 'Turn two or more items into one item if combatiable';
}
export declare class Throw implements ItemSkill {
    name: ItemSkillList.THROW;
    description: 'Toss an item from stock away or to injure enemy.';
}
export declare class PrepareFood implements ItemSkill {
    name: ItemSkillList.PREPARE_FOOD;
    description: 'Make a meal';
}
