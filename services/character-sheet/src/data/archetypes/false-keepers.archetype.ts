import {
  HumanoidCreatureGearSlots,
  Archetype,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';

export namespace FalseKeepersArchetypes {
  export const DARUMA_NAKAMURA: Archetype = {
    alias: ['The Keeper of Doubt', 'Unknown', 'Wooden Doll'],
    backstory:
      'Daruma Nakamura appears first as a simple wooden doll. As the Keeper of Doubt, Daruma’s presence magnifies indecision, leaving those who seek their counsel entangled in their own uncertainties.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Daruma Nakamura',
  };

  export const MOTHER: Archetype = {
    alias: ['Keeper of Trauma', 'Lady of the Vase', 'Ashes', 'Dust'],
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
    traits: [
      {
        level: 1,
        skill: Skills.STRIKE_LV1,
      },
    ],
  };

  export const LADY_OF_THE_FOREST: Archetype = {
    alias: [
      'Keeper of the Gloom',
      'Lady of the Forest',
      'Glimmerless Sovereign',
      'Mistress of the Veiled Canopy',
    ],
    backstory:
      "A mysterious woman dwells deep within the forest, bound to its embrace and unable to leave its verdant canopy. She is akin to the roots that sustain a tree's crown. The woodland creatures, known as Gloom, devoted and loving, serve her wholly, their lives entwined with hers. She stands as a counterpart to the Lady of the Vase—like an unblemished vase that allows no cracks for light to enter. Though she knows nothing of any children her counterpart might have, she feels a profound, unfulfilled longing to care for them. Her cruelty, though palpable, stems from the misguided intent of a mother who, in her zeal to protect, often inflicts harm she believes is necessary for their greater good. It remains unknown whether she was created by virtue of entering the forest or if she has existed since time immemorial. Her actions, though harsh, are driven by an earnest, if flawed, desire to nurture and safeguard. To venture outside the forest is to break away from her protection, ceasing to give her life meaning and threatening her very existence.",
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Lady of the Forest',
    traits: [
      {
        level: 1,
        skill: Skills.LEECH_LV1,
      },
      {
        level: 1,
        skill: Skills.BARRIER_LV1,
      },
      {
        level: 1,
        skill: Skills.DARKNESS_LV1,
      },
      {
        level: 1,
        skill: Skills.RAGE_LV1,
      },
      {
        level: 1,
        skill: Skills.INTIMIDATE_LV1,
      },
    ],
  };
}
