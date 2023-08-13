export enum Slot {
  HEAD = 'Head',
  NECK = 'Neck',
  BACK = 'Back',
  TORSO = 'Torso',
  RIGHT_WRIST = 'Right Wrist',
  LEFT_WRIST = 'Left Wrist',
  RIGHT_HAND = 'Right Hand',
  LEFT_HAND = 'Left Hand',
  WAIST = 'Waist',
  LEGS = 'Legs',
  FEET = 'Feet',
  OUTFIT = 'Outfit',
  TAIL = 'Tail',
  SURFACE = 'Surface',
  CORE = 'Core',
  WINGS = 'Wings',
  BODY = 'Body',
}

export const HumanoidCreatureGearSlots = [
  Slot.HEAD,
  Slot.NECK,
  Slot.BACK,
  Slot.TORSO,
  Slot.RIGHT_WRIST,
  Slot.LEFT_WRIST,
  Slot.RIGHT_HAND,
  Slot.LEFT_HAND,
  Slot.WAIST,
  Slot.LEGS,
  Slot.FEET,
  Slot.OUTFIT,
];

export const QuadrupedalCreatureGearSlots = [Slot.HEAD, Slot.NECK, Slot.TORSO];

export const SerpentineCreatureGearSlots = [Slot.HEAD, Slot.TORSO, Slot.TAIL];

export const AmorphousCreatureGearSlots = [
  Slot.SURFACE, // For items attached to its surface
  Slot.CORE, // For items embedded in its core
];

export const AvianCreatureGearSlots = [
  Slot.HEAD,
  Slot.WINGS,
  Slot.BODY,
  Slot.LEGS,
];
