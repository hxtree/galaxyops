import {
  DisciplineCategory,
  Discipline,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';
import { awardAbilityPointEachLevel } from './award-ability-points-each-level';

/**
 * Instinct Disciplines
 * Represents a hierarchy of instinct disciplines, ranging from detrimental
 * beginnings to legendary mastery. These disciplines are inherent to
 * non-player archetypes by virtue of their existence.
 * */
export namespace InstinctDisciplines {
  export const DETRIMENTAL_INSTINCT: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Instincts that are counterproductive to survival and advancement.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Detrimental Instinct',
    progression: [
      ...awardAbilityPointEachLevel(1, 3, DISCIPLINE_DEFAULT_MAX_LEVEL),
    ],
  };

  export const BASIC_INSTINCT: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Foundational instincts necessary for survival and basic functioning.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Basic Instinct',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 2, skill: Skills.CLAW_LV1 },
    ],
  };

  export const ELITE_INSTINCT: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Advanced instincts that provide a competitive edge or superior capabilities.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Elite Instinct',
    progression: [
      ...awardAbilityPointEachLevel(1, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
    ],
  };

  export const LEGENDARY_INSTINCT: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Instincts that are exceptionally rare, powerful, or revered, representing the pinnacle of evolutionary development.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Legendary Instinct',
    progression: [
      ...awardAbilityPointEachLevel(2, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
    ],
  };
}
