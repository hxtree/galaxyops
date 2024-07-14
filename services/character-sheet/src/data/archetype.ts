import {
  Drive,
  Life,
  Spirit,
  Effect,
  Operator,
  Trait,
  Skill,
  Affiliation,
  WeaponCategory,
  EffectTag,
  QuadrupedalCreatureGearSlots,
  HumanoidCreatureGearSlots,
  Slot,
  AvianCreatureGearSlots,
  SerpentineCreatureGearSlots,
  AmorphousCreatureGearSlots,
} from '@galaxyops/character-sheet-contracts';
import { Discipline } from './discipline';
import { Summon } from './skills/summon.skill';
import { Outfit } from './gear/outfit.gear';
import { Affiliations } from './affiliations';

/**
 * Base character information that does not change as the game progress
 * and therefore is not stored in database.
 * contains gearSlots, potentialDisciplines, etc.
 *
 * only contains archetypes that can become character sheets; would not include a tree, etc.
 */
export namespace Archetype {
  export type Type = {
    id?: string;
    name: string;
    surname?: string;
    age?: number;
    height?: string;
    weight?: number;
    gender?: string;
    element?: string;
    occupation?: string;
    characteristics?: string;
    description?: string;
    history?: string;
    backstory?: string;
    experience?: number;
    alias?: string[];
    symbolizes?: string[];

    biological?: {
      race?: string;
      gender?: string;
      age?: string;
      height?: string;
      weight?: string;
      hairColor: string;
      eyeColor: string;
    };

    relationships?: string[];
    affiliation?: Affiliation[];

    // these seem more like they loaded or determined for player characters
    life?: Life;
    drive?: Drive;
    spirit?: Spirit;

    traits?: Trait[];

    gearSlots?: Slot[];

    potentialDisciplines?: Discipline.Type[];
    potentialOutfits?: Outfit.Type[];
    summonCompatibility?: Skill[];
    weaponCompatibility?: WeaponCategory[];

    // compatibility [
    // disciplines?: Discipline[];
    // outfits?: Outfit[];
    // gearSlots?: GearSlot[];
    // summon?: Summon[];
    // ]

    // loot?: Gear.Item[];
  };

  export const DARUMA_NAKAMURA: Type = {
    alias: ['Unknown', 'Wooden Doll'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Daruma',
  };

  export const MOTHER: Type = {
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

  /**
   * Three Cats
   */
  export const MISCHIEVOUS_PIEBALD: Type = {
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
    potentialDisciplines: [Discipline.SAGE, Discipline.GUARDIAN],

    surname: 'Piebald',

    symbolizes: ['Law', 'Causality', 'Absolute'],
  };

  export const JANUS_PERSIAN: Type = {
    affiliation: [Affiliations.THE_CATS],
    alias: ['Keeper of Time', 'Wise-Kitty', 'Old Coat'],
    backstory:
      'Governs the flow of time the One has been in this state.'
      + 'Has the ability to change the flow of time for different areas in the game.',
    description: 'An orange old persian cat',
    gearSlots: QuadrupedalCreatureGearSlots,
    name: 'Janus',
    potentialDisciplines: [Discipline.SAGE, Discipline.GUARDIAN],
    surname: 'Persian',
    symbolizes: ['Time'],
  };

  export const LOOMEE_ANGORA: Type = {
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
      Discipline.CHEERLEADER,
      Discipline.MAIDEN,
      Discipline.KEEPER,
      Discipline.COOK,
      Discipline.HEALER,
      Discipline.SAGE,
      Discipline.GUARDIAN,
    ],
    summonCompatibility: [Summon.FELIX_LV1],
    surname: 'Angora',

    symbolizes: ['Chastity'],
    weaponCompatibility: [WeaponCategory.PENDANT],
  };

  /**
   * Three Destroyer
   */

  export const OUERN_ONI: Type = {
    affiliation: [Affiliations.THE_DESTROYERS, Affiliations.SOLIDER_FORCES],
    alias: ['The Black Plague', 'Skyfall', 'Timestopper', 'Standstill'],
    backstory:
      'Often sang a song similar to Tumbalalaika to his sons when they were young. '
      + 'Rumored to be end cause the end of all existence. '
      + 'Whereabouts unknown. ',
    description: 'White hair. Has a prominent tattoo FTW',
    gearSlots: HumanoidCreatureGearSlots,
    history:
      'He went is sealed inside the Floating Island waiting for his sons'
      + 'When his eyes are open only greater beings can move the rest of the world stands still.'
      + 'He possess sight beyond sight; is able to preserve the world from afar'
      + 'He is responsible for battle his son win where time seems to stand still. ',
    name: 'Ouren',
    potentialDisciplines: [Discipline.SOLIDER, Discipline.XSOLIDER],
    surname: 'Oni',
    symbolizes: ['Dad', 'Father', 'Destroyer of Time'],
  };

  export const VALLON_ONI: Type = {
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

    potentialDisciplines: [Discipline.SOLIDER, Discipline.XSOLIDER],

    surname: 'Oni',
    symbolizes: ['Destroyer of Heart', 'Loveless Lover', 'Heart Wrench'],
    weaponCompatibility: [WeaponCategory.SWORD],
  };

  export const MEEKU_ONI: Type = {
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
      Discipline.SOLIDER,
      Discipline.XSOLIDER,
      Discipline.BERSERKER,
      Discipline.ONI,
      Discipline.HERO,
    ],
    potentialOutfits: [Outfit.TSHIRT_AND_JEANS],
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

  /**
   * Seven Virtues
   */
  export const ARINOTH_DIYATH: Type = {
    affiliation: [],
    alias: ['Tree'],
    backstory: '',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Arinoth',
    potentialDisciplines: [],
    surname: 'Diyath',
    symbolizes: ['Patience'],
    weaponCompatibility: [WeaponCategory.STAFF],
  };

  export const FAYE_IMAGO: Type = {
    affiliation: [Affiliations.MAGI_ORDER],
    alias: ['Bookworm'],
    backstory:
      'A young girl with light violet hair who wields magic and studies history',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Faye',
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
    summonCompatibility: [Summon.LYRE_LV1],
    surname: 'Imago',
    symbolizes: ['Charity'],
    weaponCompatibility: [WeaponCategory.STAFF],
  };

  export const GAALI_RUNEWIN: Type = {
    affiliation: [],
    backstory:
      'A prince with little interest in becoming king. Instead, he lives for testing his sword in raw danger.',
    description: 'A white haired thin teenager',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Gaali',
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

  export const GUNTER_STONEWELL: Type = {
    affiliation: [Affiliations.SOLIDER_FORCES],
    backstory: 'A solider for life',
    description:
      'A large old man with grey hair. '
      + 'Looks like they spend their entire life in battle. ',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Gunter',
    potentialDisciplines: [
      Discipline.GUARD,
      Discipline.BODY_BUILDER,
      Discipline.COMMANDER,
    ],
    summonCompatibility: [Summon.SCRIBBLES_LV1],
    surname: 'Stonewell',
    symbolizes: ['Humility'],
    weaponCompatibility: [WeaponCategory.TWO_HANDED_AXE],
  };

  export const MALACE_TSIA: Type = {
    affiliation: [Affiliations.CATCHERS],
    alias: [
      'Black',
      'Sacrifice',
      'Ouroboros',
      'The Bringer of Death',
      'Dragon',
    ],
    backstory:
      'As a child, his people sacrificed him to save themselves. '
      + 'They sewed the demons plaguing the village into his skin. '
      + 'The demons were drawn to his purity. ',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Malace',
    potentialDisciplines: [
      Discipline.GYMNAST,
      Discipline.POSSESSED,
      Discipline.SCOUT,
      Discipline.OUROBOROS,
      Discipline.SUMMONER,
      Discipline.ROUGE,
    ],
    potentialOutfits: [Outfit.OFFICERS_UNIFORM],
    summonCompatibility: [Summon.OUROBOROS_LV1, Summon.MISCHIEVOUS_LV1],
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

  export const PENNY_KIBBUTZ: Type = {
    affiliation: [Affiliations.NINJA],
    age: 22,
    alias: ['Pen', 'Crazy Chick'],
    backstory: '',
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
      Discipline.NINJA,
      Discipline.ASSASSIN,
      Discipline.AMBER_ASSASSIN,
      Discipline.ELITE_ASSASSIN,
      Discipline.THIEF,
    ],
    summonCompatibility: [Summon.HERALDIC_LION_LV1],
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

  export const TRAEZ_UTHSHA: Type = {
    affiliation: [Affiliations.REBEL],
    backstory: '',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Traez',
    potentialDisciplines: [
      Discipline.ENGINEER,
      Discipline.MECHANIC,
      Discipline.LIGHTENING_WARRIOR,
      Discipline.REBEL,
    ],
    summonCompatibility: [Summon.SANDY_LV1],
    surname: 'Uthsha',
    symbolizes: ['Diligence'],
    weaponCompatibility: [WeaponCategory.BOOMERANG],
  };

  /**
   * Seven Sins
   */
  export const VOID: Type = {
    affiliation: [Affiliations.DEVILS],
    alias: ['Empty'],
    backstory:
      'Is one of the original seven demons.'
      + 'He was killed before the story begins. '
      + 'His place is taken by Mahdi.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Void',
    potentialDisciplines: [
      Discipline.MAGI_BLACK,
      Discipline.LEGENDARY_INSTINCT,
    ],
  };

  export const GENKI: Type = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Genki',
    potentialDisciplines: [Discipline.MAGI_BLUE],
    symbolizes: ['Wrath', 'Fish'],
    weaponCompatibility: [WeaponCategory.HAND_SWORD],
  };

  export const LAWZON_GREY: Type = {
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
    potentialDisciplines: [Discipline.MAGI_WHITE],
    surname: 'Grey',
    symbolizes: ['Sloth', 'Wolf'],
    weaponCompatibility: [WeaponCategory.BROAD_SWORD],
  };

  export const MADHI_TSIA: Type = {
    affiliation: [Affiliations.VALLONS_SEVEN, Affiliations.CATCHERS],
    alias: ['Brother'],
    backstory: 'When the world is about to end he is its savor',
    description: "Malace's brother",
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Mahdi',
    potentialDisciplines: [Discipline.POSSESSED, Discipline.MAGI_BLACK],
    surname: 'Tsia',
    symbolizes: ['Mahdi', 'German Shepherd'],
    weaponCompatibility: [WeaponCategory.KNIFE],
  };

  export const SUYRI: Type = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    description:
      'Has and uses strong magical powers. '
      + 'A female with pink colored hair. ',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Suyri',
    potentialDisciplines: [Discipline.WIZARD, Discipline.MAGI_PINK],
    symbolizes: ['Luxury (later lust)', 'Fox'],
  };

  export const WISP: Type = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    alias: ['Crackles'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Wisp',
    potentialDisciplines: [Discipline.MAGI_YELLOW],
    symbolizes: ['Gluttony', 'Hyena'],
  };

  export const ASMIN: Type = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    alias: ['Big Guy'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Asmin',
    potentialDisciplines: [Discipline.MAGI_BROWN],
    symbolizes: ['Pride', 'Ox'],
    weaponCompatibility: [WeaponCategory.TWO_HANDED_AXE],
  };

  export const DIAG: Type = {
    affiliation: [Affiliations.VALLONS_SEVEN],
    alias: ['Poisonous Snake'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Diag',
    potentialDisciplines: [Discipline.MAGI_PURPLE],
    symbolizes: ['Envy', 'Snake'],
  };

  /**
   * Notable Bad Guys
   */
  export const MONARCH: Type = {
    alias: ['The Deadly One'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Monarch',
    weaponCompatibility: [WeaponCategory.DAGGER],
  };

  export const VICEROY: Type = {
    backstory: 'mimic monarch',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Viceroy',
    weaponCompatibility: [WeaponCategory.DAGGER],
  };

  export const WARLING: Type = {
    alias: ['Wind Bag'],
    description: 'The embodiment of a traveling cyclone',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Warling',
    potentialDisciplines: [Discipline.WIZARD, Discipline.HISTORIAN],
  };

  /**
   * Battlers
   */
  export const SPIDER: Type = {
    alias: ['Creepy Crawlers'],
    description: 'A spider',
    gearSlots: [],
    name: 'Spider',
    potentialDisciplines: [
      Discipline.BASIC_INSTINCT,
      Discipline.ELITE_INSTINCT,
    ],
    weaponCompatibility: [],
  };

  export const SEA_HORSE: Type = {
    alias: ['Legless Horse'],
    description: 'A spider',
    gearSlots: [],
    name: 'Sea Horse',
    potentialDisciplines: [
      Discipline.BASIC_INSTINCT,
      Discipline.ELITE_INSTINCT,
    ],
    weaponCompatibility: [],
  };

  export const SENSITIVE_PLANT: Type = {
    alias: ['Weepers'],
    description: 'A plant that drops when touched',
    gearSlots: [],
    name: 'Sensitive Plant',
    potentialDisciplines: [Discipline.DETRIMENTAL_INSTINCT],
    weaponCompatibility: [],
  };

  export const DEEP_THINKER: Type = {
    alias: ['Fish Brains'],
    description: 'A humanoid, fish, monster',
    gearSlots: [],
    name: 'Deep Thinker',
    potentialDisciplines: [Discipline.ELITE_INSTINCT],
  };

  export const GEL: Type = {
    alias: ['Blob', 'Jello', 'Squishy'],
    description: 'A gel based creature',
    gearSlots: AmorphousCreatureGearSlots,
    name: 'Gel',
    potentialDisciplines: [
      Discipline.BASIC_INSTINCT,
      Discipline.ELITE_INSTINCT,
    ],
  };

  export const PHOENIX: Type = {
    description: 'A bird of fire.',
    gearSlots: AvianCreatureGearSlots,
    name: 'Phoenix',
    potentialDisciplines: [Discipline.LEGENDARY_INSTINCT],
    weaponCompatibility: [],
  };

  export const SNOW_LEOPARD: Type = {
    description: 'A creature that lives far to the north.',
    // can be seen near Lawzon
    gearSlots: QuadrupedalCreatureGearSlots,
    name: 'Snow Leopard',
    potentialDisciplines: [Discipline.ELITE_INSTINCT],
  };

  export const CHIMERA: Type = {
    description: 'A combination of two or more animals.',
    gearSlots: QuadrupedalCreatureGearSlots,
    name: 'Chimera',
    potentialDisciplines: [
      Discipline.DETRIMENTAL_INSTINCT,
      Discipline.ELITE_INSTINCT,
    ],
  };

  export const SLOW_MOVER: Type = {
    description: 'A type of sloth like creature.',
    // that lives around the maiden of the mist
    gearSlots: [],
    name: 'Slow Mover',
    potentialDisciplines: [Discipline.DETRIMENTAL_INSTINCT],
  };

  export const SNAKE_OF_THE_WATER: Type = {
    description: 'A type of dragon.',
    gearSlots: SerpentineCreatureGearSlots,
    name: 'Snake of the Water',
    potentialDisciplines: [Discipline.ELITE_INSTINCT],
  };

  export const BANDIT: Type = {
    affiliation: [Affiliations.FLIPPING_PROFITEERS],
    description: 'Bandit.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Bandit',
    potentialDisciplines: [Discipline.BASIC_INSTINCT],
  };

  export const ROWAN: Type = {
    affiliation: [Affiliations.FLIPPING_PROFITEERS],
    alias: ['The Flame-Maned Bandit', 'Red-Haired Rogue'],
    backstory:
      'Rowan is a tall and daring bandit with a mane of fiery red hair that matches his audacious personality. '
      + 'Known for his quick thinking and even quicker wit, Rowan is the mastermind behind their heists. '
      + 'Despite his fearsome reputation, he has a soft spot for fluffy animals and collects vintage teacups. '
      + "Rowan's love for a well-brewed cup of tea is as legendary as his escapades.",
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Rowan',
    potentialDisciplines: [Discipline.ELITE_INSTINCT],
  };

  export const CHUBBS: Type = {
    affiliation: [Affiliations.FLIPPING_PROFITEERS],
    alias: ['The Rotund Rascal', 'Pint-Sized Pilferer'],
    backstory:
      'Chubbs is a short and plump bandit with a knack for squeezing into unexpected places. '
      + 'Known for their affinity for baked goods and ingenious contraptions, Chubbs is the comic relief '
      + 'and has a good heart in the wrong place. Despite their penchant for thievery, they always leave '
      + 'a thank-you note after their heists. Chubbs firmly believes that a well-baked pie can solve any problem.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Chubbs',
    potentialDisciplines: [Discipline.BASIC_INSTINCT],
  };
}

/**
 * contains list of all supported ArchetypeIds
 */
export const ArchetypeIds = Object.keys(Archetype);

/**
 * type for each supported ArchetypeId
 */
export type ArchetypeId = keyof typeof Archetype;
