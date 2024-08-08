import { SummonArchetypes } from './summons.archetype';
import { ThreeCatsArchetypes } from './three-cats.archetype';
import { ThreeDestroyersArchetypes } from './three-destroyers.archetype';
import { FalseKeepersArchetypes } from './false-keepers.archetype';
import { SevenVirtuesArchetypes } from './seven-virtues.archetype';
import { SevenSinsArchetypes } from './seven-sins.archetype';
import { NotableBadGuysArchetypes } from './notable-bad-guys.archetype';
import { BattlerArchetypes } from './battler.archetype';
import { SecretBossesArchetypes } from './secret-bosses.archetype';

export const Archetypes = {
  ...SummonArchetypes,
  ...FalseKeepersArchetypes,
  ...ThreeCatsArchetypes,
  ...ThreeDestroyersArchetypes,
  ...SevenVirtuesArchetypes,
  ...SevenSinsArchetypes,
  ...NotableBadGuysArchetypes,
  ...BattlerArchetypes,
  ...SecretBossesArchetypes,
};

export const ArchetypeIds = Object.keys(Archetypes);

export type ArchetypeId = keyof typeof Archetypes;
