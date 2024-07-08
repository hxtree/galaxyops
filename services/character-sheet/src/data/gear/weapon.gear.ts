import { Skill, SkillType } from '../skill';

/**
 * Weapon is a tag applied to a weapon export const and is used to determine
 * the damage type of the weapon.
 * It is used to determine equability, weakness and resistance.
 * For example, a character may be immune to unarmed attacks therefore boxing
 * gloves would deal no damage.
 */
export namespace Weapon {
  export type Type = {
    name: string;
    category: Category;
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
    actions: SkillType[];
  };

  // the category of the weapon, used to determine equability, weakness and resistance.
  export enum Category {
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

  /**
   * Axes
   * Axes are an extremely powerful branch of weapons that take
   * a fierce amount of strength to wield but the damage provided by them is usually worth it.
   * Gear Slots – Right Hand AND Left Hand
   */
  export const ASMINS_AXE: Type = {
    actions: [Skill.SLASH_LV1],
    area: 1,
    category: Category.TWO_HANDED_AXE,
    name: "Asmin's Aze",
    power: 100,
    speed: 30,
  };

  export const GREAT_WAIL: Type = {
    actions: [Skill.SLASH_LV1],
    area: 1,
    category: Category.TWO_HANDED_AXE,
    description:
      'A large axe that can break through bone and makes a loud sound when swung',
    name: 'Great Wail',
    power: 100,
    speed: 30,
  };

  export const JUSTICE: Type = {
    actions: [Skill.SLASH_LV1],
    area: 1,
    category: Category.TWO_HANDED_AXE,
    history: "Gunter's trademark axe",
    name: 'Justice',
    power: 100,
    speed: 30,
  };

  export const KEYSTONE: Type = {
    actions: [Skill.SLASH_LV1],
    area: 1,
    category: Category.TWO_HANDED_AXE,
    description:
      'A giant axe made of from a giant keystone with an iron bar stuck through it.',
    name: 'Keystone',
    power: 100,
    speed: 30,
  };

  /**
   * Boomerangs
   * Boomerangs – Boomerangs provide both a melee (slash) and a ranged (throw)
   * attack.
   * If a boomerang is thrown make sure that it is not going to be caught or
   * else you will be left without a weapon. If the weapon is caught then it
   * maybe retrieved by defeating the enemy who caught it.
   * Gear Slots – Right Hand AND Left Hand
   */

  export const ASSAULTER: Type = {
    actions: [Skill.STRIKE_LV1],
    area: 1,
    category: Category.BOOMERANG,
    name: 'Assaulter',
    power: 100,
    speed: 30,
  };

  export const STRIKER: Type = {
    actions: [Skill.STRIKE_LV1],
    area: 1,
    category: Category.BOOMERANG,
    description: ' An extremely fast and deadly boomerang.',
    name: 'Striker',
    power: 100,
    speed: 30,
  };

  /**
   * Shield-sword
   * They can also be used as a shield (Guard).
   *
   * Gear Slots – Right Hand AND Left Hand
   */
  export const ENERGY_BREAKER: Type = {
    actions: [Skill.BLOCK_LV1, Skill.STRIKE_LV1],
    area: 1,
    category: Category.SHIELD_SWORD,
    description:
      'An extremely large and heavy weapon that absorbs and releases energy.',
    name: 'EnergyBreaker',
    power: 100,
    speed: 30,
    // SPEED_DECREASE 1d5
    // FIRE 2d5
  };

  export const STONE_BREAKER: Type = {
    actions: [Skill.BLOCK_LV1, Skill.STRIKE_LV1],
    area: 1,
    category: Category.SHIELD_SWORD,
    description:
      'An extremely large and heavy weapon with a special guilloche handle for grip.',
    history: 'It was reportedly used by Galax to bring peace.',
    name: 'Stone Breaker',
    power: 100,
    speed: 30,
    // Increases wait time
    // Increases recovery time
    // Increases damage
    // Increases experience earned.
  };

  export const THE_MAN_SLAYER: Type = {
    actions: [Skill.BLOCK_LV1, Skill.STRIKE_LV1],
    area: 1,
    category: Category.SHIELD_SWORD,
    description:
      'A giant ancient hellish looking blade. Its handle bares a dogtooth design.',
    history: 'It was reportedly used by Galax to bring peace.',
    name: 'The Man Slayer',
    power: 100,
    speed: 30,
  };

  /**
   * Broadsword
   * A heavy sword with a wide blade
   * They require two hands to wield, and difficult to maneuver yet have a strong attack.
   *
   * Gear Slots – Right Hand AND Left Hand
   */
  export const HEROS_BLADE: Type = {
    actions: [Skill.STRIKE_LV1],
    area: 1,
    category: Category.BROAD_SWORD,
    description:
      'A mystical blade that is destine to fall into the hands of the next true hero.',
    name: "Hero's Blade",
    power: 100,
    speed: 30,
  };

  export const SWORD_OF_LAWZON: Type = {
    actions: [Skill.STRIKE_LV1],
    area: 1,
    category: Category.BROAD_SWORD,
    description: 'A dirty simple solid blade forged of harden steel.',
    name: 'Sword of Lawzon',
    power: 100,
    speed: 30,
  };

  /**
   * Staff
   * Staffs are weapons designed as a focusing point for magical users to
   * amplify and release their spells.
   * They can also be used to deal melee damage.
   */
  export const TINY_TIMBER: Type = {
    actions: [Skill.STRIKE_LV1],
    area: 1,
    category: Category.STAFF,
    description: 'A basic staff given to Magi in training',
    name: 'Tiny Timber',
    power: 100,
    speed: 30,
  };

  export const CADUCEUS: Type = {
    actions: [Skill.STRIKE_LV1],
    area: 1,
    category: Category.STAFF,
    description:
      'A staff with two serpents wrapped around it base and two wings that expand from its top.',
    history: 'An ancient wand said to be carried by the messenger of God.',
    name: 'Caduceus',
    power: 100,
    speed: 30,
  };

  export const ANTEDILUVIAN: Type = {
    actions: [Skill.STRIKE_LV1],
    area: 1,
    category: Category.STAFF,
    description: 'An ancient wooden staff',
    history: 'An ancient weapon used to slay devils of the old world',
    name: 'Antediluvian',
    power: 100,
    speed: 30,
  };

  /**
   * Rapiers
   * Rapiers are tremendously well crafted swords that have a narrow width.
   * Gear Slots – Right Hand OR Left Hand (only equipped one at a time)
   */

  export const ETERNAL_FOLD: Type = {
    actions: [Skill.STAB_LV1],
    area: 1,
    category: Category.RAPIER,
    history:
      'A sword that has been folded by generations of blacksmiths to create a flawless steel sword',
    name: 'Eternal Fold',
    power: 100,
    speed: 30,
  };

  export const GOLD_RUSH: Type = {
    actions: [Skill.STAB_LV1],
    area: 1,
    category: Category.RAPIER,
    description:
      'A golden color sword that looks more fitting on a wall then a battlefield.',
    name: 'Gold Rush',
    power: 100,
    speed: 30,
  };

  export const KINGS_BLADE: Type = {
    actions: [Skill.STAB_LV1],
    area: 1,
    category: Category.RAPIER,
    description: 'Whomever posses this blade is King of Rudner.',
    name: "King's Blade",
    power: 100,
    speed: 30,
  };

  export const RUSTY_RAPIER: Type = {
    actions: [Skill.STAB_LV1],
    area: 1,
    category: Category.RAPIER,
    description: 'A rusty sword. Chance of poisoning target.',
    name: 'Rusty Rapier',
    power: 100,
    speed: 30,
  };

  /**
   * Pendants
   * Pendants – Pendants are Magical amplifiers that often increase the user’s
   * stats and grants them new actions.
   * It takes two hands to be able to harness the power of the pendant.
   * Gear Slots – Necklace AND DISABLED (Right Hand AND Left Hand)
   */

  export const MYSTERIOUS_PENDANT: Type = {
    actions: [Skill.WARD_LV1, Skill.CURE_LV1],
    area: 1,
    category: Category.PENDANT,
    name: 'Mysterious Pendant',
    power: 100,
    speed: 30,
  };

  export const PEACEKEEPER: Type = {
    actions: [Skill.LULLABY_LV1, Skill.PROTECT_LV1],
    area: 1,
    category: Category.PENDANT,
    name: 'Peace Keeper',
    power: 100,
    speed: 30,
  };

  export const TROUBLE_MAKER: Type = {
    actions: [Skill.BLOOD_LUST_LV1, Skill.DARKNESS_LV1],
    area: 1,
    category: Category.PENDANT,
    name: 'Trouble Maker',
    power: 100,
    speed: 30,
  };

  /**
   * Dual Kyoketsu Shoge
   * A weapon that can reach ranged targets.
   */

  export const STANDARD_ISSUE: Type = {
    actions: [Skill.STRIKE_LV1],
    area: 1,
    category: Category.DUAL_KYOKETSU_SHOGE,
    description: 'The common Dual Kyoketsu Shoge given to fascist.',
    name: 'Standard Issue',
    power: 100,
    speed: 30,
  };

  /**
   * Knives
   * knives are small one handed weapons that are extremely quick to maneuver and deadly.
   * Gear Slots – Right Hand OR Left Hand
   */

  // which one is Wisp’s Knife?

  export const GREED: Type = {
    actions: [Skill.SLASH_LV1, Skill.ABSORB_LV1],
    area: 1,
    category: Category.KNIFE,
    description:
      'A intricate, powerful weapon that is capable of stealing the life from its target.',
    history: 'This weapon belonged to Wisp',
    name: 'Greed',
    power: 100,
    speed: 30,
  };

  export const LIBERTY: Type = {
    actions: [Skill.SLASH_LV1, Skill.CLEAVE_LV1],
    area: 1,
    category: Category.KNIFE,
    name: 'Liberty',
    power: 100,
    speed: 30,
  };

  export const MONARCH: Type = {
    actions: [Skill.SLASH_LV1],
    area: 1,
    category: Category.KNIFE,
    description:
      'A brilliantly designed insect looking blade with a sharp and deadly tip that is dripping with poison.',
    name: 'Monarch',
    power: 100,
    speed: 30, // TODO may be poison slash or somehow add change of poison to action?
  };

  export const REGRET: Type = {
    actions: [Skill.SLASH_LV1],
    area: 1,
    category: Category.KNIFE,
    name: 'Regret',
    power: 100,
    speed: 30,
  };

  export const VICEROY: Type = {
    actions: [Skill.SLASH_LV1],
    area: 1,
    category: Category.KNIFE,
    description:
      'A brilliantly designed insect looking blade with a sharp and deadly tip.',
    name: 'Viceroy',
    // The viceroy looks almost identical to the monarch',
    // Chance of causing Fear on contact when used with Monarch
    // Chance of poisoning enemy on contact
    power: 100,
    speed: 30,
  };

  export const VIOLATED: Type = {
    actions: [Skill.SLASH_LV1],
    area: 1,

    category: Category.KNIFE,

    name: 'Violated',
    // Weapon Absorbs the previous monsters type and uses it for the next attack.
    // This weapon must be used to slay the most poisonous monster
    // to get a poisonous tipped dagger and slay another monster
    power: 100,
    speed: 30,
  };

  /**
   * Shields
   */
  export const BUCKLER: Type = {
    actions: [Skill.BLOCK_LV1, Skill.PARRY_LV1],
    area: 1,
    category: Category.SHIELD,
    name: 'Buckler',
    power: 100,
    speed: 30,
  };
}
