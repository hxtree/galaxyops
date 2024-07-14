/**
 * Enum representing possible targets for actions.
 * These area related to costs to perform an action but the impacts of the action
 */
export enum ActionTarget {
  SELF = 'SELF',

  // An ally of the player
  ALLY = 'ALLY',

  // A region within the AOE map affecting all entities
  AREA = 'AREA',

  // interactable object or entity for interaction
  // A determination is made by the game engine to determine the effect on the
  // object such as unlocking a door, moving a rock, or impending object
  INTERACTION_OBJECT = 'INTERACTION_OBJECT',

  // The performers inventory or equipment
  INVENTORY = 'INVENTORY',

  // The player initiating the action
  PERFORMER = 'PERFORMER',

  // An opponent of the player
  OPPONENT = 'OPPONENT',
}
