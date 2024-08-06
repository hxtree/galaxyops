import { SummonArchetypes } from './summons.archetype';
import { ThreeCatsArchetypes } from './three-cats.archetype';
import { ThreeDestroyersArchetypes } from './three-destroyers.archetype';
import { UnsortedArchetypes } from './unsorted-archetype';
import { SevenVirtuesArchetypes } from './seven-virtues.archetype';
import { SevenSinsArchetypes } from './seven-sins.archetype';
import { NotableBadGuysArchetypes } from './notable-bad-guys.archetype';
import { BattlerArchetypes } from './battler.archetype';

export const Archetypes = {
  ...SummonArchetypes,
  ...UnsortedArchetypes,
  ...ThreeCatsArchetypes,
  ...ThreeDestroyersArchetypes,
  ...SevenVirtuesArchetypes,
  ...SevenSinsArchetypes,
  ...NotableBadGuysArchetypes,
  ...BattlerArchetypes,
};

export const ArchetypeIds = Object.keys(Archetypes);

export type ArchetypeId = keyof typeof Archetypes;
