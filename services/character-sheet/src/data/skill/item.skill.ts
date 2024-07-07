import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillType } from '.';

/**
 * Item
 * Are quite simply actions that are related to the use of an item.
 * Are only accessible by a Player through the Menu screen
 */
export namespace Item {
  export const APPRAISE: SkillType = {
    description: 'Determine the market value of an item',
    menuSlot: MenuSlot.ITEM,
    name: 'Appraise',
  };

  export const COMBINE: SkillType = {
    // CRAFT
    description: 'Turn two or more items into one item if compatible',
    menuSlot: MenuSlot.ITEM,
    name: 'Combine',
  };

  export const THROW: SkillType = {
    description: 'Toss an item from stock away or to injure enemy.',
    menuSlot: MenuSlot.ITEM,
    name: 'Throw',
  };

  export const PREPARE_FOOD: SkillType = {
    description: 'Make a meal',
    menuSlot: MenuSlot.ITEM,
    name: 'Prepare Food',
  };
}
