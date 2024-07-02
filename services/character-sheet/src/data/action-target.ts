/**
 * Enum representing possible targets for actions.
 * These area related to costs to perform an action but the impacts of the action
 */
export enum ActionTarget {
  // An ally of the player
  ALLY = 'ALLY',

  // A region within the AOE map affecting all entities
  AREA = 'AREA',

  // Object or entity for interaction
  INTERACTION_OBJECT = 'INTERACTION_OBJECT',

  // The performers inventory or equipment
  INVENTORY = 'INVENTORY',

  // The player initiating the action
  PERFORMER = 'PERFORMER',

  // An opponent of the player
  OPPONENT = 'OPPONENT',
}
