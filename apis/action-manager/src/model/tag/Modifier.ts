import { Element } from './Element';
import { Weapon } from './Weapon';

/**
 * Modifier is a type of tag used to determine weakness and resistance
 * A collection of modifiers types that are permittable to assign to a action, trait, or effect.
 */
export const Modifier = {
    ...Element, 
    ...Weapon
};
export type Modifier = typeof Modifier;

