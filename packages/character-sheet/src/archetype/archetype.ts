import {Drive, Life, Spirit} from '../component/gauges';
import {Stats} from '../component/stats';
import {Effect, Operator, Trait} from '../component/trait';
import {Items} from '../component/item.gear';
import {StatusEffect} from '../component/status.effect';
import {Discipline} from '../component/discipline';
import {Outfit} from '../component/outfit.gear';
import {GearSlot} from '../component/gear';
import {Token} from '../component/token.gear';
import {EffectTag} from '../component/tag.effect';
import {Summon} from '../component/summon.skill';

export type CharacterSheet = {
  token?: Token;
};

/**
 * A human or non-humanoid base character.
 * base character information not stored in database
 * contains potentialGeatSlots, potentialDisciplines, etc.
 * only contains archetypes that can become character sheets, would not include a tree, etc.
 */
export namespace ArchetypeList {
  export type Character = {
    firstName: string;
    lastName?: string;
    description?: string;
    history?: string;
    backstory?: string;
    experience?: number;
    alias?: string[];
    symbolizes?: string;
    affiliation?: string[];

    // these seem more like they loaded or determined for player characters
    life?: Life;
    drive?: Drive;
    spirit?: Spirit;
    stats?: Stats;

    traits?: Trait[];
    statusEffects?: StatusEffect[];
    potentialDisciplines?: Discipline[];
    potentialOutfits?: Outfit[];
    potentialGeatSlots?: GearSlot[];
    summonCompatibility?: Summon[];

    // compatibility [
    // disciplines?: Discipline[];
    // outfits?: Outfit[];
    // geatSlots?: GearSlot[];
    // summon?: Summon[];
    // ]

    loot?: Items;
  };

  /**
   * Keepers
   */
  export const MischievousPiebald: Character = {
    firstName: 'Mischievous',
    lastName: 'Piebald',
    alias: ['Keeper of Law'],
    symbolizes: 'Law',
    affiliation: ['The Keepers'],
    description: 'A black and white cat with yellow eyes.',
    potentialDisciplines: [Discipline.SAGE, Discipline.GUARDIAN],
  };

  export const JanusPersian: Character = {
    firstName: 'Janus',
    lastName: 'Persian',
    alias: ['Keeper of Time', 'Wise-Kitty'],
    symbolizes: 'Time',
    affiliation: ['The Keepers'],
    description: 'A orange old perian cat',
    potentialDisciplines: [Discipline.SAGE, Discipline.GUARDIAN],
  };

  export const LoomeeAngora: Character = {
    firstName: 'Loomee',
    lastName: 'Angora',
    description: 'Light blonde girl wearing white linen',
    backstory:
      'A girl created when the Song Maiden left her post to become human. She governs and protects his heart to make sure it is not lost.',
    alias: ['Keeper of Heart', 'Song Maiden'],
    symbolizes: 'Chastity',
    affiliation: ['The Keepers'],
    potentialDisciplines: [
      Discipline.CHEERLEADER,
      Discipline.MADIEN,
      Discipline.KEEPER,
      Discipline.COOK,
      Discipline.HEALER,
      Discipline.SAGE,
      Discipline.GUARDIAN,
    ],

    summonCompatibility: [Summon.FELIX],
  };

  /**
   * Virtues
   */
  export const ArinothDiyath: Character = {
    firstName: 'Arinoth',
    lastName: 'Diyath',
    symbolizes: 'patience',
    backstory: '',
    potentialDisciplines: [],
  };

  export const FayeImago: Character = {
    firstName: 'Faye',
    lastName: 'Imago',
    backstory: 'A young girl who weilds magic and studies history',
    symbolizes: 'Charity',
    potentialDisciplines: [
      Discipline.WIZARD,
      Discipline.HISTORIAN,
      Discipline.MAGI,
      Discipline.MAGI_BLACK,
      Discipline.MAGI_BLUE,
      Discipline.MAGI_BROWN,
      Discipline.MAGI_GREEN,
      Discipline.MAGI_PINK,
      Discipline.MAGI_PURPLE,
      Discipline.MAGI_WHITE,
      Discipline.MAGI_YELLOW,
    ],
    summonCompatibility: [Summon.LYRE],
  };

  export const GaaliRuin: Character = {
    firstName: 'Gaali',
    lastName: 'Runewin',
    symbolizes: 'Temperance',
    backstory:
      'A prince with little interest in becoming king. Instead, he lives for testing his sword in raw danger.',
    potentialDisciplines: [
      Discipline.BARD,
      Discipline.DUELIST,
      Discipline.KNIGHT,
      Discipline.RUNE_KING,
      Discipline.ROYALTY,
      // - Nobel
      // - Duke
      // - King
      Discipline.HERO,
      Discipline.WARRIOR,
    ],
    traits: [
      {
        // innate prociency with sword
        tag: EffectTag.SWORD,
        modifier: Effect.RESIST,
        quantity: 0.5,
        operator: Operator.DIVIDE,
      },
    ],
  };

  export const GunterStonewell: Character = {
    firstName: 'Gunter',
    lastName: 'Stonewell',
    symbolizes: 'Patience',
    backstory: 'A solider for life',
    potentialDisciplines: [
      Discipline.GAURD,
      Discipline.BODY_BUILDER,
      Discipline.COMMANDER,
    ],
    summonCompatibility: [Summon.SCRIBBLES],
  };

  export const MalaceTsia: Character = {
    firstName: 'Malace',
    lastName: 'Tsia',
    alias: [
      'Black',
      'Sacrifice',
      'Ouroboros',
      'The Bringer of Death',
      'Dragon',
    ],
    symbolizes: 'Despair',
    backstory:
      'was used as a scarifice for his people to hold demons by sewing them to his skin',
    potentialDisciplines: [
      Discipline.GYMNAST,
      Discipline.POSSESSED,
      Discipline.SCOUT,
      Discipline.OUROBOROS,
      Discipline.SUMMONER,
      Discipline.ROUGE,
    ],
    traits: [
      {
        // Can single handedly carry party through foes of darkness due to his darkness healing trait.
        tag: EffectTag.DARKNESS,
        modifier: Effect.HEAL,
        percent: 80,
      },
    ],
    potentialOutfits: [Outfit.OFFICERS_UNIFORM],
    summonCompatibility: [Summon.OURUBORUS, Summon.MISCHIEVOUS],
  };

  export const MeekuOni: Character = {
    firstName: 'Meeku',
    lastName: 'Oni',
    symbolizes: 'Humility',
    alias: ['Kid', 'Brother'],
    backstory: 'A boy who has lost his past',
    potentialDisciplines: [
      Discipline.SOLIDER,
      Discipline.XSOLIDER,
      Discipline.BERSERKER,
      Discipline.ONI,
      Discipline.HERO,
    ],
    traits: [
      {
        // learns quickly
        tag: EffectTag.EXPERIENCE,
        modifier: Effect.WEAK,
        quantity: 1.2,
        operator: Operator.MULTIPLY,
      },
    ],
    potentialOutfits: [Outfit.TSHIRT_AND_JEANS],
    summonCompatibility: [Summon.VACHEL],
  };

  export const PennyKibbutz: Character = {
    firstName: 'Penny',
    lastName: 'Kibbutz',
    backstory: '',
    symbolizes: 'Kindness',
    potentialDisciplines: [
      Discipline.NINJA,
      Discipline.ASSASSIN,
      Discipline.AMBER_ASSASSIN,
      Discipline.ELITE_ASSASIN,
      Discipline.THIEF,
    ],
    traits: [
      {
        // has built up tolerance to poisons
        tag: EffectTag.POISON,
        modifier: Effect.IMMUNE,
      },
    ],
    summonCompatibility: [Summon.HERALDIC_LION],
  };

  export const TraezUthsha: Character = {
    firstName: 'Traez',
    lastName: 'Uthsha',
    backstory: '',
    symbolizes: 'diligence',
    potentialDisciplines: [
      Discipline.ENGINEER,
      Discipline.MECHANIC,
      Discipline.LIGHTENING_WARRIOR,
      Discipline.REBEL,
    ],
    summonCompatibility: [Summon.SANDY],
  };

  /**
   * Sins
   */
  export const VallonOni: Character = {
    firstName: 'Vallon',
    lastName: 'Oni',
    description: 'White hair',
  };

  export const Madhi: Character = {
    firstName: 'Mahdi',
    lastName: 'Tsia',
    description: "Malace's brother",
  };

  export const Lawzon: Character = {
    firstName: 'Lawzon',
    lastName: 'Grey',
    symbolizes: 'sloth',
    history:
      'Rumored to be the most powerful fighter from the north. He fought only to protect his village until it was wiped out from a great frost. He now wonders around lifelessly in search of an end. He is by far the most strongest of the seven but has no will to fight.',
  };

  export const Spider: Character = {
    firstName: 'Spider',
    description: 'A spider',
  };
}

export type ArchetypeKey = typeof ArchetypeList;
export type ArchetypeType = keyof ArchetypeKey;

export const Archetype = (id: string) => {
  const archetypeId: ArchetypeType = id as ArchetypeType;
  const archetype = ArchetypeList[archetypeId];
  return archetype;
};
