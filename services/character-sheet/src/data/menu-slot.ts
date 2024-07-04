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
  NONE: { order: MenuSlotOrder.NONE, name: 'None' },
  INTERACTION: { order: MenuSlotOrder.INTERACTION, name: 'Interaction' },
  ATTACK: { order: MenuSlotOrder.SECOND, name: 'Attack' },
  MAGIC: { order: MenuSlotOrder.THIRD, name: 'Magic' },
  ABILITIES: { order: MenuSlotOrder.FOURTH, name: 'Abilities' },
  TRAPS: { order: MenuSlotOrder.FIFTH, name: 'Traps' },
  TOOLS: { order: MenuSlotOrder.FIFTH, name: 'Tools' },
  SUMMON: { order: MenuSlotOrder.FIFTH, name: 'Summon' },
  ITEM: { order: MenuSlotOrder.ITEM, name: 'Item' },
  MOVEMENT: { order: MenuSlotOrder.MOVEMENT, name: 'Movement' },
  DRIVE: { order: MenuSlotOrder.FIFTH, name: 'Drive' },
  TEAMWORK: { order: MenuSlotOrder.FIFTH, name: 'Teamwork' },
};
