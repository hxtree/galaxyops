import { Skill } from './skill';

export type Weapon = {
  name: string;
  category: WeaponCategory;
  // the immediately evident appearance of the weapon
  description?: string;
  // the history of the weapon, can be revealed by a special ability.
  history?: string | null;
  // used to determine damage per swing / etc
  power: number;
  // used to determine rate of use/fire
  speed: number;

  // dps could be calculated but would require character
  // but pendents don't do damage

  // the range of the attack
  // todo UOM? feet, yards, meters?
  // TODO should area be based on skill or weapon?
  area: number;
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
