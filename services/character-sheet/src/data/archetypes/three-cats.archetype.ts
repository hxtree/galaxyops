import {
  WeaponCategory,
  QuadrupedalCreatureGearSlots,
  Archetype,
} from '@galaxyops/character-sheet-contracts';
import { Disciplines } from '../disciplines';
import { Summon } from '../skills/summon.skill';
import { Affiliations } from '../affiliations';

/**
 * Three Cats
 */
export namespace ThreeCatsArchetypes {
  export const MISCHIEVOUS_PIEBALD: Archetype = {
    affiliation: [Affiliations.THE_CATS],
    alias: ['Keeper of Law', 'Mischief', 'Tux', "Schrodinger's cat"],
    backstory:
      'Governs the logical of this realm. '
      + 'He can choose whether a wall is hard or one can put their hand through it. '
      + 'He can choose whether the rain falls downward or upward. '
      + 'His power is based on speech, he must blink speak a rule and blink again in order to invoke it. '
      + 'He can change the rules but is not able to control the runtime of those rules. '
      + 'He is suspectable to time manipulation as it revert or deteriorate his rule. ',
    description:
      'A black and white cat. '
      + 'His face is primarily white with a black noise. '
      + 'He has emerald yellowish greenish eyes. '
      + 'His ears are black. '
      + 'His fur is short. '
      + 'His tail is black. ',
    gearSlots: QuadrupedalCreatureGearSlots,
    name: 'Mischievous',
    // a red colored thread can be used to control him
    potentialDisciplines: [
      Disciplines.KEEPER_OF_LAW,
      Disciplines.SAGE,
      Disciplines.GUARDIAN,
    ],

    surname: 'Piebald',

    symbolizes: ['Law', 'Causality', 'Absolute'],
  };

  export const JANUS_PERSIAN: Archetype = {
    affiliation: [Affiliations.THE_CATS],
    alias: ['Keeper of Time', 'Wise-Kitty', 'Old Coat'],
    backstory:
      'Governs the flow of time the One has been in this state.'
      + 'Has the ability to change the flow of time for different areas in the game.',
    description: 'An orange old persian cat',
    gearSlots: QuadrupedalCreatureGearSlots,
    name: 'Janus',
    potentialDisciplines: [
      Disciplines.KEEPER_OF_TIME,
      Disciplines.SAGE,
      Disciplines.GUARDIAN,
    ],
    surname: 'Persian',
    symbolizes: ['Time'],
  };

  export const LOOMEE_ANGORA: Archetype = {
    affiliation: [Affiliations.THE_CATS],
    alias: ['Keeper of Heart', 'Kind-Kitty', 'Song Maiden', 'Mom'],
    backstory:
      'She governs and protects the ones heart to make sure it is not lost. '
      + 'A girl created when the Song Maiden left her post to become human.',
    description:
      'A white angora cat. '
      + 'In human form a light blonde girl wearing white linen',
    name: 'Loomee',
    potentialDisciplines: [
      Disciplines.CHEERLEADER,
      Disciplines.MAIDEN,
      Disciplines.KEEPER_OF_HEART,
      Disciplines.COOK,
      Disciplines.HEALER,
      Disciplines.SAGE,
      Disciplines.GUARDIAN,
    ],
    summonCompatibility: [Summon.FELIX_LV1],
    surname: 'Angora',

    symbolizes: ['Chastity'],
    weaponCompatibility: [WeaponCategory.PENDANT],
  };
}
