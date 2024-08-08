import {
  DisciplineCategory,
  Discipline,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';
import { awardAbilityPointEachLevel } from './award-ability-points-each-level';

export namespace RebelForcesDisciplines {
  export const REBEL: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Rebel',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Rebel',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.STRIKE_LV1 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const X_SOLIDER: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Soldiers that have gone against their teachings to gain new skills.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'X_SOLIDER',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 9, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 20, skill: Skills.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 11, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };
}
