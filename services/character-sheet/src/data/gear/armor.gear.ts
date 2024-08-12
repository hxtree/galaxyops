import {
  Slot,
  Attribute,
  EffectTag,
  Accessory,
} from '@galaxyops/character-sheet-contracts';

export namespace ArmorGear {
  export const STONEHEART_CHESTPLATE: Accessory = {
    description:
      "This formidable chestplate is made from a large triangular stone and secured to the left chest with four durable leather buckles. At first glance, it appears as a rugged piece of ordinary armor. However, once activated, the stone begins to pulse with a deep, rhythmic throb, and a triune-shaped engraving starts to glow a brilliant green. This activation triggers the chestplate’s ability to restart the wearer's heart, ensuring automatic revival should they fall in battle.",
    gearSlots: [Slot.BODY],
    name: 'Stoneheart Chestplate',
    purpose:
      'This chestplate combines formidable protection with an extraordinary hidden power. Its solid stone exterior and sturdy buckles provide excellent defense, while its magical properties offer a life-saving revival ability. Upon activation, it can revive the wearer by restarting their heart, delivering both exceptional defense and a crucial magical function.',
    removable: true,
  };

  export const GOLD_BRACELETS: Accessory = {
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
}
