import * as Skill from '../skill/weapon.skill';

/**
 * Weapon is a tag applied to a weapon export const and is used to determine the damage type of the weapon.
 * It is used to determine equability, weakness and resistance.
 * For example, a character may be immune to unarmed attacks therefore boxing gloves would deal no damage.
 */
export enum WeaponCategory {
  ARROW = 'Arrow',
  BOW = 'Bow',
  BLADE = 'Blade',
  BOOMERANG = 'Boomerange',
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

export enum Weapon {
  ASMINS_AXE = "Asmin's Axe",
  GREAT_WAIL = 'Great Wail',
  JUSTICE = 'Justice',
  KEYSTONE = 'Keystone',
  ASSUALTER = 'Assaulter',
  STRIKER = 'Striker',
  ENERGY_BREAKER = 'Energy Breaker',
  STONE_BREAKER = 'Stone Breaker',
  THE_MAN_SLAYER = 'The Man Slayer',
  HEROS_BLADE = "Hero's Blade",
  SWORD_OF_LAWZON = 'Sword of Lawzon',
  TINY_TIMBER = 'Tiny Timber',
  CADUCEUS = 'Caduceus',
  ANTEDILUVIAN = 'Antediluvian',
  ETERNAL_FOLD = 'Eternal Fold',
  GOLD_RUSH = 'Gold Rush',
  KINGS_BLADE = 'Kings Blade',
  RUSTY_RAPIER = 'Rusty Rapier',
  MYSTERIOUS_PENDANT = 'Mysterious Pendant',
  PEACEKEEPER = 'PeaceKeeper',
  TROUBLE_MAKER = 'Trouble Maker',
  STANDARD_ISSUE = 'Standard Issue',
  GREED = 'Greed',
  LIBERTY = 'Liberty',
  MONARCH = 'Monarch',
  REGRET = 'Regret',
  VICEROY = 'Viceroy',
  VIOLATED = 'Violated',
}

export namespace Weapon {
  export type WeaponType = {
    // the name of the weapon, used to identify the weapon.
    name: string;
    // the category of the weapon, used to determine equability, weakness and resistance.
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
    area: number;
    actions: Skill.Weapon[]; // could also be Ward, Protect, etc. for Pendents :?
  };

  /**
   * Axes
   * Axes are an extremely powerful branch of weapons that take a fierce amount of strength to wield but the damage provided by them is usually worth it.
   * Gear Slots – Right Hand AND Left Hand
   * Can be used by: Gunter
   */
  export const AsminsAze: WeaponType = {
    name: Weapon.ASMINS_AXE,
    category: WeaponCategory.TWO_HANDED_AXE,
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.SLASH],
  };

  export const GreatWail: WeaponType = {
    name: Weapon.GREAT_WAIL,
    category: WeaponCategory.TWO_HANDED_AXE,
    description:
      'A large axe that can break through bone and makes a loud sound when swung',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.SLASH],
  };

  export const Justice: WeaponType = {
    name: Weapon.JUSTICE,
    category: WeaponCategory.TWO_HANDED_AXE,
    history: "Gunter's trademark axe",
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.SLASH],
  };

  export const Keystone: WeaponType = {
    name: Weapon.KEYSTONE,
    category: WeaponCategory.TWO_HANDED_AXE,
    description:
      'A giant axe made of from a giant keystone with an iron bar stuck through it.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.SLASH],
  };

  /**
   * Boomerangs
   * Boomerangs – Boomerangs provide both a melee (slash) and a ranged (throw) attack.
   * If a boomerang is thrown make sure that it is not going to be caught or else you will be left without a weapon. If the weapon is caught then it maybe retrieved by defeating the enemy who caught it.
   * Gear Slots – Right Hand AND Left Hand
   * Can be used by: Traez
   */

  export const Assaulter: WeaponType = {
    name: Weapon.ASSUALTER,
    category: WeaponCategory.BOOMERANG,
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STRIKE],
  };

  export const Striker: WeaponType = {
    name: Weapon.STRIKER,
    category: WeaponCategory.BOOMERANG,
    description: ' An extremely fast and deadly boomerang.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STRIKE],
  };

  /**
   * Shieldsword
   * They can also be used as a shield (Guard).
   *
   * Gear Slots – Right Hand AND Left Hand
   */
  export const EnergyBreaker: WeaponType = {
    name: Weapon.ENERGY_BREAKER,
    category: WeaponCategory.SHIELD_SWORD,
    description:
      'An extremely large and heavy weapon that absorbs and releases energy.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STRIKE],
    // SPEED_DECREASE 1d5
    // FIRE 2d5
  };

  export const StoneBreaker: WeaponType = {
    name: Weapon.STONE_BREAKER,
    category: WeaponCategory.SHIELD_SWORD,
    description:
      'An extremely large and heavy weapon with a special guilloche handle for grip.',
    history: 'It was reportedly used by Galax to bring peace.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STRIKE],
    // Increases wait time
    // Increases recovery time
    // Increases damage
    // Increases experience earned.
  };

  export const TheManSlayer: WeaponType = {
    name: Weapon.THE_MAN_SLAYER,
    category: WeaponCategory.SHIELD_SWORD,
    description:
      'A giant ancient hellish looking blade. Its handle bares a dogtooth design.',
    history: 'It was reportedly used by Galax to bring peace.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STRIKE],
  };

  /**
   * Broadsword
   * A heavy sword with a wide blade
   * They require two hands to wield, and difficult to maneuver yet have a strong attack.
   *
   * Gear Slots – Right Hand AND Left Hand
   */
  export const HerosBlade: WeaponType = {
    name: Weapon.HEROS_BLADE,
    category: WeaponCategory.BROAD_SWORD,
    description:
      'A mystical blade that is destine to fall into the hands of the next true hero.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STRIKE],
  };

  export const SwordOfLawzon: WeaponType = {
    name: Weapon.SWORD_OF_LAWZON,
    category: WeaponCategory.BROAD_SWORD,
    description: 'A dirty simple solid blade forged of harden steel.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STRIKE],
  };

  /**
   * Staff
   * Staffs are weapons designed as a focusing point for magical users to amplify and release their spells.
   * They can also be used to deal melee damage.
   */
  export const TinyTimber: WeaponType = {
    name: Weapon.TINY_TIMBER,
    category: WeaponCategory.STAFF,
    description: 'A basic staff given to Magi in training',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STRIKE],
  };

  export const Caduceus: WeaponType = {
    name: Weapon.CADUCEUS,
    category: WeaponCategory.STAFF,
    description:
      'A staff with two serpents wrapped around it base and two wings that expand from its top.',
    history: 'An ancient wand said to be carried by the messenger of God.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STRIKE],
  };

  export const Antediluvian: WeaponType = {
    name: Weapon.ANTEDILUVIAN,
    category: WeaponCategory.STAFF,
    description: 'An acient wooden staff',
    history: 'An ancient weapon used to slay devils of the old world',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STRIKE],
  };

  /**
   * Rapiers
   * Rapiers are tremendously well crafted swords that have a narrow width.
   * Gear Slots – Right Hand OR Left Hand (only equipped one at a time)
   * Can be used by: Gaali
   */

  export const EternalFold: WeaponType = {
    name: Weapon.ETERNAL_FOLD,
    category: WeaponCategory.RAPIER,
    history:
      'A sword that has been folded by generations of blacksmiths to create a flawless steel sword',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STAB],
  };

  export const GoldRush: WeaponType = {
    name: Weapon.GOLD_RUSH,
    category: WeaponCategory.RAPIER,
    description:
      'A golden color sword that looks more fitting on a wall then a battlefield.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STAB],
  };

  export const KingsBlade: WeaponType = {
    name: Weapon.KINGS_BLADE,
    category: WeaponCategory.RAPIER,
    description: 'Whomever posses this blade is King of Rudner.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STAB],
  };

  export const RustyRapier: WeaponType = {
    name: Weapon.RUSTY_RAPIER,
    category: WeaponCategory.RAPIER,
    description: 'A rusty sword. Chance of poisoning target.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [Skill.Weapon.STAB],
  };

  /**
   * Pendants
   * Pendants – Pendants are Magical amplifiers that often increase the user’s stats and grants them new actions.
   * It takes two hands to be able to harness the power of the pendant.
   * Gear Slots – Necklace AND DISABLED (Right Hand AND Left Hand)
   * Can be used by: Loomee
   */

  export const MysteriousPendant: WeaponType = {
    name: Weapon.MYSTERIOUS_PENDANT,
    category: WeaponCategory.PENDANT,
    // Grants Ward
    power: 100,
    speed: 30,
    area: 1,
    actions: [],
  };

  export const PeaceKeeper: WeaponType = {
    name: Weapon.PEACEKEEPER,
    category: WeaponCategory.PENDANT,
    power: 100,
    speed: 30,
    area: 1,
    actions: [],
  };

  export const TroubleMaker: WeaponType = {
    name: Weapon.TROUBLE_MAKER,
    category: WeaponCategory.PENDANT,
    power: 100,
    speed: 30,
    area: 1,
    actions: [],
  };

  /**
   * Dual Kyoketsu Shoge
   * A weapon that can reach ranged targets.
   */

  export const StandardIssue: WeaponType = {
    name: Weapon.STANDARD_ISSUE,
    category: WeaponCategory.DUAL_KYOKETSU_SHOGE,
    description: 'The common Dual Kyoketsu Shoge given to fascist.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [],
  };

  /**
   * Knives
   * knives are small one handed weapons that are extremely quick to maneuver and deadly.
   * Gear Slots – Right Hand OR Left Hand
   * Can be used by: Malace
   */

  // which one is Wisp’s Knife?

  export const Greed: WeaponType = {
    name: Weapon.GREED,
    category: WeaponCategory.KNIFE,
    description:
      'A intricate, powerful weapon that is capable of stealing the life from its target.',
    history: 'This weapon belonged to Wisp',
    power: 100,
    speed: 30,
    area: 1,
    actions: [],
  };

  export const Liberty: WeaponType = {
    name: Weapon.LIBERTY,
    category: WeaponCategory.KNIFE,
    power: 100,
    speed: 30,
    area: 1,
    actions: [],
  };

  export const Monarch: WeaponType = {
    name: Weapon.MONARCH,
    category: WeaponCategory.KNIFE,
    description:
      'A brilliantly designed insect looking blade with a sharp and deadly tip that is dripping with poison.',
    power: 100,
    speed: 30,
    area: 1,
    actions: [],
  };

  export const Regret: WeaponType = {
    name: Weapon.REGRET,
    category: WeaponCategory.KNIFE,
    power: 100,
    speed: 30,
    area: 1,
    actions: [],
  };

  export const Viceroy: WeaponType = {
    name: Weapon.VICEROY,
    category: WeaponCategory.KNIFE,
    description:
      'A brilliantly designed insect looking blade with a sharp and deadly tip.',
    // The viceroy looks almost identical to the monarch',
    // Chance of causing Fear on contact when used with Monarch
    // Chance of poisoning enemy on contact
    power: 100,
    speed: 30,
    area: 1,
    actions: [],
  };

  export const Violated: WeaponType = {
    name: Weapon.VIOLATED,
    category: WeaponCategory.KNIFE,
    // Weapon Absorbs the previous monsters type and uses it for the next attack.
    // This weapon must be used to slay the most poisonous monster
    // to get a poisonous tipped dagger and slay another monster
    power: 100,
    speed: 30,
    area: 1,
    actions: [],
  };

  /**
   * Shields
   */
  // Buckler
}
