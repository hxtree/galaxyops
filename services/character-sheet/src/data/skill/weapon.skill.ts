import { Attribute } from '../attribute';
import { EffectTag } from '../tag.effect';
import { MenuSlot } from '../menu-slot';
import { SkillType } from '.';

/**
 * Weapon Skill
 *
 * Weapon skills are granted based on the equipped item and the character's ability to use weapons.
 * Each skill is directly related to the simple use of the player's equipped weapon.
 * They are categorized as Command Menu Actions and can be used in-game.
 * These skills are always located in the first slot of the Basic Command Menu Actions.
 *
 * Each weapon skill has a level
 *
 * e.g. Block lv1
 */
export namespace Weapon {
  export const BLOCK: SkillType = {
    name: 'Block',
    description: 'Stop incoming attacks.',
    effect: [],
    menuSlot: MenuSlot.ATTACK,
  };

  export const PARRY: SkillType = {
    name: 'Parry',
    description: 'Ward off incoming attacks with a countermove.',
    effect: [],
    menuSlot: MenuSlot.ATTACK,
  };

  export const SLASH: SkillType = {
    name: 'Slash',
    description: 'Attack with a blade.',
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+2',
        tags: [EffectTag.PHYSICAL],
      },
    ],
    menuSlot: MenuSlot.ATTACK,
  };

  export const STRIKE: SkillType = {
    name: 'Strike',
    description: 'Execute a sudden attack with a blade.',
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+2',
        tags: [EffectTag.PHYSICAL],
      },
    ],
    menuSlot: MenuSlot.ATTACK,
  };

  export const STAB: SkillType = {
    name: 'Stab',
    description: 'Perform a forward striking motion with a blade.',
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+2',
        tags: [EffectTag.PHYSICAL],
      },
    ],
    menuSlot: MenuSlot.ATTACK,
  };

  export const CHOP: SkillType = {
    name: 'Chop',
    description: 'Execute a downward motion with a blade.',
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+2',
        tags: [EffectTag.PHYSICAL],
      },
    ],
    menuSlot: MenuSlot.ATTACK,
  };

  export const CLEAVE: SkillType = {
    name: 'Cleave',
    description: 'Perform a slashing technique.',
    effect: [
      {
        remove: Attribute.LIFE,
        quantity: '1d6+2',
        tags: [EffectTag.PHYSICAL],
      },
    ],
    menuSlot: MenuSlot.ATTACK,
  };

  // "15","Cleave lv2",,"13",,"13"

  // export const Tech
  // Weapon Tech
  // Slash – (stamina)

  // "60","Restoring Aura","Allies withing 5 foot radius slowly gain life.
  // 1/2 of Spirit per/sec","59",,"59"
  // "61","Resurrect","Cures Lifeless","60",,"60"
  // "62","Cure",,"61",,"61"
  // "63","Heal","Restore life to one target","62",,"62"
  // "64","Heal All","Restore life to all nearby targets","63",,"63"

  // "73","Bake","Create Consumables from Recipes","72",,"72"
  // "74","Improved Dodging",,"73",,"73"
  // "75","Quick"," Increase movement speed","74",,"74"
  // "76","Darkness"," Decrease the area that your opponent can see.","75",,"75"
  // "77","Fighter","Double Strike","76",,"76"
  // "78","Block","Block enemies with wielding item. Preventing Critical Attacks
  // from doing additional damage","77",,"77"

  // "49","Cheer","Targets Spirit increases by 10% for a duration.","48",,"48"
  // "50","Support","The most powerful status bonus","49",,"49"
  // "51","Bluff","Deceive a character.","50",,"50"
  // "52","Sense Bluff","Detect if someone is lying (indicated
  // by a icon when character is talking)","51",,"51"

  // "53","Wrathful Blow","If a player holds down the button for a basic attack
  // move they will do additional physical damage at the cost of Life to the
  // Berserker. The longer they hold down the button the more Life will be
  // taken in the exchange.","52",,"52"
  // "54","Undying Pride","Gain Rage twice as fast when attacked.","53",,"53"
  // "3","Scout","Break away from party","1",,"1"
  // "4","Scan",,"2",,"2"
  // "5","Search","Look for items","3",,"3"
  // "6","Guard","Protect ally from attack","4",,"4"
  // "7","Protect","same as guard?","5",,"5"
  // "8","Focus",,"6",,"6"
  // "9","Parry","Attack someones attack to block","7",,"7"
  // "10","Order/Command",,"8",,"8"
  // "11","Formation","Get in predefined organization","9",,"9"
  // "13","Liberate",,"11",,"11"
  // "14","Disobey","Block a command","12",,"12"
  // "16","Protect","Guard an ally","14",,"14"
  // "17","Desolate",,"15",,"15"
  // "18","Rage",,"16",,"16"
  // "24","Charm, Chill",,"22",,"22"
  // "25","Quake",,"23",,"23"
  // "26","Blizzard",,"24",,"24"
  // "28","Frost",,"25",,"25"
  // "29","Chill",,"26",,"26"
  // "30","Absorb","Absorb the targets life","27",,"27"
  // "31","Drain",,"28",,"28"
  // "33","Dismiss",,"30",,"30"

  // "34","Command",,"31",,"31"
  // "35",,,"32",,"32"

  // "39","Doom","Inflicts Doomed","36",,"36"
}
