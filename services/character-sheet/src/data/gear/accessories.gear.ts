import {
  Slot,
  SkillEffectModifier,
  EffectTable,
  Attribute,
  EffectTag,
  Accessory,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';

/**
 * Accessory is an object or device that is not essential in itself
 * but adds to the beauty, convenience, or effects.
 */
export namespace Accessories {
  export const RED_SCARF: Accessory = {
    description: 'A red scarf knitted.',
    gearSlots: [Slot.NECK],
    history: 'Knitted by Mother to keep Meeku warm',
    name: 'Red Scarf',
    removable: false,
  };

  export const COWHIDE_VEST: Accessory = {
    description: 'A brown full-grain leather vest.',
    effects: [
      {
        add: Attribute.DEFENSE,
        quantity: '+5',
        tags: [EffectTag.PHYSICAL],
      },
    ],
    gearSlots: [Slot.TORSO],
    name: 'Cowhide Vest',
  };

  export const FUNERAL_JAR: Accessory = {
    description: 'A home-made funeral urn.',
    gearSlots: [Slot.WAIST],
    name: 'Funeral Jar',
    removable: false,
  };

  export const SWORD_SHEATH: Accessory = {
    description: 'A sheath designed to hold a broad sword.',
    gearSlots: [Slot.BACK],
    name: 'Sword Sheath',
  };

  export const MAGNETIC_GLOVES: Accessory = {
    description: 'Helps catch metal objects.',
    effects: [
      {
        modifier: SkillEffectModifier.ADD,
        skill: Skills.CATCHER_LV1,
        tags: [EffectTag.METAL],
      },
    ],
    gearSlots: [Slot.RIGHT_HAND, Slot.LEFT_HAND],
    name: 'Magnetic Gloves',
    purpose: "Particularly useful with regards to Traez's boomerang",
  };

  export const CATCHERS_MITT: Accessory = {
    description: 'Helps catch physical objects.',
    effects: [
      {
        modifier: SkillEffectModifier.ADD,
        skill: Skills.CATCHER_LV1,
        tags: [EffectTag.PHYSICAL],
      },
    ],
    gearSlots: [Slot.RIGHT_HAND, Slot.LEFT_HAND],
    name: 'Catchers Mitt',
  };

  export const TURBAN: Accessory = {
    description: 'A cream colored silk turban',
    effects: [
      {
        add: Attribute.SPIRIT,
        quantity: '+5',
        tags: [EffectTag.PHYSICAL],
      },
    ],
    gearSlots: [Slot.HEAD],
    name: 'Turban',
  };
}
