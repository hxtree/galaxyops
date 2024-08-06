import {
  Effect,
  Operator,
  WeaponCategory,
  EffectTag,
  HumanoidCreatureGearSlots,
  Archetype,
} from '@galaxyops/character-sheet-contracts';
import { Disciplines } from '../disciplines';
import { Summon } from '../skills/summon.skill';
import { Outfits } from '../gear/outfit.gear';
import { Affiliations } from '../affiliations';

/**
 * Three Destroyers
 */
export namespace ThreeDestroyersArchetypes {
  export const OUERN_ONI: Archetype = {
    affiliation: [Affiliations.THE_DESTROYERS, Affiliations.SOLIDER_FORCES],
    alias: ['The Black Plague', 'Skyfall', 'Timestopper', 'Standstill'],
    backstory:
      'Often sang a song similar to Tumbalalaika to his sons when they were young. '
      + 'Rumored to be end cause the end of all existence. '
      + 'Whereabouts unknown. ',
    description: 'White hair. Has a prominent tattoo FTW',
    gearSlots: HumanoidCreatureGearSlots,
    history:
      'He is sealed inside the Floating Island waiting for his sons to release him. '
      + 'When his eyes are open only greater beings can move while the rest of the world stands still.'
      + 'He possess sight beyond sight; is able to preserve the world from afar'
      + 'He is responsible for battle his son win where time seems to stand still. ',
    name: 'Ouren',
    potentialDisciplines: [
      Disciplines.DESTROYER_OF_TIME,
      Disciplines.SOLIDER,
      Disciplines.XSOLIDER,
    ],
    surname: 'Oni',
    symbolizes: ['Dad', 'Father', 'Destroyer of Time'],
  };

  export const VALLON_ONI: Archetype = {
    affiliation: [
      Affiliations.THE_DESTROYERS,
      Affiliations.VALLONS_SEVEN,
      Affiliations.SOLIDER_FORCES,
    ],
    alias: ['Boss', 'Heartache'],
    backstory:
      'Grow up with Meeku. '
      + 'Left to become a Solider. '
      + 'Disappeared from Solider. ',
    description: 'White hair',
    gearSlots: HumanoidCreatureGearSlots,
    // 'Sets out in search of his father to freeze all time. ' +
    // 'Raises the floating island. ' +
    // 'Taints the Keeper of Heart. ' +
    // 'Unleashes Ouren. '
    history:
      'Women easily fall in love with Vallon. '
      + 'Vallon is not interested in love and those who love him have their heart painfully broken.'
      + "It's not his fault; it's an effect he has on others. "
      + 'The Devils love him because of the heartache he causes them. ',

    name: 'Vallon',

    potentialDisciplines: [
      Disciplines.DESTROYER_OF_HEART,
      Disciplines.SOLIDER,
      Disciplines.XSOLIDER,
    ],

    surname: 'Oni',
    symbolizes: ['Destroyer of Heart', 'Loveless Lover', 'Heart Wrench'],
    weaponCompatibility: [WeaponCategory.SWORD],
  };

  export const MEEKU_ONI: Archetype = {
    affiliation: [Affiliations.THE_DESTROYERS, Affiliations.SOLIDER_FORCES],
    alias: ['Kid', 'Brother'],
    backstory: 'A boy who has lost his past',
    gearSlots: HumanoidCreatureGearSlots,
    history:
      'Has the ability to break the fundamental laws of the world. '
      + 'Trapped by the observed logic. '
      + `He believes in the veil the ${Affiliations.THE_CATS} made is real. `
      + 'As a Berserker he uses a mask to break the veil and tap into his limitless ability',
    name: 'Meeku',
    potentialDisciplines: [
      Disciplines.DESTROYER_OF_LAW,
      Disciplines.SOLIDER,
      Disciplines.XSOLIDER,
      Disciplines.BERSERKER,
      Disciplines.ONI,
      Disciplines.HERO,
    ],
    potentialOutfits: [Outfits.TSHIRT_AND_JEANS],
    summonCompatibility: [Summon.VACHEL_LV1],
    surname: 'Oni',
    symbolizes: ['The One', 'Destroyer of Law'],
    traits: [
      {
        modifier: Effect.WEAK,
        operator: Operator.MULTIPLY,
        quantity: 1.2,
        // learns quickly
        tag: EffectTag.EXPERIENCE,
      },
    ],
    weaponCompatibility: [
      WeaponCategory.SHIELD_SWORD,
      WeaponCategory.SWORD,
      WeaponCategory.BROAD_SWORD,
    ],
  };
}
