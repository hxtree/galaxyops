import {Attribute} from '../attribute';
import {EffectTable, SkillffectModifier} from '../table.effect';
import {EffectTag} from '../tag.effect';
import * as Skill from '../skill';
import {Slot} from './slot';

/**
 * Accessory
 * Secondary items that are equippable
 * An object or device that is not essential in itself but adds to the beauty, convenience, etc.
 */

export enum Accessory {
  GOLD_BRACELETS = 'Gold Bracelets',
  RED_SCRAF = 'Red Scarf',
  COWHIDE_VEST = 'Cowhide Vest',
  FUNERAL_JAR = 'Funeral Jar',
  SWORD_SHEATH = 'Sword sheath',
  MAGNETIC_GLOVES = 'Magnetic Gloves',
  CATCHERS_MITT = 'Catchers Mitt',
}

export namespace AccessoryList {
  export type AccessoryType = {
    name: string;
    description: string;
    history?: string; // the history of an item must be discovered
    purpose?: string;
    gearSlots: Slot[];
    effects?: EffectTable;
    removable?: boolean; // whether player can remove via menus
  };

  export const GoldBracelets: AccessoryType = {
    name: Accessory.GOLD_BRACELETS,
    description: 'Weighted gold bracelets that occupy both wrists meant',
    purpose: 'Suppress hidden power',
    gearSlots: [Slot.RIGHT_WRIST, Slot.LEFT_WRIST],
    effects: [
      {
        add: Attribute.EXPERIENCE,
        quantity: '1.5%',
        tags: [EffectTag.PHYSICAL],
      },
      {
        remove: Attribute.POWER,
        quantity: '1000%',
        tags: [EffectTag.PHYSICAL],
      },
    ],
    removable: false,
  };

  export const RedScarf: AccessoryType = {
    name: Accessory.RED_SCRAF,
    description: 'A red scarf knitted.',
    history: 'Knitted by Meeku’s mother to keep him warm',
    gearSlots: [Slot.NECK],
    removable: false,
  };

  export const CowhideVest: AccessoryType = {
    name: Accessory.COWHIDE_VEST,
    effects: [
      {
        add: Attribute.DEFENSE,
        quantity: '+5',
        tags: [EffectTag.PHYSICAL],
      },
    ],
    description: 'A brown protective vest made out of cow hide.',
    gearSlots: [Slot.TORSO],
  };

  export const FuneralJar: AccessoryType = {
    name: 'Funeral Jar',
    description: 'a jar holding the ashes of the dead',
    gearSlots: [Slot.WAIST],
    removable: false,
  };

  export const SwordSheath: AccessoryType = {
    name: 'Sword sheath',
    description: 'a sheath meant to hold a broad sword.',
    gearSlots: [Slot.BACK],
  };

  export const MagenticGloves: AccessoryType = {
    name: 'Magnetic Gloves',
    description: 'Helps catch metal objects.',
    // Particularly useful with regards to Traez’s boomerang
    effects: [
      {
        skill: Skill.Passive.CATCHER,
        modifer: SkillffectModifier.ADD,
        tags: [EffectTag.METAL],
      },
    ],
    gearSlots: [Slot.RIGHT_HAND, Slot.LEFT_HAND],
  };

  export const CatchersMitt: AccessoryType = {
    name: 'Catchers Mitt',
    description: 'Helps catch physical objects.',
    effects: [
      {
        skill: Skill.Passive.CATCHER,
        modifer: SkillffectModifier.ADD,
        tags: [EffectTag.PHYSICAL],
      },
    ],
    gearSlots: [Slot.RIGHT_HAND, Slot.LEFT_HAND],
  };
}
