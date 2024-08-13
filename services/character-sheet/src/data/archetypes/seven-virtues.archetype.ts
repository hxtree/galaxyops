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
import { Outfits } from '../supplies/outfit.gear';
import { Affiliations } from '../affiliations';

export namespace SevenVirtuesArchetypes {
  export const ARINOTH_DIYATH: Archetype = {
    affiliation: [],
    alias: ['Tree'],
    backstory:
      'A man who sat under a tree for so long that his past became a mystery.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Arinoth',
    potentialDisciplines: [],
    surname: 'Diyath',
    symbolizes: ['Patience'],
    weaponCompatibility: [WeaponCategory.STAFF],
  };

  export const FAYE_IMAGO: Archetype = {
    affiliation: [Affiliations.MAGI_ORDER],
    alias: ['Bookworm'],
    backstory:
      'A young girl with light violet hair who wields magic and studies history',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Faye',
    potentialDisciplines: [
      Disciplines.WIZARD,
      Disciplines.HISTORIAN,
      Disciplines.MAGI,
      Disciplines.MAGI_BLACK,
      Disciplines.MAGI_BLUE,
      Disciplines.MAGI_BROWN,
      Disciplines.MAGI_GREEN,
      Disciplines.MAGI_PINK,
      Disciplines.MAGI_PURPLE,
      Disciplines.MAGI_WHITE,
      Disciplines.MAGI_YELLOW,
    ],
    summonCompatibility: [Summon.SUMMON_LYRE_LV1],
    surname: 'Imago',
    symbolizes: ['Charity'],
    weaponCompatibility: [WeaponCategory.STAFF],
  };

  export const GAALI_RUNEWIN: Archetype = {
    affiliation: [],
    backstory:
      'A prince who shuns the throne in favor of seeking thrill and danger through swordplay.',
    description: 'A white haired thin teenager',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Gaali',
    potentialDisciplines: [
      Disciplines.BARD,
      Disciplines.DUELIST,
      Disciplines.KNIGHT,
      Disciplines.RUNE_KING,
      Disciplines.ROYALTY,
      // - Nobel
      // - Duke
      // - King
      Disciplines.HERO,
      Disciplines.WARRIOR,
    ],
    surname: 'Runewin',
    symbolizes: ['Temperance'],
    traits: [
      {
        modifier: Effect.RESIST,
        operator: Operator.DIVIDE,
        quantity: 0.5,
        // innate proficiency with sword
        tag: EffectTag.SWORD,
      },
    ],
    weaponCompatibility: [WeaponCategory.RAPIER],
  };

  export const GUNTER_STONEWELL: Archetype = {
    affiliation: [Affiliations.SOLIDER_FORCES],
    backstory:
      'A soldier whose unwavering loyalty and dedication define him, with combat being all he knows.',
    description:
      'A large old man with grey hair. '
      + 'Looks like they spend their entire life in battle. ',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Gunter',
    potentialDisciplines: [
      Disciplines.GUARD,
      Disciplines.BODY_BUILDER,
      Disciplines.COMMANDER,
    ],
    summonCompatibility: [Summon.SUMMON_SCRIBBLES_LV1],
    surname: 'Stonewell',
    symbolizes: ['Humility'],
    weaponCompatibility: [WeaponCategory.TWO_HANDED_AXE],
  };

  export const MALACE_TSIA: Archetype = {
    affiliation: [Affiliations.CATCHERS],
    alias: [
      'Black',
      'Sacrifice',
      'Ouroboros',
      'The Bringer of Death',
      'Dragon',
    ],
    backstory:
      'As a child, his people sacrificed him to save themselves, sewing demons into his skin. Drawn to his purity, the demons became part of him.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Malace',
    potentialDisciplines: [
      Disciplines.GYMNAST,
      Disciplines.POSSESSED,
      Disciplines.SCOUT,
      Disciplines.OUROBOROS,
      Disciplines.SUMMONER,
      Disciplines.ROUGE,
    ],
    potentialOutfits: [Outfits.OFFICERS_UNIFORM],
    summonCompatibility: [
      Summon.SUMMON_OUROBOROS_LV1,
      Summon.SUMMON_MISCHIEVOUS_LV1,
    ],
    surname: 'Tsia',
    symbolizes: ['Despair'],
    traits: [
      {
        modifier: Effect.HEAL,

        percent: 80,
        // Can single handedly carry party through foes of darkness due to
        // his darkness healing trait.
        tag: EffectTag.DARKNESS,
      },
    ],
    weaponCompatibility: [WeaponCategory.KNIFE, WeaponCategory.DAGGER],
  };

  export const PENNY_KIBBUTZ: Archetype = {
    affiliation: [Affiliations.NINJA],
    age: 22,
    alias: ['Pen', 'Crazy Chick'],
    backstory:
      'A fiery and independent ninja assassin with a hot temper and a secret side of kindness. Her life is characterized by natural beauty and intense passion.',
    characteristics:
      'Strong, defiant, kills without question. '
      + 'Motivated primarily by money. ',
    description: 'A red head girl',
    element: 'Fire',
    gearSlots: HumanoidCreatureGearSlots,
    gender: 'Female',
    height: '5ft 8',
    name: 'Penny',
    occupation: 'Mercenary',
    potentialDisciplines: [
      Disciplines.NINJA,
      Disciplines.ASSASSIN,
      Disciplines.AMBER_ASSASSIN,
      Disciplines.ELITE_ASSASSIN,
      Disciplines.THIEF,
    ],
    summonCompatibility: [Summon.SUMMON_HERALDIC_LION_LV1],
    surname: 'Kibbutz',
    symbolizes: ['Kindness', 'Independence'],
    traits: [
      // **Battle +**: Attack, and Techniques.\\
      // **Battle -**: Magic.\\
      {
        modifier: Effect.IMMUNE,
        // has built up tolerance to poisons
        tag: EffectTag.POISON,
      },
    ],
    weaponCompatibility: [WeaponCategory.DUAL_KYOKETSU_SHOGE],
    weight: 120,
  };

  export const TRAEZ_UTHSHA: Archetype = {
    affiliation: [Affiliations.REBEL],
    backstory:
      'A young, scrappy engineer in the desert, known for his rebellious spirit and relentless passion for building mechs. Always busy creating and innovating.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Traez',
    potentialDisciplines: [
      Disciplines.ENGINEER,
      Disciplines.MECHANIC,
      Disciplines.LIGHTENING_WARRIOR,
      Disciplines.REBEL,
    ],
    summonCompatibility: [Summon.SUMMON_SANDY_LV1],
    surname: 'Uthsha',
    symbolizes: ['Diligence'],
    weaponCompatibility: [WeaponCategory.BOOMERANG],
  };
}
