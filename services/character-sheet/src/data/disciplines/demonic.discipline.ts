import {
  DisciplineCategory,
  Discipline,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';
import { awardAbilityPointEachLevel } from './award-ability-points-each-level';

export namespace DemonicDisciplines {
  export const POSSESSED: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Possessed',
    progression: [
      ...awardAbilityPointEachLevel(6, 12, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 20, skill: Skills.PRECISION_AND_TECHNIQUE_LV1 },
    ],
  };

  export const ONI: Discipline = {
    category: DisciplineCategory.OMEGA,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Oni',
    progression: [
      ...awardAbilityPointEachLevel(1, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 8, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skills.ONI_LV1 },
      { level: 20, skill: Skills.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 13, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 10, skill: Skills.ONI_LV2 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
    ],
  };

  export const OUROBOROS: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Ouroboros',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
    ],
  };
}
