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
  /**
   * Represents the concept of the "seven selves" in Kahlil Gibran's "The Madman."
   * These selves symbolize facets of human experience and consciousness:
   * - Physical: Body, sensations, desires.
   * - Egoic: Identity, validation.
   * - Rational: Reason, logic, understanding.
   * - Emotional: Feelings, intuition, decision-making.
   * - Spiritual: Transcendence, connection.
   * - Creative: Imagination, expression.
   * - Integrated: Balanced, holistic alignment.
   */

  export const MASK_OF_POWER: Accessory = {
    description:
      'This mask reflects a desire for control, dominance, and authority in interactions.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Power',
    purpose: 'To seek influence and superiority.',
    removable: true,
  };

  export const MASK_OF_SUBMISSION: Accessory = {
    description:
      'This mask reflects a tendency to comply with the expectations and demands of others, often sacrificing personal desires.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Submission',
    purpose: 'To prioritize harmony and avoid conflict.',
    removable: true,
  };

  export const MASK_OF_WISDOM: Accessory = {
    description:
      'This mask embodies knowledge, insight, and intellect, sometimes leading to pretense or arrogance.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Wisdom',
    purpose: 'To appear wise and knowledgeable.',
    removable: true,
  };

  export const MASK_OF_PLEASURE: Accessory = {
    description:
      'This mask reflects a pursuit of hedonistic pleasures and indulgence in sensory experiences.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Pleasure',
    purpose: 'To seek immediate gratification.',
    removable: true,
  };

  export const MASK_OF_SINCERITY: Accessory = {
    description:
      'This mask represents genuineness and honesty, even if it means concealing certain truths or feelings.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Sincerity',
    purpose: 'To be perceived as trustworthy and authentic.',
    removable: true,
  };

  export const MASK_OF_LOVE: Accessory = {
    description:
      'This mask embodies affection, compassion, and empathy towards others.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Love',
    purpose: 'To establish meaningful emotional connections.',
    removable: true,
  };

  export const MASK_OF_MISERY: Accessory = {
    description:
      'This mask reflects a dwelling in negativity, suffering, and despair.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Misery',
    purpose: 'To embrace victimhood and hopelessness.',
    removable: true,
  };

  // Misc

  export const GOLD_BRACELETS: Accessory = {
    description: 'Weighted gold bracelets that occupy both wrists meant',
    effects: [
      {
        add: Attribute.EXPERIENCE,
        quantity: '1.5%',
        tags: [EffectTag.PHYSICAL],
      },
      {
        quantity: '1000%',
        remove: Attribute.POWER,
        tags: [EffectTag.PHYSICAL],
      },
    ],
    gearSlots: [Slot.RIGHT_WRIST, Slot.LEFT_WRIST],
    name: 'Gold Bracelets',
    purpose: 'Suppress hidden power',
    removable: false,
  };

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
