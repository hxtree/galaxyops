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

  export const MASK_OF_POWER: Type = {
    description:
      'This mask reflects a desire for control, dominance, and authority in interactions.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Power',
    purpose: 'To seek influence and superiority.',
    removable: true,
  };

  export const MASK_OF_SUBMISSION: Type = {
    description:
      'This mask reflects a tendency to comply with the expectations and demands of others, often sacrificing personal desires.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Submission',
    purpose: 'To prioritize harmony and avoid conflict.',
    removable: true,
  };

  export const MASK_OF_WISDOM: Type = {
    description:
      'This mask embodies knowledge, insight, and intellect, sometimes leading to pretense or arrogance.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Wisdom',
    purpose: 'To appear wise and knowledgeable.',
    removable: true,
  };

  export const MASK_OF_PLEASURE: Type = {
    description:
      'This mask reflects a pursuit of hedonistic pleasures and indulgence in sensory experiences.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Pleasure',
    purpose: 'To seek immediate gratification.',
    removable: true,
  };

  export const MASK_OF_SINCERITY: Type = {
    description:
      'This mask represents genuineness and honesty, even if it means concealing certain truths or feelings.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Sincerity',
    purpose: 'To be perceived as trustworthy and authentic.',
    removable: true,
  };

  export const MASK_OF_LOVE: Type = {
    description:
      'This mask embodies affection, compassion, and empathy towards others.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Love',
    purpose: 'To establish meaningful emotional connections.',
    removable: true,
  };

  export const MASK_OF_MISERY: Type = {
    description:
      'This mask reflects a dwelling in negativity, suffering, and despair.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Misery',
    purpose: 'To embrace victimhood and hopelessness.',
    removable: true,
  };

  // Misc

  export const GOLD_BRACELETS: Type = {
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

  export const RED_SCRAF: Type = {
    description: 'A red scarf knitted.',
    gearSlots: [Slot.NECK],
    history: 'Knitted by Mother to keep Meeku warm',
    name: 'Red Scarf',
    removable: false,
  };

  export const COWHIDE_VEST: Type = {
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

  export const FUNERAL_JAR: Type = {
    description: 'A home-made funeral urn.',
    gearSlots: [Slot.WAIST],
    name: 'Funeral Jar',
    removable: false,
  };

  export const SWORD_SHEATH: Type = {
    description: 'A sheath designed to hold a broad sword.',
    gearSlots: [Slot.BACK],
    name: 'Sword Sheath',
  };

  export const MAGNETIC_GLOVES: Type = {
    description: 'Helps catch metal objects.',
    effects: [
      {
        modifier: SkillEffectModifier.ADD,
        skill: Skill.CATCHER_LV1,
        tags: [EffectTag.METAL],
      },
    ],
    gearSlots: [Slot.RIGHT_HAND, Slot.LEFT_HAND],
    name: 'Magnetic Gloves',
    purpose: "Particularly useful with regards to Traez's boomerang",
  };

  export const CATCHERS_MITT: Type = {
    description: 'Helps catch physical objects.',
    effects: [
      {
        modifier: SkillEffectModifier.ADD,
        skill: Skill.CATCHER_LV1,
        tags: [EffectTag.PHYSICAL],
      },
    ],
    gearSlots: [Slot.RIGHT_HAND, Slot.LEFT_HAND],
    name: 'Catchers Mitt',
  };

  export const TURBAN: Type = {
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
