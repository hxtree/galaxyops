/**
 * MenuSlot determines which Menu slot a Player can find a character's action
 *
 * Different types of Actions may occupy the same slot as different characters may have different
 * abilities in the same slot.
 *
 * For example, one character's Slot 4 may have Traps whereas a different
 * character may have Command.
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
