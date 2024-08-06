import {
  Effect,
  Operator,
  WeaponCategory,
  EffectTag,
  QuadrupedalCreatureGearSlots,
  HumanoidCreatureGearSlots,
  AvianCreatureGearSlots,
  SerpentineCreatureGearSlots,
  AmorphousCreatureGearSlots,
  Archetype,
} from '@galaxyops/character-sheet-contracts';
import { Disciplines } from '../disciplines';
import { Summon } from '../skills/summon.skill';
import { Outfits } from '../gear/outfit.gear';
import { Affiliations } from '../affiliations';

/**
 * Seven Sins
 */
export namespace SevenSinsArchetypes {
  export const VOID: Archetype = {
    affiliation: [Affiliations.DEVILS],
    alias: ['Empty'],
    backstory:
      'Is one of the original seven demons.'
      + 'He was killed before the story begins. '
      + 'His place is taken by Mahdi.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Void',
    potentialDisciplines: [
      Disciplines.MAGI_BLACK,
      Disciplines.LEGENDARY_INSTINCT,
    ],
  };

  export const GENKI: Archetype = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Genki',
    potentialDisciplines: [Disciplines.MAGI_BLUE],
    symbolizes: ['Wrath', 'Fish'],
    weaponCompatibility: [WeaponCategory.HAND_SWORD],
  };

  export const LAWZON_GREY: Archetype = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    description:
      'Wears wolfs head, with horns, and a sleep mask. '
      + 'Barely stays standing. ',
    gearSlots: HumanoidCreatureGearSlots,
    history:
      'A narcoleptic often found sleeping even when standing. '
      + 'Rumored to once of been the most powerful fighter from the north. '
      + 'He fought only to protect his village until it was wiped out from a great frost. '
      + 'He now wanders seemingly lifelessly in search of an end. '
      + 'He is by far the most strongest of the seven but has no will to fight.',
    name: 'Lawzon',
    potentialDisciplines: [Disciplines.MAGI_WHITE],
    surname: 'Grey',
    symbolizes: ['Sloth', 'Wolf'],
    weaponCompatibility: [WeaponCategory.BROAD_SWORD],
  };

  export const MADHI_TSIA: Archetype = {
    affiliation: [Affiliations.VALLONS_SEVEN, Affiliations.CATCHERS],
    alias: ['Brother'],
    backstory: 'When the world is about to end he is its savor',
    description: "Malace's brother",
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Mahdi',
    potentialDisciplines: [Disciplines.POSSESSED, Disciplines.MAGI_BLACK],
    surname: 'Tsia',
    symbolizes: ['Mahdi', 'German Shepherd'],
    weaponCompatibility: [WeaponCategory.KNIFE],
  };

  export const SUYRI: Archetype = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    description:
      'Has and uses strong magical powers. '
      + 'A female with pink colored hair. ',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Suyri',
    potentialDisciplines: [Disciplines.WIZARD, Disciplines.MAGI_PINK],
    symbolizes: ['Luxury (later lust)', 'Fox'],
  };

  export const WISP: Archetype = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    alias: ['Crackles'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Wisp',
    potentialDisciplines: [Disciplines.MAGI_YELLOW],
    symbolizes: ['Gluttony', 'Hyena'],
  };

  export const ASMIN: Archetype = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    alias: ['Big Guy'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Asmin',
    potentialDisciplines: [Disciplines.MAGI_BROWN],
    symbolizes: ['Pride', 'Ox'],
    weaponCompatibility: [WeaponCategory.TWO_HANDED_AXE],
  };

  export const DIAG: Archetype = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    alias: ['Poisonous Snake'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Diag',
    potentialDisciplines: [Disciplines.MAGI_PURPLE],
    symbolizes: ['Envy', 'Snake'],
  };
}
