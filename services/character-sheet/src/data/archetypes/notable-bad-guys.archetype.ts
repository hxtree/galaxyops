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
 * Notable Bad Guys
 */
export namespace NotableBadGuysArchetypes {
  export const MONARCH: Archetype = {
    alias: ['The Deadly One'],
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Monarch',
    weaponCompatibility: [WeaponCategory.DAGGER],
  };

  export const VICEROY: Archetype = {
    backstory: 'mimic monarch',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Viceroy',
    weaponCompatibility: [WeaponCategory.DAGGER],
  };

  export const WARLING: Archetype = {
    alias: ['Wind Bag'],
    description: 'The embodiment of a traveling cyclone',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Warling',
    potentialDisciplines: [Disciplines.WIZARD, Disciplines.HISTORIAN],
  };

  export const ROWAN: Archetype = {
    affiliation: [Affiliations.FLIPPING_PROFITEERS],
    alias: ['The Flame-Maned Bandit', 'Red-Haired Rogue'],
    backstory:
      'Rowan is a tall and daring bandit with a mane of fiery red hair that matches his audacious personality. '
      + 'Known for his quick thinking and even quicker wit, Rowan is the mastermind behind their heists. '
      + 'Despite his fearsome reputation, he has a soft spot for fluffy animals and collects vintage teacups. '
      + "Rowan's love for a well-brewed cup of tea is as legendary as his escapades.",
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Rowan',
    potentialDisciplines: [Disciplines.ELITE_INSTINCT],
  };

  export const CHUBBS: Archetype = {
    affiliation: [Affiliations.FLIPPING_PROFITEERS],
    alias: ['The Rotund Rascal', 'Pint-Sized Pilferer'],
    backstory:
      'Chubbs is a short and plump bandit with a knack for squeezing into unexpected places. '
      + 'Known for their affinity for baked goods and ingenious contraptions, Chubbs is the comic relief '
      + 'and has a good heart in the wrong place. Despite their penchant for thievery, they always leave '
      + 'a thank-you note after their heists. Chubbs firmly believes that a well-baked pie can solve any problem.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Chubbs',
    potentialDisciplines: [Disciplines.BASIC_INSTINCT],
  };
}
