/**
 * PartyMemberToken are coin shaped objects that a Player receives
 * that represent characters currently in party.
 * Each coin has six sides and an engraving of an Archetype's symbol.
 * How a player arranges tokens reflects how party will be arranged and visa versa.
 * Different types of tokens represents a player's ability to control that character.
 */
export enum PartyMemberToken {
  /**
   * A Gold token means:
   * player can controller character.
   * player can order character.
   * player can adjust character's action.
   */
  GOLD = 'Gold',

  /**
   * A Silver token means:
   * player cannot controller character.
   * player can order the character to perform tasks.
   * player cannot adjust character's gear.
   * player can adjust character's action.
   */
  SILVER = 'Silver',

  /**
   * A Copper token means:
   * player cannot controller character.
   * player cannot order the character to perform tasks.
   * player cannot adjust character's gear.
   * player cannot adjust character's action.
   */
  COPPER = 'Copper',

  /**
   * A Gray token means:
   * player has a gold token for a character.
   * character is current not in party.
   */
  GRAY = 'Gray',

  /**
   * A Black token means:
   * character is dead.
   */
  BLACK = 'Black',
}
