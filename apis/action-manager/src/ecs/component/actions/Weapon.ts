import {Attribute} from '../character/Attribute';
import {EffectTag} from '../character/EffectTag';
import {Action} from './Action';

/**
 * Weapon Actions
 * Weapon actions are removed or added based on the equipped item and characters ability to use weapon.
 * Weapon actions directly related to simple use of the players equipped weapon.
 * Weapon actions are a type of Command Menu Action which means they can be used in game.
 * They are always located in the first slot of the Basic Command Menu Actions.
 */
export interface WeaponAction extends Action {}

export class Parry implements WeaponAction {
  name: 'Parry';
  description: 'Ward off incoming attack with a countermove.';
  effect: [];
}

export class Slash implements WeaponAction {
  name: 'Slash';
  description: 'Attack with a blade.';
  effect: [
    {
      remove: Attribute.LIFE;
      quanity: '1d6+2';
      tags: [EffectTag.PHYSICAL];
    },
  ];
}

export class Strike implements WeaponAction {
  name: 'Strike';
  description: 'Attack with a sudden effect with a blade.';
  effect: [
    {
      remove: Attribute.LIFE;
      quanity: '1d6+2';
      tags: [EffectTag.PHYSICAL];
    },
  ];
}

export class Stab implements WeaponAction {
  name: 'Stab';
  description: 'Attach with a forward striking motion with a blade.';
  effect: [
    {
      remove: Attribute.LIFE;
      quanity: '1d6+2';
      tags: [EffectTag.PHYSICAL];
    },
  ];
}

export class Chop implements WeaponAction {
  name: 'Chop';
  description: 'Attack with a downward motion with a blade.';
  effect: [
    {
      remove: Attribute.LIFE;
      quanity: '1d6+2';
      tags: [EffectTag.PHYSICAL];
    },
  ];
}

export class Cleave implements WeaponAction {
  name: 'Cleave';
  description: 'A slash technique.';
  effect: [
    {
      remove: Attribute.LIFE;
      quanity: '1d6+2';
      tags: [EffectTag.PHYSICAL];
    },
  ];
}
// "15","Cleave lv2",,"13",,"13"

// Weapon Actions (Slot 1)
// export class Tech
// Weapon Tech
// Slash – (stamina)

// "55","Gluttonous Desire","Comsumer food items twice as fast.","54",,"54"
// "56","Blood Lust","Speed in battle increased.","55",,"55"
// "57","Greedy Intent","Gain 5% more experience than party.","56",,"56"
// "58","Sloth Composure","Blows taken when not doing action are halved","57",,"57"
// "59","Envious of Combat","Gain more rage from watching combat.","58",,"58"
// "60","Restoring Aura","Allies withing 5 foot radius slowly gain life. 1/2 of Spirit per/sec","59",,"59"
// "61","Resurrect","Cures Lifeless","60",,"60"
// "62","Cure",,"61",,"61"
// "63","Heal","Restore life to one target","62",,"62"
// "64","Heal All","Restore life to all nearby targets","63",,"63"
// "65","Cheer","Targets Spirit increases by 10% for a duration","64",,"64"
// "66","Support",,"65",,"65"
// "67","Hope","The most powerful status bonus","66",,"66"
// "68","Inspire","Increases target Drive gauge","67",,"67"
// "69","Strike",,"68",,"68"

// "73","Bake","Create Consumables from Recipes","72",,"72"
// "74","Improved Dodging",,"73",,"73"
// "75","Quick"," Increase movement speed","74",,"74"
// "76","Darkness"," Decrease the area that your opponent can see.","75",,"75"
// "77","Fighter","Double Strike","76",,"76"
// "78","Block","Block enemies with wielding item. Preventing Crital Attacks from doing additional damage","77",,"77"
// "79","Cleave",,"78",,"78"
// "80","Oni"," Become engulfed in a blood thirsty rage that multiplies your power but drains spirit. If character stays in Oni too long they will go Berserk.","79",,"79"
// "81","True Oni","Become engulfed in a more powerful blood thirsty rage that multiplies your power but drains spirit. If character stays in Oni too long they will go Berserk. Player must have very little life left and max Drive in order to perform.","80",,"80"

// "49","Cheer","Targets Spirit increases by 10% for a duration.","48",,"48"
// "50","Support","The most powerful status bonus","49",,"49"
// "51","Bluff","Deceive a character.","50",,"50"
// "52","Sense Bluff","Detect if someone is lying (indicated by a icon when character is talking)","51",,"51"

// "53","Wraftful Blow","If a player holds down the button for a basic attack move they will do additional physical damage at the cost of Life to the Berserker. The longer they hold down the button the more Life will be taken in the exchange.","52",,"52"
// "54","Undying Pride","Gain Rage twice as fast when attacked.","53",,"53"
// "3","Scout","Break away from party","1",,"1"
// "4","Scan",,"2",,"2"
// "5","Search","Look for items","3",,"3"
// "6","Guard","Protect ally from attack","4",,"4"
// "7","Protect","same as guard?","5",,"5"
// "8","Focus",,"6",,"6"
// "9","Parry","Attack someones attack to block","7",,"7"
// "10","Order/Command",,"8",,"8"
// "11","Formation","Get in predifend organization","9",,"9"
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
// "30","Absorb","Aborb the targets life","27",,"27"
// "31","Drain",,"28",,"28"
// "33","Dismiss",,"30",,"30"

// "34","Command",,"31",,"31"
// "35",,,"32",,"32"

// "39","Doom","Inflicts Doomed","36",,"36"

// "42","Craft","Combined multiple items into one.","39",,"39"
// "45","Reflect","Send enemies moves back at them.","44",,"44"
// "46","Lullaby","Send enemies moves back at them.","45",,"45"
// "47","Light","Keep enemies from moving for a duration of time.– chance Puts enemy to sleep. Stops rage","46",,"46"
// "48","Protection"," Create a barrier around a ally","47",,"47"

// "43","Ward","Keep enemies from getting close. (Good for when party is powering up)","42",,"42"
// "44","Seal","Keep enemies from getting close. (Good for when party is powering up)","43",,"43"

// "12","Boast/Rally/Inspire","Increase allies determination","10",,"10"

// "1","Command","telling a part member what to do.","40",,"40"
