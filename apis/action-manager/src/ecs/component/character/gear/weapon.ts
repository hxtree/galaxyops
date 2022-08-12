/**
 * Weapon is a tag applied to a weapon class and is used to determine the damage type of the weapon.
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

export interface Weapon {
  // the name of the weapon, used to identify the weapon.
  name: string;
  // the category of the weapon, used to determine equability, weakness and resistance.
  category: WeaponCategory;
  // the immediately evident appearance of the weapon
  description?: string;
  // the history of the weapon, can be revealed by a special ability.
  history?: string | null;
}

/**
 * Axes
 * Axes are an extremely powerful branch of weapons that take a fierce amount of strength to wield but the damage provided by them is usually worth it.
 * Gear Slots – Right Hand AND Left Hand
 * Can be used by: Gunter
 */
class AsminsAze implements Weapon {
  name: "Asmin's Axe";
  category: WeaponCategory.TWO_HANDED_AXE;
}

class GreatWail implements Weapon {
  name: 'Great Wail';
  category: WeaponCategory.TWO_HANDED_AXE;
  description: 'A large axe that can break through bone and makes a loud sound when swung';
}

class Justice implements Weapon {
  name: 'Justice';
  category: WeaponCategory.TWO_HANDED_AXE;
  history: "Gunter's trademark axe";
}

class Keystone implements Weapon {
  name: 'Keystone';
  category: WeaponCategory.TWO_HANDED_AXE;
  description: 'A giant axe made of from a giant keystone with an iron bar stuck through it.';
}

/**
 * Boomerangs
 * Boomerangs – Boomerangs provide both a melee (slash) and a ranged (throw) attack.
 * If a boomerang is thrown make sure that it is not going to be caught or else you will be left without a weapon. If the weapon is caught then it maybe retrieved by defeating the enemy who caught it.
 * Gear Slots – Right Hand AND Left Hand
 * Can be used by: Traez
 */

class Assaulter implements Weapon {
  name: 'Assaulter';
  category: WeaponCategory.BOOMERANG;
}
class Striker implements Weapon {
  name: 'Striker';
  category: WeaponCategory.BOOMERANG;
  description: ' An extremely fast and deadly boomerang.';
}

/**
 * Shieldsword
 * They can also be used as a shield (Guard).
 *
 * Gear Slots – Right Hand AND Left Hand
 */
class EnergyBreaker implements Weapon {
  name: 'Energy Breaker';
  category: WeaponCategory.SHIELD_SWORD;
  description: string =
    'An extremely large and heavy weapon that absorbs and releases energy.';

  // SPEED_DECREASE 1d5
  // FIRE 2d5
}

class StoneBreaker implements Weapon {
  name: 'Stone Breaker';
  category: WeaponCategory.SHIELD_SWORD;
  description: 'An extremely large and heavy weapon with a special guilloche handle for grip.';
  history: 'It was reportedly used by Galax to bring peace.';

  // Increases wait time
  // Increases recovery time
  // Increases damage
  // Increases experience earned.
}

class TheManSlayer implements Weapon {
  name: 'The Man Slayer';
  category: WeaponCategory.SHIELD_SWORD;
  description: 'A giant ancient hellish looking blade. Its handle bares a dogtooth design.';
  history: 'It was reportedly used by Galax to bring peace.';
}

/**
 * Broadsword
 * A heavy sword with a wide blade
 * They require two hands to wield, and difficult to maneuver yet have a strong attack.
 *
 * Gear Slots – Right Hand AND Left Hand
 */
class HerosBlade implements Weapon {
  name: "Hero's Blade";
  category: WeaponCategory.BROAD_SWORD;
  description: 'A mystical blade that is destine to fall into the hands of the next true hero.';
}

class SwordOfLawzon implements Weapon {
  name: 'Sword of Lawzon';
  category: WeaponCategory.BROAD_SWORD;
  description: 'A dirty simple solid blade forged of harden steel.';
}

/**
 * Staff
 * Staffs are weapons designed as a focusing point for magical users to amplify and release their spells.
 * They can also be used to deal melee damage.
 */
class TinyTimer implements Weapon {
  name: 'Tiny Timer';
  category: WeaponCategory.STAFF;
  description: 'A basic staff given to Magi in training';
}

class Caduceus implements Weapon {
  name: 'Caduceus';
  category: WeaponCategory.STAFF;
  description: 'A staff with two serpents wrapped around it base and two wings that expand from its top.';
  history: 'An ancient wand said to be carried by the messenger of God.';
}

class Antediluvian implements Weapon {
  name: 'Antediluvian';
  category: WeaponCategory.STAFF;
  description: 'An acient wooden staff';
  history: 'An ancient weapon used to slay devils of the old world';
}

/**
 * Rapiers
 * Rapiers are tremendously well crafted swords that have a narrow width.
 * Gear Slots – Right Hand OR Left Hand (only equipped one at a time)
 * Can be used by: Gaali
 */

class EternalFold implements Weapon {
  name: 'Eternal Fold';
  category: WeaponCategory.RAPIER;
  history: 'A sword that has been folded by generations of blacksmiths to create a flawless steel sword';
}

class GoldRush implements Weapon {
  name: 'Gold Rush';
  category: WeaponCategory.RAPIER;
  description: 'A golden color sword that looks more fitting on a wall then a battlefield.';
}

class KingsBlade implements Weapon {
  name: 'Kings Blade';
  category: WeaponCategory.RAPIER;
  description: 'Whomever posses this blade is King of Rudner.';
}

class RustyRapier implements Weapon {
  name: 'Rusty Rapier';
  category: WeaponCategory.RAPIER;
  description: 'A rusty sword. Chance of poisoning target.';
}

/**
 * Pendants
 * Pendants – Pendants are Magical amplifiers that often increase the user’s stats and grants them new actions.
 * It takes two hands to be able to harness the power of the pendant.
 * Gear Slots – Necklace AND DISABLED (Right Hand AND Left Hand)
 * Can be used by: Loomee
 */

class MysteriousPendant implements Weapon {
  name: 'Mysterious Pendant';
  category: WeaponCategory.PENDANT;
  // Grants Ward
}

class PeaceKeeper implements Weapon {
  name: 'PeaceKeeper';
  category: WeaponCategory.PENDANT;
}

class TroubleMaker implements Weapon {
  name: 'Trouble Maker';
  category: WeaponCategory.PENDANT;
}

/**
 * Dual Kyoketsu Shoge
 * A weapon that can reach ranged targets.
 */

class StandardIssue implements Weapon {
  name: 'Standard Issue';
  category: WeaponCategory.DUAL_KYOKETSU_SHOGE;
  description: 'The common Dual Kyoketsu Shoge given to fascist.';
}

/**
 * Knives
 * knives are small one handed weapons that are extremely quick to maneuver and deadly.
 * Gear Slots – Right Hand OR Left Hand
 * Can be used by: Malace
 */

// which one is Wisp’s Knife?

class Greed implements Weapon {
  name: 'Greed';
  category: WeaponCategory.KNIFE;
  description =
    'A intricate, powerful weapon that is capable of stealing the life from its target.';
  history = 'This weapon belonged to Wisp';
}

class Liberty implements Weapon {
  name: 'Liberty';
  category: WeaponCategory.KNIFE;
}

class Monarch implements Weapon {
  name: 'Monarch';
  category: WeaponCategory.KNIFE;
  description: 'A brilliantly designed insect looking blade with a sharp and deadly tip that is dripping with poison.';
}

class Regret implements Weapon {
  name: 'Regret';
  category: WeaponCategory.KNIFE;
}

class Viceroy implements Weapon {
  name: 'Viceroy';
  category: WeaponCategory.KNIFE;
  description: 'A brilliantly designed insect looking blade with a sharp and deadly tip.';
  // The viceroy looks almost identical to the monarch';
  // Chance of causing Fear on contact when used with Monarch
  // Chance of poisoning enemy on contact
}

class Violated implements Weapon {
  name: 'Violated';
  category: WeaponCategory.KNIFE;
  // Weapon Absorbs the previous monsters type and uses it for the next attack.
  // This weapon must be used to slay the most poisonous monster
  // to get a poisonous tipped dagger and slay another monster
}

/**
 * Shields
 */
// Buckler
