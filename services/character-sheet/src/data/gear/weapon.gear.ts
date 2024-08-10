import { Weapon, WeaponCategory } from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';

/**
 * Weapon is a tag applied to a weapon export const and is used to determine
 * the damage type of the weapon.
 * It is used to determine equability, weakness and resistance.
 * For example, a character may be immune to unarmed attacks therefore boxing
 * gloves would deal no damage.
 */
export namespace Weapons {
  /**
   * Axes
   * Axes are an extremely powerful branch of weapons that take
   * a fierce amount of strength to wield but the damage provided by them is usually worth it.
   * Gear Slots – Right Hand AND Left Hand
   */
  export const ASMINS_AXE: Weapon = {
    actions: [Skills.SLASH_LV1],
    area: 1,
    category: WeaponCategory.TWO_HANDED_AXE,
    name: "Asmin's Aze",
    power: 100,
    speed: 30,
  };

  export const GREAT_WAIL: Weapon = {
    actions: [Skills.SLASH_LV1],
    area: 1,
    category: WeaponCategory.TWO_HANDED_AXE,
    description:
      'A large axe that can break through bone and makes a loud sound when swung',
    name: 'Great Wail',
    power: 100,
    speed: 30,
  };

  export const JUSTICE: Weapon = {
    actions: [Skills.SLASH_LV1],
    area: 1,
    category: WeaponCategory.TWO_HANDED_AXE,
    history: "Gunter's trademark axe",
    name: 'Justice',
    power: 100,
    speed: 30,
  };

  export const KEYSTONE: Weapon = {
    actions: [Skills.SLASH_LV1],
    area: 1,
    category: WeaponCategory.TWO_HANDED_AXE,
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

  export const ASSAULTER: Weapon = {
    actions: [Skills.STRIKE_LV1],
    area: 1,
    category: WeaponCategory.BOOMERANG,
    name: 'Assaulter',
    power: 100,
    speed: 30,
  };

  export const STRIKER: Weapon = {
    actions: [Skills.STRIKE_LV1],
    area: 1,
    category: WeaponCategory.BOOMERANG,
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
  export const ENERGY_BREAKER: Weapon = {
    actions: [Skills.BLOCK_LV1, Skills.STRIKE_LV1],
    area: 1,
    category: WeaponCategory.SHIELD_SWORD,
    description:
      'An extremely large and heavy weapon that absorbs and releases energy.',
    name: 'EnergyBreaker',
    power: 100,
    speed: 30,
    // SPEED_DECREASE 1d5
    // FIRE 2d5
  };

  export const STONE_BREAKER: Weapon = {
    actions: [Skills.BLOCK_LV1, Skills.STRIKE_LV1],
    area: 1,
    category: WeaponCategory.SHIELD_SWORD,
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

  export const THE_MAN_SLAYER: Weapon = {
    actions: [Skills.BLOCK_LV1, Skills.STRIKE_LV1],
    area: 1,
    category: WeaponCategory.SHIELD_SWORD,
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
  export const HEROS_BLADE: Weapon = {
    actions: [Skills.STRIKE_LV1],
    area: 1,
    category: WeaponCategory.BROAD_SWORD,
    description:
      'A mystical blade that is destine to fall into the hands of the next true hero.',
    name: "Hero's Blade",
    power: 100,
    speed: 30,
  };

  export const SWORD_OF_LAWZON: Weapon = {
    actions: [Skills.STRIKE_LV1, Skills.SLASH_LV3],
    area: 1,
    category: WeaponCategory.BROAD_SWORD,
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
  export const TINY_TIMBER: Weapon = {
    actions: [Skills.STRIKE_LV1],
    area: 1,
    category: WeaponCategory.STAFF,
    description: 'A basic staff given to Magi in training',
    name: 'Tiny Timber',
    power: 100,
    speed: 30,
  };

  export const CADUCEUS: Weapon = {
    actions: [Skills.STRIKE_LV1],
    area: 1,
    category: WeaponCategory.STAFF,
    description:
      'A staff with two serpents wrapped around it base and two wings that expand from its top.',
    history: 'An ancient wand said to be carried by the messenger of God.',
    name: 'Caduceus',
    power: 100,
    speed: 30,
  };

  export const ANTEDILUVIAN: Weapon = {
    actions: [Skills.STRIKE_LV1],
    area: 1,
    category: WeaponCategory.STAFF,
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

  export const ETERNAL_FOLD: Weapon = {
    actions: [Skills.STAB_LV1],
    area: 1,
    category: WeaponCategory.RAPIER,
    history:
      'A sword that has been folded by generations of blacksmiths to create a flawless steel sword',
    name: 'Eternal Fold',
    power: 100,
    speed: 30,
  };

  export const GOLD_RUSH: Weapon = {
    actions: [Skills.STAB_LV1],
    area: 1,
    category: WeaponCategory.RAPIER,
    description:
      'A golden color sword that looks more fitting on a wall then a battlefield.',
    name: 'Gold Rush',
    power: 100,
    speed: 30,
  };

  export const KINGS_BLADE: Weapon = {
    actions: [Skills.STAB_LV1],
    area: 1,
    category: WeaponCategory.RAPIER,
    description: 'Whomever posses this blade is King of Rudner.',
    name: "King's Blade",
    power: 100,
    speed: 30,
  };

  export const RUSTY_RAPIER: Weapon = {
    actions: [Skills.STAB_LV1],
    area: 1,
    category: WeaponCategory.RAPIER,
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

  export const MYSTERIOUS_PENDANT: Weapon = {
    actions: [Skills.WARD_LV1, Skills.CURE_LV1],
    area: 1,
    category: WeaponCategory.PENDANT,
    name: 'Mysterious Pendant',
    power: 100,
    speed: 30,
  };

  export const PEACEKEEPER: Weapon = {
    actions: [Skills.LULLABY_LV1, Skills.PROTECT_LV1],
    area: 1,
    category: WeaponCategory.PENDANT,
    name: 'Peace Keeper',
    power: 100,
    speed: 30,
  };

  export const TROUBLE_MAKER: Weapon = {
    actions: [Skills.BLOOD_LUST_LV1, Skills.DARKNESS_LV1],
    area: 1,
    category: WeaponCategory.PENDANT,
    name: 'Trouble Maker',
    power: 100,
    speed: 30,
  };

  /**
   * Dual Kyoketsu Shoge
   * A weapon that can reach ranged targets.
   */

  export const STANDARD_ISSUE: Weapon = {
    actions: [Skills.STRIKE_LV1],
    area: 1,
    category: WeaponCategory.DUAL_KYOKETSU_SHOGE,
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

  export const FOLDING_KNIFE: Weapon = {
    actions: [Skills.SLASH_LV1],
    area: 1,
    category: WeaponCategory.KNIFE,
    name: 'Folding Knife',
    power: 10,
    speed: 18,
  };

  export const GREED: Weapon = {
    actions: [Skills.SLASH_LV3, Skills.ABSORB_LV1],
    area: 1,
    category: WeaponCategory.KNIFE,
    description:
      'A intricate, powerful weapon that is capable of stealing the life from its target.',
    history: 'This weapon belonged to Wisp',
    name: 'Greed',
    power: 100,
    speed: 30,
  };

  export const LIBERTY: Weapon = {
    actions: [Skills.SLASH_LV1, Skills.CLEAVE_LV1],
    area: 1,
    category: WeaponCategory.KNIFE,
    name: 'Liberty',
    power: 100,
    speed: 30,
  };

  export const MONARCH: Weapon = {
    actions: [Skills.SLASH_LV1],
    area: 1,
    category: WeaponCategory.KNIFE,
    description:
      'A brilliantly designed insect looking blade with a sharp and deadly tip that is dripping with poison.',
    name: 'Monarch',
    power: 100,
    speed: 30, // TODO may be poison slash or somehow add change of poison to action?
  };

  export const REGRET: Weapon = {
    actions: [Skills.SLASH_LV1],
    area: 1,
    category: WeaponCategory.KNIFE,
    name: 'Regret',
    power: 100,
    speed: 30,
  };

  export const VICEROY: Weapon = {
    actions: [Skills.SLASH_LV1],
    area: 1,
    category: WeaponCategory.KNIFE,
    description:
      'A brilliantly designed insect looking blade with a sharp and deadly tip.',
    name: 'Viceroy',
    // The viceroy looks almost identical to the monarch',
    // Chance of causing Fear on contact when used with Monarch
    // Chance of poisoning enemy on contact
    power: 100,
    speed: 30,
  };

  export const VIOLATED: Weapon = {
    actions: [Skills.SLASH_LV1],
    area: 1,

    category: WeaponCategory.KNIFE,

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
  export const BUCKLER: Weapon = {
    actions: [Skills.BLOCK_LV1, Skills.PARRY_LV1],
    area: 1,
    category: WeaponCategory.SHIELD,
    name: 'Buckler',
    power: 100,
    speed: 30,
  };
}
