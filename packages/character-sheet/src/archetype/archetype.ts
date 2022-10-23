import {Drive, Life, Spirit} from '../component/gauges';
import {Stats} from '../component/stats';
import {Effect, Operator, Trait} from '../component/trait';
import {StatusEffect} from '../component/status.effect';
import {Discipline} from '../component/discipline';
import {EffectTag} from '../component/tag.effect';
import {Summon} from '../component/skill/summon.skill';
import * as Gear from '../component/gear';

export type CharacterSheet = {
  token?: Gear.Token;
};

/**
 * A human or non-humanoid base character.
 * base character information not stored in database
 * contains potentialGeatSlots, potentialDisciplines, etc.
 * only contains archetypes that can become character sheets, would not include a tree, etc.
 */
export namespace ArchetypeList {
  export type Character = {
    name: string;
    surname?: string;
    description?: string;
    history?: string;
    backstory?: string;
    experience?: number;
    alias?: string[];
    symbolizes?: string[];
    affiliation?: string[];
    weaponProficiency?: Gear.WeaponCategory[];

    // these seem more like they loaded or determined for player characters
    life?: Life;
    drive?: Drive;
    spirit?: Spirit;
    stats?: Stats;

    traits?: Trait[];
    statusEffects?: StatusEffect[];
    potentialDisciplines?: Discipline[];
    potentialOutfits?: Gear.Outfit[];
    potentialGeatSlots?: Gear.Slot[];
    summonCompatibility?: Summon[];

    // compatibility [
    // disciplines?: Discipline[];
    // outfits?: Outfit[];
    // geatSlots?: GearSlot[];
    // summon?: Summon[];
    // ]

    loot?: Gear.Item[];
  };

  /**
   * Three Keepers
   */
  export const MischievousPiebald: Character = {
    name: 'Mischievous',
    surname: 'Piebald',
    alias: ['Keeper of Law'],
    backstory: 'Governs the logical of this realm.',
    symbolizes: ['Law'],
    affiliation: ['The Keepers'],
    description: 'A black and white cat with yellow eyes.',
    potentialDisciplines: [Discipline.SAGE, Discipline.GUARDIAN],
  };

  export const JanusPersian: Character = {
    name: 'Janus',
    surname: 'Persian',
    backstory: 'Governs the flow of time the one has been in this state',
    alias: ['Keeper of Time', 'Wise-Kitty'],
    symbolizes: ['Time'],
    affiliation: ['The Keepers'],
    description: 'A orange old perian cat',
    potentialDisciplines: [Discipline.SAGE, Discipline.GUARDIAN],
  };

  export const LoomeeAngora: Character = {
    name: 'Loomee',
    surname: 'Angora',
    description: 'Light blonde girl wearing white linen',
    backstory:
      'She governs and protects the ones heart to make sure it is not lost. A girl created when the Song Maiden left her post to become human.',
    alias: ['Keeper of Heart', 'Song Maiden', 'Mom'],
    symbolizes: ['Chastity'],
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
    weaponProficiency: [Gear.WeaponCategory.PENDANT],
  };

  /**
   * Three Destroyer
   */
  export const VallonOni: Character = {
    name: 'Vallon',
    surname: 'Oni',
    symbolizes: ['Destroyer of Heart'],
    description: 'White hair',
    potentialDisciplines: [Discipline.SOLIDER, Discipline.XSOLIDER],
    weaponProficiency: [Gear.WeaponCategory.SWORD],
  };

  export const OuernOni: Character = {
    name: 'Ouern',
    surname: 'Oni',
    symbolizes: ['Destroyer of Time'],
    alias: ['The Black Plague'],
    backstory: 'Said to led to end of all who exist',
    description: 'White hair',
    potentialDisciplines: [Discipline.SOLIDER, Discipline.XSOLIDER],
  };

  export const MeekuOni: Character = {
    name: 'Meeku',
    surname: 'Oni',
    symbolizes: ['Destroyer of Law'],
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
    potentialOutfits: [Gear.Outfit.TSHIRT_AND_JEANS],
    summonCompatibility: [Summon.VACHEL],
    weaponProficiency: [Gear.WeaponCategory.SHIELD_SWORD],
  };

  /**
   * Seven Virtues
   */
  export const ArinothDiyath: Character = {
    name: 'Arinoth',
    surname: 'Diyath',
    symbolizes: ['Patience'],
    backstory: '',
    potentialDisciplines: [],
  };

  export const FayeImago: Character = {
    name: 'Faye',
    surname: 'Imago',
    backstory:
      'A young girl with light violet hair who weilds magic and studies history',
    symbolizes: ['Charity'],
    alias: ['Bookworm'],
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
    weaponProficiency: [Gear.WeaponCategory.STAFF],
  };

  export const GaaliRuin: Character = {
    name: 'Gaali',
    surname: 'Runewin',
    symbolizes: ['Temperance'],
    description: 'A white haired thin teenager',
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
    weaponProficiency: [Gear.WeaponCategory.RAPIER],
  };

  export const GunterStonewell: Character = {
    name: 'Gunter',
    surname: 'Stonewell',
    symbolizes: ['Humility'],
    description:
      'A large old man with grey hair who looks as though they have spend their life in battle',
    backstory: 'A solider for life',
    potentialDisciplines: [
      Discipline.GAURD,
      Discipline.BODY_BUILDER,
      Discipline.COMMANDER,
    ],
    summonCompatibility: [Summon.SCRIBBLES],
    weaponProficiency: [Gear.WeaponCategory.TWO_HANDED_AXE],
  };

  export const MalaceTsia: Character = {
    name: 'Malace',
    surname: 'Tsia',
    alias: [
      'Black',
      'Sacrifice',
      'Ouroboros',
      'The Bringer of Death',
      'Dragon',
    ],
    symbolizes: ['Despair'],
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
    potentialOutfits: [Gear.Outfit.OFFICERS_UNIFORM],
    summonCompatibility: [Summon.OURUBORUS, Summon.MISCHIEVOUS],
    weaponProficiency: [Gear.WeaponCategory.KNIFE],
  };

  export const PennyKibbutz: Character = {
    name: 'Penny',
    surname: 'Kibbutz',
    description: 'A red head girl',
    backstory: '',
    symbolizes: ['Kindness'],
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
    weaponProficiency: [Gear.WeaponCategory.DUAL_KYOKETSU_SHOGE],
  };

  export const TraezUthsha: Character = {
    name: 'Traez',
    surname: 'Uthsha',
    backstory: '',
    symbolizes: ['Diligence'],
    potentialDisciplines: [
      Discipline.ENGINEER,
      Discipline.MECHANIC,
      Discipline.LIGHTENING_WARRIOR,
      Discipline.REBEL,
    ],
    summonCompatibility: [Summon.SANDY],
    weaponProficiency: [Gear.WeaponCategory.BOOMERANG],
  };

  /**
   * Seven Sins
   */
  export const Void: Character = {
    name: 'Void',
    backstory:
      'Is one of the original seven demons. He was killed before the story begins. His place is taken by Mahdi.',

    potentialDisciplines: [Discipline.MAGI_BLACK],
  };

  export const Genki: Character = {
    name: 'Genki',
    symbolizes: ['Wrath', 'Fish'],
    potentialDisciplines: [Discipline.MAGI_BLUE],
    weaponProficiency: [Gear.WeaponCategory.HAND_SWORD],
  };

  export const Lawzon: Character = {
    name: 'Lawzon',
    surname: 'Grey',
    symbolizes: ['Sloth', 'Wolf'],
    history:
      'Rumored to be the most powerful fighter from the north. He fought only to protect his village until it was wiped out from a great frost. He now wonders around lifelessly in search of an end. He is by far the most strongest of the seven but has no will to fight.',
    potentialDisciplines: [Discipline.MAGI_WHITE],
    weaponProficiency: [Gear.WeaponCategory.BROAD_SWORD],
  };

  export const Madhi: Character = {
    name: 'Mahdi',
    surname: 'Tsia',
    description: "Malace's brother",
    backstory: 'When the world is about to end he is its savor',
    potentialDisciplines: [Discipline.POSSESSED, Discipline.MAGI_BLACK],
    weaponProficiency: [Gear.WeaponCategory.KNIFE],
  };

  export const Suyri: Character = {
    name: 'Suyri',
    description: 'uses strong magical powers',
    symbolizes: ['Luxury (later lust)', 'Fox'],
    potentialDisciplines: [Discipline.WIZARD, Discipline.MAGI_PINK],
  };

  export const Wisp: Character = {
    name: 'Wisp',
    symbolizes: ['Gluttony', 'Henya'],
    potentialDisciplines: [Discipline.MAGI_YELLOW],
  };

  export const Asmin: Character = {
    name: 'Asmin',
    symbolizes: ['Pride', 'Ox'],
    potentialDisciplines: [Discipline.MAGI_BROWN],
    weaponProficiency: [Gear.WeaponCategory.TWO_HANDED_AXE],
  };

  export const Diag: Character = {
    name: 'Diag',
    symbolizes: ['Envy', 'Snake'],
    potentialDisciplines: [Discipline.MAGI_PURPLE],
  };

  /**
   * Notable Bad Guys
   */
  export const Monarch: Character = {
    name: 'Monarch',
    alias: ['The Deadly One'],
    weaponProficiency: [Gear.WeaponCategory.DAGGER],
  };

  export const Viceroy: Character = {
    name: 'Viceroy',
    backstory: 'mimic monarch',
    weaponProficiency: [Gear.WeaponCategory.DAGGER],
  };

  /**
   * Battlers
   */
  export const Spider: Character = {
    name: 'Spider',
    description: 'A spider',
  };

  export const SeaHorse: Character = {
    name: 'Sea Horse',
    description: 'A spider',
  };

  export const SensitivePlant: Character = {
    name: 'Sensitive Plant',
    description: 'A plant that drops when touched',
  };

  // Bird of Fire - phoenix
  // Snake of Water – dragon
  // Chimera – a combination of two or more animals
  // A type of sloth like creature that lives around the maiden of the mist
  // A snow leopard creature that lives up north (can be seen near Lawzon)
}

export type ArchetypeKey = typeof ArchetypeList;
export type ArchetypeType = keyof ArchetypeKey;

export const Archetype = (id: string) => {
  const archetypeId: ArchetypeType = id as ArchetypeType;
  const archetype = ArchetypeList[archetypeId];
  return archetype;
};

export const getArchetypeList = () => {
  return Object.keys(ArchetypeList);
};
