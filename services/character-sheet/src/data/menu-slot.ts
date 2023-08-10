/**
 * MenuSlot determines which Menu slot a Player can find a character's action
 *
 * One character's Slot 4 may have Traps whereas another character
 * may have Command because different types of Actions may occupy the same slot,
 */
export const enum MenuSlot {
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
