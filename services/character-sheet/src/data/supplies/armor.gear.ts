import {
  Slot,
  Attribute,
  EffectTag,
  Accessory,
  SupplyCapacity,
} from '@galaxyops/character-sheet-contracts';

export namespace ArmorGear {
  export const STONEHEART_CHESTPLATE: Accessory = {
    capacity: SupplyCapacity.UNIQUE,
    description:
      "This formidable chestplate is made from a large triangular stone and secured to the left chest with four durable leather buckles. At first glance, it appears as a rugged piece of ordinary armor. However, once activated, the stone begins to pulse with a deep, rhythmic throb, and a triune-shaped engraving starts to glow a brilliant green. This activation triggers the chestplate’s ability to restart the wearer's heart, ensuring automatic revival should they fall in battle.",
    gearSlots: [Slot.TORSO],
    name: 'Stoneheart Chestplate',
    purpose:
      'This chestplate combines formidable protection with an extraordinary hidden power. Its solid stone exterior and sturdy buckles provide excellent defense, while its magical properties offer a life-saving revival ability. Upon activation, it can revive the wearer by restarting their heart, delivering both exceptional defense and a crucial magical function.',
    removable: true,
  };

  export const SUN_AND_MOON_PAULDRONS: Accessory = {
    capacity: SupplyCapacity.UNIQUE,
    description:
      'These intricately designed pauldrons feature a sun motif on the right shoulder and a moon motif on the left. The sun pauldron is crafted from gleaming gold and adorned with fiery rubies, while the moon pauldron is made of shimmering silver and studded with icy sapphires. The pauldrons are connected by a chain of delicate links, symbolizing the eternal dance between light and darkness.',
    effects: [
      {
        add: Attribute.DEFENSE,
        quantity: '10',
        tags: [EffectTag.PHYSICAL],
      },
      {
        add: Attribute.DEFENSE,
        quantity: '5',
        tags: [EffectTag.PSYCHIC],
      },
    ],
    gearSlots: [Slot.TORSO],
    name: 'Sun and Moon Pauldrons',
    purpose:
      'These pauldrons offer enhanced physical defense and magical resistance, providing protection against both physical and magical threats. The sun and moon motifs symbolize the balance between light and darkness, reflecting the wearer’s ability to navigate the dualities of existence.',
    removable: true,
  };

  export const GOLD_BRACELETS: Accessory = {
    capacity: SupplyCapacity.UNIQUE,
    description:
      'Weighted gold bracelets that occupy both wrists an act as arm guards',
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

  export const CHAIN_MAIL: Accessory = {
    capacity: SupplyCapacity.UNIQUE,
    description:
      'A flexible armor made of small metal rings linked together in a pattern to form a mesh',
    effects: [
      {
        add: Attribute.DEFENSE,
        quantity: '20',
        tags: [EffectTag.PHYSICAL],
      },
    ],
    gearSlots: [Slot.TORSO],
    name: 'Chain Mail',
    purpose: 'Physical defense',
    removable: true,
  };
}
