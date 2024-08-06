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
 * Battlers
 */
export namespace BattlerArchetypes {
  export const SPIDER: Archetype = {
    alias: ['Creepy Crawlers'],
    description: 'A spider',
    gearSlots: [],
    name: 'Spider',
    potentialDisciplines: [
      Disciplines.BASIC_INSTINCT,
      Disciplines.ELITE_INSTINCT,
      Disciplines.SPIDER_MASTERY,
    ],
    weaponCompatibility: [],
  };

  export const INFERNO_ARACHNID = {
    description: 'A fire spider',
    gearSlots: [],
    name: 'Inferno Arachnid',
    potentialDisciplines: [
      Disciplines.ELITE_INSTINCT,
      Disciplines.SPIDER_MASTERY,
    ],
    weaponCompatibility: [],
  };

  export const SEA_HORSE: Archetype = {
    alias: ['Legless Horse'],
    description: 'A spider',
    gearSlots: [],
    name: 'Sea Horse',
    potentialDisciplines: [
      Disciplines.BASIC_INSTINCT,
      Disciplines.ELITE_INSTINCT,
    ],
    weaponCompatibility: [],
  };

  export const SENSITIVE_PLANT: Archetype = {
    alias: ['Weepers'],
    description: 'A plant that drops when touched',
    gearSlots: [],
    name: 'Sensitive Plant',
    potentialDisciplines: [Disciplines.DETRIMENTAL_INSTINCT],
    weaponCompatibility: [],
  };

  export const DEEP_THINKER: Archetype = {
    alias: ['Fish Brains'],
    description: 'A humanoid, fish, monster',
    gearSlots: [],
    name: 'Deep Thinker',
    potentialDisciplines: [Disciplines.ELITE_INSTINCT],
  };

  export const GEL: Archetype = {
    alias: ['Blob', 'Jello', 'Squishy'],
    description: 'A gel based creature',
    gearSlots: AmorphousCreatureGearSlots,
    name: 'Gel',
    potentialDisciplines: [
      Disciplines.BASIC_INSTINCT,
      Disciplines.ELITE_INSTINCT,
    ],
  };

  export const PHOENIX: Archetype = {
    description: 'A bird of fire.',
    gearSlots: AvianCreatureGearSlots,
    name: 'Phoenix',
    potentialDisciplines: [Disciplines.LEGENDARY_INSTINCT],
    weaponCompatibility: [],
  };

  export const SNOW_LEOPARD: Archetype = {
    description: 'A creature that lives far to the north.',
    // can be seen near Lawzon
    gearSlots: QuadrupedalCreatureGearSlots,
    name: 'Snow Leopard',
    potentialDisciplines: [Disciplines.ELITE_INSTINCT],
  };

  export const CHIMERA: Archetype = {
    description: 'A combination of two or more animals.',
    gearSlots: QuadrupedalCreatureGearSlots,
    name: 'Chimera',
    potentialDisciplines: [
      Disciplines.DETRIMENTAL_INSTINCT,
      Disciplines.ELITE_INSTINCT,
    ],
  };

  export const SLOW_MOVER: Archetype = {
    description: 'A type of sloth like creature.',
    // that lives around the maiden of the mist
    gearSlots: [],
    name: 'Slow Mover',
    potentialDisciplines: [Disciplines.DETRIMENTAL_INSTINCT],
  };

  export const SNAKE_OF_THE_WATER: Archetype = {
    description: 'A type of dragon.',
    gearSlots: SerpentineCreatureGearSlots,
    name: 'Snake of the Water',
    potentialDisciplines: [Disciplines.ELITE_INSTINCT],
  };

  export const BANDIT: Archetype = {
    affiliation: [Affiliations.FLIPPING_PROFITEERS],
    description: 'Bandit.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Bandit',
    potentialDisciplines: [Disciplines.BASIC_INSTINCT],
  };
}
