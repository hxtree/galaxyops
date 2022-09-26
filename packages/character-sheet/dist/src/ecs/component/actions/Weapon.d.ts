import { Action } from './Action';
/**
 * Weapon Actions are actions directly related to simple use of the players equipped weapon.
 * Weapons Actions are a type of Command Menu Action which means they can be used in game.
 * They are always located in the first slot of the Basic Command Menu Actions.
 */
export interface WeaponAction extends Action {
}
