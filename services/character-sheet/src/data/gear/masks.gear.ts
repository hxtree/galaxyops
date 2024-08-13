import {
  Slot,
  Accessory,
  SupplyCapacity,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';

export namespace MaskGear {
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
    capacity: SupplyCapacity.UNIQUE,
    description:
      'This mask reflects a desire for control, dominance, and authority in interactions.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Power',
    purpose: 'To seek influence and superiority.',
    removable: true,
  };

  export const MASK_OF_SUBMISSION: Accessory = {
    capacity: SupplyCapacity.UNIQUE,
    description:
      'This mask reflects a tendency to comply with the expectations and demands of others, often sacrificing personal desires.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Submission',
    purpose: 'To prioritize harmony and avoid conflict.',
    removable: true,
  };

  export const MASK_OF_WISDOM: Accessory = {
    capacity: SupplyCapacity.UNIQUE,
    description:
      'This mask embodies knowledge, insight, and intellect, sometimes leading to pretense or arrogance.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Wisdom',
    purpose: 'To appear wise and knowledgeable.',
    removable: true,
  };

  export const MASK_OF_PLEASURE: Accessory = {
    capacity: SupplyCapacity.UNIQUE,
    description:
      'This mask reflects a pursuit of hedonistic pleasures and indulgence in sensory experiences.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Pleasure',
    purpose: 'To seek immediate gratification.',
    removable: true,
  };

  export const MASK_OF_SINCERITY: Accessory = {
    capacity: SupplyCapacity.UNIQUE,
    description:
      'This mask represents genuineness and honesty, even if it means concealing certain truths or feelings.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Sincerity',
    purpose: 'To be perceived as trustworthy and authentic.',
    removable: true,
  };

  export const MASK_OF_LOVE: Accessory = {
    capacity: SupplyCapacity.UNIQUE,
    description:
      'This mask embodies affection, compassion, and empathy towards others.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Love',
    purpose: 'To establish meaningful emotional connections.',
    removable: true,
  };

  export const MASK_OF_MISERY: Accessory = {
    capacity: SupplyCapacity.UNIQUE,
    description:
      'This mask reflects a dwelling in negativity, suffering, and despair.',
    gearSlots: [Slot.HEAD],
    name: 'Mask of Misery',
    purpose: 'To embrace victimhood and hopelessness.',
    removable: true,
  };
}
