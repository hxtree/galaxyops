import {
  HumanoidCreatureGearSlots,
  Archetype,
} from '@galaxyops/character-sheet-contracts';

export namespace UnsortedArchetypes {
  export const DARUMA_NAKAMURA: Archetype = {
    alias: ['Unknown', 'Wooden Doll'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Daruma',
  };

  export const MOTHER: Archetype = {
    alias: ['Lady of the Vase', 'Ashes', 'Dust'],
    backstory:
      'She is known only as Mother. '
      + 'She often can be found carrying things back and forth from the garden. '
      + 'She is mother to both Vallon and Meeku. '
      + 'Mother knits Meeku a red scarf. '
      + 'Mother dies and is turned to ashes during act one. '
      + "Meeku carries Mother's ashes around his waist with him in a gourd. "
      + 'There is only one mother in the whole game. ',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Mother',
  };
}
