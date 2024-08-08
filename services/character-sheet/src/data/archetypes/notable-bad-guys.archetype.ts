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
import { Affiliations } from '../affiliations';

export namespace NotableBadGuysArchetypes {
  export const MONARCH: Archetype = {
    alias: ['The Deadly One'],
    backstory:
      'The Monarch was once an elite assassin, known for their unmatched skill and ruthless efficiency. Clad in vibrant attire that mirrors the colors of the butterflies they once observed in the gardens of their covert sanctuary, they wield their dagger with deadly precision. Their reputation for swift, fatal strikes and their commitment to a strict code of honor make them a living nightmare for their targets.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Monarch',
    weaponCompatibility: [WeaponCategory.DAGGER],
  };

  export const VICEROY: Archetype = {
    alias: ['The Deceptive Shadow'],
    backstory:
      'The Viceroy is a master of deception who emulates the feared Monarch to unsettle and mislead their prey. As a rival assassin who uses the Monarch’s striking appearance to provoke fear, the Viceroy relies on psychological manipulation rather than true combat prowess. Though they wield no real power, their mimicry serves to confuse and terrorize, making them a dangerous presence in the shadowy world of high-stakes assassination.',
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
    alias: ['The Rotund Rascal', 'Pint-Sized Pilferer', 'Chubby Bandit'],
    backstory:
      'Chubbs is a short and plump bandit with a knack for squeezing into unexpected places. '
      + 'Known for their affinity for baked goods and ingenious contraptions, Chubbs is the comic relief '
      + 'and has a good heart in the wrong place. Despite their penchant for thievery, they always leave '
      + 'a thank-you note after their heists. Chubbs firmly believes that a well-baked pie can solve any problem.'
      + 'Shirtless wearing a orange bandana with a white skull on it and brown shorts.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Chubbs',
    potentialDisciplines: [Disciplines.BASIC_INSTINCT],
  };
}
