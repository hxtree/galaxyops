import { Slot, Outfit } from '@galaxyops/character-sheet-contracts';

/**
 * Outfit
 *
 * One or more garments that comprise a single a set of clothing that can be warn at once.
 * For simplicity the entire collection of clothing is consider a outfit.
 * Characters can change out between for example swimsuits into casual wear.
 * Characters cannot change out bottom and tops individually.
 */
export namespace Outfits {
  export const T_SHIRT_AND_JEANS: Outfit = {
    description: 'White t-Shirt and denim jeans',
    gearSlots: [Slot.OUTFIT],
    name: 'T-Shirt and Jeans',
  };

  export const SWIMSUIT: Outfit = {
    description: 'Designed for swimming',
    gearSlots: [Slot.OUTFIT],
    name: 'Swimsuit',
    // bonus to swimming?
  };

  export const OFFICERS_UNIFORM: Outfit = {
    description: 'Black Embellished Tarry Coat',
    gearSlots: [Slot.OUTFIT],
    name: "Officer's Uniform",
  };

  export const KIMONO: Outfit = {
    description:
      'A wrapped-front garment with square sleeves and a rectangular body.',
    gearSlots: [Slot.OUTFIT],
    name: 'Kimono',
  };

  export const SERENITY_GOWN: Outfit = {
    description: 'An gown exuding tranquility, in a serene white tone.',
    gearSlots: [Slot.OUTFIT],
    name: 'Serenity Gown',
  };

  export const BUCKLED_SCRIBE_COAT: Outfit = {
    description:
      "A long coat with numerous decorative buckles, resembling a scribe's attire. It is dark blue and adorned with an intricate shoulder medal in yellow and red.",
    gearSlots: [Slot.OUTFIT],
    name: 'Buckled Scribe Coat',
  };

  export const REBEL_MECHANIC_UNIFORM: Outfit = {
    description:
      'A patchwork rebel outfit worn by mechanical engineers, made of linen and stitched together from various materials.',
    gearSlots: [Slot.OUTFIT],
    name: 'Rebel Mechanic Uniform',
  };

  export const SHINOBI_GARB: Outfit = {
    description:
      'Traditional shinobi garb, designed for stealth and agility. Made from lightweight, dark-colored linen with minimal adornments for maximum mobility and camouflage.',
    gearSlots: [Slot.OUTFIT],
    name: 'Shinobi Garb',
  };

  export const CEREMONIAL_ROBES: Outfit = {
    description:
      'Flowing, ornate robes worn during ceremonies and rituals. Made from luxurious fabrics and adorned with intricate embroidery and gold thread.',
    gearSlots: [Slot.OUTFIT],
    name: 'Ceremonial Robes',
  };

  export const FORMAL_ATTIRE: Outfit = {
    description:
      'A formal suit and tie, perfect for special occasions and events.',
    gearSlots: [Slot.OUTFIT],
    name: 'Formal Attire',
  };

  export const BATTLE_ARMOR: Outfit = {
    description:
      'Heavy armor designed for battle, made from reinforced steel plates and chainmail. Provides excellent protection but limits mobility.',
    gearSlots: [Slot.OUTFIT],
    name: 'Battle Armor',
  };

  export const RANGER_GARB: Outfit = {
    description:
      'Lightweight, durable clothing designed for rangers and scouts. Made from weather-resistant materials and earth tones for camouflage.',
    gearSlots: [Slot.OUTFIT],
    name: 'Ranger Garb',
  };

  export const WIZARD_ROBES: Outfit = {
    description:
      'Flowing, mystical robes worn by wizards and sorcerers. Made from shimmering silk and adorned with arcane symbols and gemstones.',
    gearSlots: [Slot.OUTFIT],
    name: 'Wizard Robes',
  };

  export const BATTLE_DRESS: Outfit = {
    description: 'A combat-ready dress made from durable, flexible materials.',
    gearSlots: [Slot.OUTFIT],
    name: 'Battle Dress',
  };

  export const GUILD_UNIFORM: Outfit = {
    description:
      'A uniform worn by members of a guild or organization. Made from high-quality materials and adorned with the guild emblem.',
    gearSlots: [Slot.OUTFIT],
    name: 'Guild Uniform',
  };

  export const TRAVELERS_GARB: Outfit = {
    description:
      'Sturdy, practical clothing designed for long journeys and adventures. Made from durable materials and equipped with plenty of pockets and pouches.',
    gearSlots: [Slot.OUTFIT],
    name: "Traveler's Garb",
  };

  export const NOBLE_ATTIRE: Outfit = {
    description:
      'Elegant, luxurious clothing worn by nobles and aristocrats. Made from fine fabrics and adorned with jewels and precious metals.',
    gearSlots: [Slot.OUTFIT],
    name: 'Noble Attire',
  };

  export const MONK_ROBES: Outfit = {
    description:
      'Simple, humble robes worn by monks and ascetics. Made from plain, unadorned fabric for meditation and contemplation.',
    gearSlots: [Slot.OUTFIT],
    name: 'Monk Robes',
  };

  export const BANDIT_ATTIRE: Outfit = {
    description:
      'Rugged clothing worn by bandits. Made from weathered fabrics and adorned with trinkets and accessories.',
    gearSlots: [Slot.OUTFIT],
    name: 'Bandit Attire',
  };
}
