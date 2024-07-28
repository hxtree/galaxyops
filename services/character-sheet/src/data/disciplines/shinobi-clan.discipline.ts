import {
  DisciplineCategory,
  Discipline,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';
import { awardAbilityPointEachLevel } from './award-ability-points-each-level';

export namespace ShinobiClanDisciplines {
  export const NINJA: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Ninja',
    progression: [
      ...awardAbilityPointEachLevel(3, 6, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 1, skill: Skills.STRIKE_LV1 },
      { level: 8, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skills.PARRY_LV1 },
      { level: 11, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 20, skill: Skills.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const AMBER_ASSASSIN: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Amber Assassin',
    progression: [
      ...awardAbilityPointEachLevel(3, 6, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 7, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skills.STRIKE_LV1 },
      { level: 20, skill: Skills.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 13, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 10, skill: Skills.PARRY_LV1 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
      { level: 10, skill: Skills.FIREBALL_LV1 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const ELITE_ASSASSIN: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Elite Assassin',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 7, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 11, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 20, skill: Skills.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const ROUGE: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specializes sneak attacks and picking locks',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Rouge',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.DUAL_WELD_LV1 },
      { level: 10, skill: Skills.PICKPOCKET_LV1 },
    ],
  };

  export const ASSASSIN: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specializes in sneak attacks and picking locks.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Assassin',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 3, skill: Skills.DUAL_WELD_LV1 },
      { level: 8, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 12, skill: Skills.PICKPOCKET_LV1 },
      { level: 15, skill: Skills.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 13, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 18, skill: Skills.PICK_LOCK_LV1 },
      { level: 20, skill: Skills.BACK_FLIP_LV1 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };
}
