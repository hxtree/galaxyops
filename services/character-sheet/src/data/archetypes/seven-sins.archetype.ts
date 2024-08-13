import {
  WeaponCategory,
  HumanoidCreatureGearSlots,
  Archetype,
  Slot,
} from '@galaxyops/character-sheet-contracts';
import { Disciplines } from '../disciplines';
import { Affiliations } from '../affiliations';
import { Skills } from '../skills';
import { Gear, GearIds } from '../gear';

/**
 * Seven Sins
 * Psychological states representing detrimental traits:
 * Pride is arrogance, Envy is resentment, Wrath is destructive anger,
 * Sloth is avoidance of effort, Greed is excessive desire, Lust is
 * compulsive craving, and Gluttony is overindulgence.
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
    traits: [
      {
        level: 1,
        skill: Skills.GREED_INCARNATE_MAX,
      },
      {
        level: 1,
        skill: Skills.GRAVITY_LV1,
      },
    ],
  };

  export const GENKI: Archetype = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Genki',
    potentialDisciplines: [Disciplines.MAGI_BLUE],
    symbolizes: ['Wrath', 'Fish'],
    traits: [
      {
        level: 1,
        skill: Skills.WRATH_INCARNATE_MAX,
      },
    ],
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
    supplies: [
      {
        chance: 1,
        gearSlotId: Slot.LEFT_HAND,
        quantity: 1,
        supplyId: 'SWORD_OF_LAWZON',
        transferable: true,
      },
    ],
    surname: 'Grey',
    symbolizes: ['Sloth', 'Wolf'],
    traits: [
      {
        level: 1,
        skill: Skills.SLOTH_INCARNATE_MAX,
      },
    ],
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
    supplies: [
      {
        chance: 1,
        gearSlotId: Slot.LEFT_HAND,
        quantity: 1,
        supplyId: 'GREED',
        transferable: true,
      },
    ],
    surname: 'Tsia',
    symbolizes: ['Greed', 'Mahdi', 'German Shepherd'],
    traits: [
      {
        level: 1,
        skill: Skills.DUAL_WELD_LV1,
      },
      {
        level: 1,
        skill: Skills.GREED_INCARNATE_MAX,
      },
    ],
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
    traits: [
      {
        level: 1,
        skill: Skills.LUST_INCARNATE_MAX,
      },
    ],
  };

  export const WISP: Archetype = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    alias: ['Crackles'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Wisp',
    potentialDisciplines: [Disciplines.MAGI_YELLOW],
    symbolizes: ['Gluttony', 'Hyena'],
    traits: [
      {
        level: 1,
        skill: Skills.GLUTTONY_INCARNATE_MAX,
      },
    ],
  };

  export const ASMIN: Archetype = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    alias: ['Big Guy'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Asmin',
    potentialDisciplines: [Disciplines.MAGI_BROWN],
    supplies: [
      {
        chance: 1,
        gearSlotId: Slot.LEFT_HAND,
        quantity: 1,
        supplyId: 'ASMINS_AXE',
        transferable: true,
      },
    ],
    symbolizes: ['Pride', 'Ox'],
    traits: [
      {
        level: 1,
        skill: Skills.PRIDE_INCARNATE_MAX,
      },
    ],
    weaponCompatibility: [WeaponCategory.TWO_HANDED_AXE],
  };

  export const DIAG: Archetype = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    alias: ['Poisonous Snake'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Diag',
    potentialDisciplines: [Disciplines.MAGI_PURPLE],
    symbolizes: ['Envy', 'Snake'],
    traits: [
      {
        level: 1,
        skill: Skills.ENVY_INCARNATE_MAX,
      },
    ],
  };
}
