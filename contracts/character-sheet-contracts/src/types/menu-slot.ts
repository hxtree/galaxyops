/**
 * MenuSlot determines which Menu slot a Player can find a character's action
 *
 * One character's Slot 4 may have Traps whereas another character
 * may have Commands because different types of Actions may occupy the same slot,
 */
export const enum MenuSlotOrder {
  NONE = 0,
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  FOURTH = 4,
  FIFTH = 5,
  INTERACTION = 6,
  ITEM = 7,
  MOVEMENT = 8,
}

export enum MenuSlotCategory {
  NONE = 'NONE',
  MAGIC = 'MAGIC',
  ABILITIES = 'ABILITIES',
  TRAPS = 'TRAPS',
  TOOLS = 'TOOLS',
  SUMMON = 'SUMMON',
  ITEM = 'ITEM',
  INTERACTION = 'INTERACTION',
  ATTACK = 'ATTACK',
  MOVEMENT = 'MOVEMENT',
  DRIVE = 'DRIVE',
  TEAMWORK = 'TEAMWORK',
}

export type MenuSlotType = {
  order: MenuSlotOrder;
  name: string;
};

export type MenuSlotTypes = {
  [key in MenuSlotCategory]: MenuSlotType;
};

export const MenuSlot: MenuSlotTypes = {
  ABILITIES: { name: 'Abilities', order: MenuSlotOrder.FOURTH },
  ATTACK: { name: 'Attack', order: MenuSlotOrder.SECOND },
  DRIVE: { name: 'Drive', order: MenuSlotOrder.FIFTH },
  INTERACTION: { name: 'Interaction', order: MenuSlotOrder.INTERACTION },
  ITEM: { name: 'Item', order: MenuSlotOrder.ITEM },
  MAGIC: { name: 'Magic', order: MenuSlotOrder.THIRD },
  MOVEMENT: { name: 'Movement', order: MenuSlotOrder.MOVEMENT },
  NONE: { name: 'None', order: MenuSlotOrder.NONE },
  SUMMON: { name: 'Summon', order: MenuSlotOrder.FIFTH },
  TEAMWORK: { name: 'Teamwork', order: MenuSlotOrder.FIFTH },
  TOOLS: { name: 'Tools', order: MenuSlotOrder.FIFTH },
  TRAPS: { name: 'Traps', order: MenuSlotOrder.FIFTH },
};
