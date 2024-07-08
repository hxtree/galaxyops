import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillType, SkillLevel } from './skill.type';

/**
 * Item
 * Are quite simply actions that are related to the use of an item.
 * Are only accessible by a Player through the Menu screen
 */
export namespace Item {
  export const APPRAISE_LV1: SkillType = {
    description: 'Determine the market value of an item',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ITEM,
    name: 'Appraise',
  };

  export const COMBINE_LV1: SkillType = {
    description: 'Turn two or more items into one item if compatible',
    // CRAFT
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ITEM,
    name: 'Combine',
  };

  export const THROW_LV1: SkillType = {
    description: 'Toss an item from stock away or to injure enemy.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ITEM,
    name: 'Throw',
  };

  export const PREPARE_FOOD_LV1: SkillType = {
    description: 'Make a meal',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.ITEM,
    name: 'Prepare Food',
  };
}
