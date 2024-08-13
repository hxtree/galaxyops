import { Skill } from './skill';
import { SupplyItem } from './supply-item';

/**
 * Represents a weapon.
 */
export type Weapon = SupplyItem & {
  /**
   * The category of the weapon, used to determine equability, weakness and resistance.
   */
  category: WeaponCategory;
  /**
   * The history of the weapon, can be revealed by a special ability.
   */
  history?: string | null;
  /**
   * Used to determine damage per swing / etc.
   */
  power: number;
  /**
   * Used to determine rate of use/fire.
   */
  speed: number;
  /**
   * The range of the attack.
   * @todo UOM? feet, yards, meters?
   * @todo Should area be based on skill or weapon?
   */
  area: number;
  /**
   * The skills associated with the weapon.
   */
  actions: Skill[];
};

// the category of the weapon, used to determine equability, weakness and resistance.
export enum WeaponCategory {
  ARROW = 'Arrow',
  BOW = 'Bow',
  BLADE = 'Blade',
  BOOMERANG = 'Boomerang',
  BROAD_SWORD = 'Broadsword',
  BLUNT = 'Blunt',
  CLAW = 'Claw',
  CROSSBOW = 'Crossbow',
  DAGGER = 'Dagger',
  DART = 'Dart',
  FLAIL = 'Flail',
  HAMMER = 'Hammer',
  HAND_AXE = 'Hand Axe',
  HAND_SWORD = 'Hand Sword',
  HATCHET = 'Hatchet',
  KNIFE = 'Knife',
  MACE = 'Mace',
  POLEARM = 'Polearm',
  SHIELD = 'Shield',
  STAFF = 'Staff',
  SWORD = 'Sword',
  SYTHE = 'Scythe',
  SHIELD_SWORD = 'Shield Sword',
  RAPIER = 'Rapiers',
  TOME = 'Tome',
  TWO_HANDED_AXE = 'Two-handed Axe', // todo should this be based on weight and dependent on character
  WAND = 'Wand',
  UNARMED = 'Unarmed',
  UNKNOWN = 'Unknown',
  PENDANT = 'Pendant',
  DUAL_KYOKETSU_SHOGE = 'Dual Kyoketsu Shoge',
}
