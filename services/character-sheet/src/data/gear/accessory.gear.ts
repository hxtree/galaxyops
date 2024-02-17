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
    name: 'Mask of Power',
    description:
      'This mask reflects a desire for control, dominance, and authority in interactions.',
    purpose: 'To seek influence and superiority.',
    gearSlots: [Slot.HEAD],
    removable: true,
  };

  export const MASK_OF_SUBMISSION: Type = {
    name: 'Mask of Submission',
    description:
      'This mask reflects a tendency to comply with the expectations and demands of others, often sacrificing personal desires.',
    purpose: 'To prioritize harmony and avoid conflict.',
    gearSlots: [Slot.HEAD],
    removable: true,
  };

  export const MASK_OF_WISDOM: Type = {
    name: 'Mask of Wisdom',
    description:
      'This mask embodies knowledge, insight, and intellect, sometimes leading to pretense or arrogance.',
    purpose: 'To appear wise and knowledgeable.',
    gearSlots: [Slot.HEAD],
    removable: true,
  };

  export const MASK_OF_PLEASURE: Type = {
    name: 'Mask of Pleasure',
    description:
      'This mask reflects a pursuit of hedonistic pleasures and indulgence in sensory experiences.',
    purpose: 'To seek immediate gratification.',
    gearSlots: [Slot.HEAD],
    removable: true,
  };

  export const MASK_OF_SINCERITY: Type = {
    name: 'Mask of Sincerity',
    description:
      'This mask represents genuineness and honesty, even if it means concealing certain truths or feelings.',
    purpose: 'To be perceived as trustworthy and authentic.',
    gearSlots: [Slot.HEAD],
    removable: true,
  };

  export const MASK_OF_LOVE: Type = {
    name: 'Mask of Love',
    description:
      'This mask embodies affection, compassion, and empathy towards others.',
    purpose: 'To establish meaningful emotional connections.',
    gearSlots: [Slot.HEAD],
    removable: true,
  };

  export const MASK_OF_MISERY: Type = {
    name: 'Mask of Misery',
    description:
      'This mask reflects a dwelling in negativity, suffering, and despair.',
    purpose: 'To embrace victimhood and hopelessness.',
    gearSlots: [Slot.HEAD],
    removable: true,
  };

  // Misc

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
    purpose: "Particularly useful with regards to Traez's boomerang",
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
