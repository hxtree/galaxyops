import {
  DisciplineCategory,
  Discipline,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';
import { awardAbilityPointEachLevel } from './award-ability-points-each-level';

export namespace MilitaryDisciplines {
  export const COMMANDER: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize in giving orders to others.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Commander',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 1, skill: Skills.BOAST_LV1 },
      { level: 10, skill: Skills.LAST_STAND_LV1 },
      { level: 12, skill: Skills.BOAST_LV2 },
      { level: 15, skill: Skills.BLITZ_STRIKE_LV1 },
      { level: 20, skill: Skills.FLANK_LV1 },
    ],
  };

  export const GUARD: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize in protection.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Guard',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.BLOCK_LV1 },
    ],
  };

  export const GUARDIAN: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize in protection.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Guardian',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.SPIRITUAL_GROWTH_LV1 },
    ],
  };

  export const KNIGHT: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'A honored fighter who protects the kingdom.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Knight',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.BLOCK_LV1 },
      { level: 10, skill: Skills.STRIKE_LV1 },
      { level: 10, skill: Skills.BLOCK_LV1 },
      { level: 10, skill: Skills.CONCENTRATION_LV1 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const SCOUT: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Specialize in moving ahead of the party to gathering information and reconnaissance.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Scout',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.SCOUT_LV1 },
      { level: 16, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const SOLIDER: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'A solider is a follower of the United Forces. They specialize in performing strict maneuvers.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Solider',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 1, skill: Skills.BLOCK_LV1 },
      { level: 4, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skills.CLEAVE_LV1 },
      { level: 10, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
      { level: 18, skill: Skills.MENTAL_DISCIPLINE_LV1 },
      { level: 20, skill: Skills.PRECISION_AND_TECHNIQUE_LV1 },
    ],
  };

  export const RUNE_KING: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Rune King',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.BOAST_LV1 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };
}
