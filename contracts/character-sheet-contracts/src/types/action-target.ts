/**
 * The target of a given action. A action may have multiple targets,
 * for example, a skill may target the opponent to take their life
 * and the performer to increase their health.
 */
export enum ActionTarget {
  /**
   * The action targets the performer itself.
   */
  SELF = 'SELF',

  /**
   * The action targets an ally of the player.
   */
  ALLY = 'ALLY',

  /**
   * The action targets a region within the AOE map, affecting all entities within that region.
   */
  AREA = 'AREA',

  /**
   * The action targets an interaction object/entity.
   * The effect on the object is determined by the game engine, such as
   * unlocking a door or moving a rock.
   */
  INTERACTION_OBJECT = 'INTERACTION_OBJECT',

  /**
   * The action targets the performer's inventory or equipment.
   */
  INVENTORY = 'INVENTORY',

  /**
   * The action targets the player initiating the action.
   */
  PERFORMER = 'PERFORMER',

  /**
   * The action targets an opponent of the player.
   */
  OPPONENT = 'OPPONENT',

  /**
   * The action targets the party of the player.
   */
  PARTY = 'PARTY',
}
