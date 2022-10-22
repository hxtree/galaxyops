import {Attribute} from './attribute';
import {EffectTable, SkillffectModifier} from './table.effect';
import {EffectTag} from './tag.effect';
import {Catcher} from './passive.skill';
import {GearSlot} from './gear';

export interface Accessory {
  name: string;
  description: string;
  history?: string; // the history of an item must be discovered
  purpose: string;
  gearSlots: Array<GearSlot>;
  effects?: EffectTable;
  removable: boolean; // whether player can remove via menus
}

/**
 * Accessories
 * Seondary items that are equippable
 */
export enum Accessories {
  GOLD_BRACELETS = 'Gold Bracelets',
  RED_SCRAF = 'Red Scarf',
  COWHIDE_VEST = 'Cowhide Vest',
  FUNERAL_JAR = 'Funeral Jar',
  SWORD_SHEATH = 'Sword sheath',
  MAGNETIC_GLOVES = 'Magnetic Gloves',
  CATCHERS_MITT = 'Catchers Mitt',
}

export class GoldBracelets {
  name: Accessories.GOLD_BRACELETS;
  description: 'Weighted gold bracelets that occupy both wrists meant';
  purpose: 'Suppress hidden power';
  gearSlots: [GearSlot.RIGHT_WRIST, GearSlot.LEFT_WRIST];
  effects: [
    {
      add: Attribute.EXPERIENCE;
      quanity: '1.5%';
      tags: [EffectTag.PHYSICAL];
    },
    {
      remove: Attribute.POWER;
      quanity: '1000%';
      tags: [EffectTag.PHYSICAL];
    },
  ];
  removable: false;
}

export class RedScarf {
  name: Accessories.RED_SCRAF;
  description: 'A red scarf knitted.';
  history: 'Knitted by Meeku’s mother to keep him warm';
  gearSlots: [GearSlot.NECK];
  removable: false;
}

export class CowhideVest {
  name: Accessories.COWHIDE_VEST;
  effects: [
    {
      add: Attribute.DEFENSE;
      quanity: '+5';
      tags: [EffectTag.PHYSICAL];
    },
  ];
  description: 'A brown protective vest made out of cow hide.';
  gearSlots: [GearSlot.TORSO];
}

export class FuneralJar {
  name: 'Funeral Jar';
  description: 'a jar holding the ashes of the dead';
  gearSlots: [GearSlot.WAIST];
  removable: false;
}

export class SwordSheath {
  name: 'Sword sheath';
  description: 'a sheath meant to hold a broad sword.';
  gearSlots: [GearSlot.BACK];
}

export class MagenticGloves {
  name: 'Magnetic Gloves';
  description: 'Helps catch metal objects.';
  // Particularly useful with regards to Traez’s boomerang
  effects: [
    {
      skill: Catcher;
      modifer: SkillffectModifier.ADD;
      tags: [EffectTag.METAL];
    },
  ];
  gearSlots: [GearSlot.RIGHT_HAND, GearSlot.LEFT_HAND];
}

export class CatchersMitt {
  name: 'Catchers Mitt';
  effects: [
    {
      skill: Catcher;
      modifer: SkillffectModifier.ADD;
      tags: [EffectTag.PHYSICAL];
    },
  ];
  gearSlots: [GearSlot.RIGHT_HAND, GearSlot.LEFT_HAND];
}
