import {
  DisciplineCategory,
  Discipline,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';
import { awardAbilityPointEachLevel } from './award-ability-points-each-level';

export namespace WarriorDisciplines {
  export const DUELIST: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Duelist',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.PARRY_LV1 },
      { level: 8, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 12, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
    ],
  };

  export const BERSERKER: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Berserker',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.STRIKE_LV1 },
      { level: 8, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skills.RAGE_LV1 },
      { level: 12, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
    ],
  };

  export const WARRIOR: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specializes in combat on the battlefield.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Warrior',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 2, skill: Skills.STRIKE_LV1 },
      { level: 7, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skills.RAGE_LV1 },
      { level: 11, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 20, skill: Skills.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 10, skill: Skills.BLOCK_LV1 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const LIGHTENING_WARRIOR: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Lightening Warrior',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.STRIKE_LV1 },
      { level: 8, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 15, skill: Skills.SHOCK_LV1 },
      { level: 20, skill: Skills.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
      { level: 11, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
    ],
  };
}
