import { Gravity } from './gravity';
import { Fireball } from './fireball';
import { OtherSpells } from './other-spells';
import { Shock } from './shock';
import { Quake } from './quake';

/**
 * Spells are actions that are casted by magic users.
 * Spells feature a prefix that differs based on skill level.
 * This indicates to astute players the magic rankings of their adversary
 *
 * | min | max | rank   | example        |
 * | --  | --  | --     | --             |
 * |  1  |   2 | Normal | Fireball       |
 * |  3  |   4 | Mega   | Mega Fireball  |
 * |  5  |   6 | Giga   | Giga Fireball  |
 * |  7  |   9 | Tera   | Tera Fireball  |
 * | MAX | MAX | Omega  | Omega Fireball |
 */
export const Spell = {
  ...Shock,
  ...OtherSpells,
  ...Fireball,
  ...Gravity,
  ...Quake,
};
