import {
  DisciplineCategory,
  Discipline,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';
import { awardAbilityPointEachLevel } from './award-ability-points-each-level';

/**
 * Creature Mastery Disciplines
 * Represents a discipline granted to specific types of creatures
 * These disciplines are inherent to non-player archetypes by virtue
 * of their existence.
 */
export namespace CreatureMasteryDisciplines {
  export const SPIDER_MASTERY: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Harness the ancient art of spider mastery, weaving deadly webs and delivering venomous strikes with unparalleled agility.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Spider Mastery',
    progression: [
      ...awardAbilityPointEachLevel(2, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 1, skill: Skills.BITE_LV1 },
      { level: 5, skill: Skills.BITE_LV2 },
      { level: 7, skill: Skills.CLAW_LV1 },
      { level: 10, skill: Skills.BITE_LV3 },
      { level: 12, skill: Skills.POISON_TRAP_LV1 },
      { level: 8, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 12, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
      // { level: 15, skill: Skills.ARACHNOMANCY_LV1 },
    ],
  };

  export const SERPENT_MASTERY: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Embrace the ancient serpent mastery, striking with venomous fangs and mastering stealth to dominate your foes.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Serpent Mastery',
    progression: [
      ...awardAbilityPointEachLevel(2, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 1, skill: Skills.BITE_LV1 },
      { level: 5, skill: Skills.BITE_LV2 },
      { level: 10, skill: Skills.BITE_LV3 },
      { level: 8, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 12, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
    ],
  };
}
