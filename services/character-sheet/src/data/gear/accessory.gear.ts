import { Attribute } from '../attribute';
import { EffectTable, SkillEffectModifier } from '../table.effect';
import { EffectTag } from '../tag.effect';
import { Skill } from '../skill';
import { Slot } from './slot';

/**
 * Accessory is an object or device that is not essential in itself
 * but adds to the beauty, convenience, or effects.
 */
export namespace Accessory {
  export type Type = {
    name: string;
    description: string;
    history?: string; // the history of an item must be discovered
    purpose?: string;
    gearSlots: Slot[];
    effects?: EffectTable;
    removable?: boolean; // whether player can remove via menus
  };

  export const GOLD_BRACELETS: Type = {
    name: 'Gold Bracelets',
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

  export const RED_SCRAF: Type = {
    name: 'Red Scarf',
    description: 'A red scarf knitted.',
    history: 'Knitted by Mother to keep Meeku warm',
    gearSlots: [Slot.NECK],
    removable: false,
  };

  export const COWHIDE_VEST: Type = {
    name: 'Cowhide Vest',
    effects: [
      {
        add: Attribute.DEFENSE,
        quantity: '+5',
        tags: [EffectTag.PHYSICAL],
      },
    ],
    description: 'A brown full-grain leather vest.',
    gearSlots: [Slot.TORSO],
  };

  export const FUNERAL_JAR: Type = {
    name: 'Funeral Jar',
    description: 'A home-made funeral urn.',
    gearSlots: [Slot.WAIST],
    removable: false,
  };

  export const SWORD_SHEATH: Type = {
    name: 'Sword Sheath',
    description: 'A sheath designed to hold a broad sword.',
    gearSlots: [Slot.BACK],
  };

  export const MAGNETIC_GLOVES: Type = {
    name: 'Magnetic Gloves',
    description: 'Helps catch metal objects.',
    // Particularly useful with regards to Traez’s boomerang
    effects: [
      {
        skill: Skill.CATCHER,
        modifier: SkillEffectModifier.ADD,
        tags: [EffectTag.METAL],
      },
    ],
    gearSlots: [Slot.RIGHT_HAND, Slot.LEFT_HAND],
  };

  export const CATCHERS_MITT: Type = {
    name: 'Catchers Mitt',
    description: 'Helps catch physical objects.',
    effects: [
      {
        skill: Skill.CATCHER,
        modifier: SkillEffectModifier.ADD,
        tags: [EffectTag.PHYSICAL],
      },
    ],
    gearSlots: [Slot.RIGHT_HAND, Slot.LEFT_HAND],
  };

  export const TURBAN: Type = {
    name: 'Turban',
    description: 'A cream colored silk turban',
    effects: [
      {
        add: Attribute.SPIRIT,
        quantity: '+5',
        tags: [EffectTag.PHYSICAL],
      },
    ],
    gearSlots: [Slot.HEAD],
  };
}
