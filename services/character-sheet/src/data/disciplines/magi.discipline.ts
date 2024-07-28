import {
  DisciplineCategory,
  Discipline,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';
import { awardAbilityPointEachLevel } from './award-ability-points-each-level';

export namespace MagiDisciplines {
  export const SUMMONER: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'A master of summoning who calls forth and commands magical beings from other realms. Summoners harness their arcane abilities to invoke powerful entities to aid them in combat, perform tasks, or provide counsel. They can also dismiss these entities when no longer needed or when they must be recalled.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Summoner',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 2, skill: Skills.SUMMON_LV1 },
      { level: 10, skill: Skills.DISMISS_LV1 },
      { level: 14, skill: Skills.COMMAND_LV1 },
    ],
  };

  export const MAGI: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Has a basic understanding of Magic',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi',
    prerequisites: [],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.SPIRITUAL_GROWTH_LV1 },
    ],
  };

  export const MAGI_BLACK: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize destruction Magic',
    history: 'Harnessed from the power of Ouren',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'MagiBlack',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.DARKNESS_LV1 },
      { level: 25, skill: Skills.DESOLATE_LV1 },
    ],
  };

  export const MAGI_BLUE: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize water Magic',
    history: 'Harnessed from the power of Genki',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi Blue',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.RAGE_LV1 },
      { level: 15, skill: Skills.AQUA_LV1 },
      { level: 20, skill: Skills.TSUNAMI_LV1 },
    ],
  };

  export const MAGI_BROWN: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize rock Magic',
    history: 'Harnessed from the power of Asmin',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi Brown',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.QUAKE_LV1 },
      { level: 15, skill: Skills.LANDSLIDE_LV1 },
    ],
  };

  export const MAGI_GREEN: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize time Magic',
    history: 'Harnessed from the power of Void',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi Green',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.STOP_LV1 },
      { level: 15, skill: Skills.SLOW_LV1 },
      { level: 15, skill: Skills.HASTE_LV1 },
    ],
  };

  export const MAGI_PINK: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize charm Magic',
    history: 'Harnessed from the power of Suyri',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi Pink',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.CHARM_LV1 },
      { level: 15, skill: Skills.CHILL_LV1 },
    ],
  };

  export const MAGI_PURPLE: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize ??? Magic',
    history: 'Harnessed from the power of Diag',
    // TODO CHANGE may be instead of quake do tainted
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi Purple',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.QUAKE_LV1 },
    ],
  };

  export const MAGI_WHITE: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize snow Magic',
    history: 'Harnessed from the power of Lawzon',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi White',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.SPIRITUAL_GROWTH_LV1 },
      { level: 10, skill: Skills.BLIZZARD_LV1 },
      { level: 10, skill: Skills.FROST_LV1 },
      { level: 10, skill: Skills.CHILL_LV1 },
    ],
  };

  export const MAGI_YELLOW: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize absorption Magic',
    history: 'Harnessed from the power of Wisp',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi Yellow',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.SPIRITUAL_GROWTH_LV1 },
      { level: 10, skill: Skills.DRAIN_LV1 },
      { level: 25, skill: Skills.LEECH_LV1 },
      { level: 50, skill: Skills.DRAIN_LV1 },
    ],
  };
}
