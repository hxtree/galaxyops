import {
  DisciplineCategory,
  Discipline,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';
import { awardAbilityPointEachLevel } from './award-ability-points-each-level';

export namespace ProfessionDisciplines {
  export const MECHANIC: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: 'Specializes in electromechanical engineering',
    // Actions: Tools
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,

    name: 'Mechanic',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.SCAN_LV1 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const MAIDEN: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'A guardian of spiritual balance and personal growth, the Maiden focuses on developing inner strength and spiritual enlightenment. With abilities that promote self-improvement and inner harmony, the Maiden is adept at fostering personal growth and guiding others on their path to spiritual awakening.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Maiden',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.SPIRITUAL_GROWTH_LV1 },
    ],
  };

  export const SAGE: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description:
      'An enlightened scholar with profound wisdom and mental discipline, the Sage is a master of intellectual and spiritual prowess. Sages employ their vast knowledge to scan and analyze their surroundings, cultivate spiritual growth, and enhance their focus and concentration. Their mental discipline enables them to maintain clarity and insight under duress, making them formidable both in thought and action.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Sage',
    progression: [
      ...awardAbilityPointEachLevel(2, 4, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.SCAN_LV1 },
      { level: 10, skill: Skills.SPIRITUAL_GROWTH_LV1 },
      { level: 10, skill: Skills.CONCENTRATION_LV1 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const ENGINEER: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Engineer',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.SCAN_LV1 },
      { level: 10, skill: Skills.CONCENTRATION_LV1 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const HEALER: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: 'Specialize in healing.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Healer',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.HEAL_LV1 },
      { level: 10, skill: Skills.CURE_LV1 },
    ],
  };

  export const BARD: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Bard',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.LULLABY_LV1 },
      { level: 10, skill: Skills.INSPIRE_LV1 },
    ],
  };

  export const HERO: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: 'Specialize in saving others.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Hero',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
    ],
  };

  export const ROYALTY: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: 'Specializes in ruling others',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Royalty',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.COMMAND_LV1 },
      { level: 10, skill: Skills.BOAST_LV1 },
      { level: 40, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const THIEF: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: 'Proficient at stealing and picking locks.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Thief',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.PICKPOCKET_LV1 },
      { level: 10, skill: Skills.PICK_LOCK_LV1 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const GYMNAST: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: 'Trains in gymnastics.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Gymnast',
    progression: [
      ...awardAbilityPointEachLevel(1, 3, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 1, skill: Skills.JUMP_LV1 },
      { level: 8, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skills.BACK_FLIP_LV1 },
      { level: 15, skill: Skills.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 17, skill: Skills.DOUBLE_BACK_FLIP_LV1 },
      { level: 18, skill: Skills.HIGH_JUMP_LV1 },
      { level: 20, skill: Skills.CONCENTRATION_LV1 },
    ],
  };

  export const WIZARD: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: 'Studies mysterious forces.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Wizard',
    progression: [
      ...awardAbilityPointEachLevel(1, 3, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.GUST_LV1 },
      { level: 25, skill: Skills.FLARE_LV1 },
      { level: 50, skill: Skills.HEAL_LV1 },
      { level: 70, skill: Skills.LIGHT_LV1 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const HISTORIAN: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: 'Studies the world as it was.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Historian',
    progression: [
      ...awardAbilityPointEachLevel(3, 9, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.APPRAISE_LV1 },
      { level: 13, skill: Skills.SCAN_LV1 },
      { level: 20, skill: Skills.HERALDIC_LION_LV1 },
    ],
  };

  export const BODY_BUILDER: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: 'Do you even lift?',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Body Builder',
    progression: [
      ...awardAbilityPointEachLevel(3, 9, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 20, skill: Skills.SCRIBBLES_LV1 },
    ],
  };

  // may be anyone can become a cook?>
  export const COOK: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: 'Prepares and cooks food',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Cook',
    progression: [
      ...awardAbilityPointEachLevel(3, 9, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.PREPARE_FOOD_LV1 },
      // todo prepare different food items
    ],
  };

  export const CHEERLEADER: Discipline = {
    category: DisciplineCategory.PROFESSION,
    description: 'Cheers their team as a form of encouragement.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Cheerleader',
    progression: [
      ...awardAbilityPointEachLevel(3, 9, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 1, skill: Skills.CHEER_LV1 },
      { level: 10, skill: Skills.SUPPORT_LV1 },
      { level: 12, skill: Skills.INSPIRE_LV1 },
      { level: 18, skill: Skills.SPIRITUAL_GROWTH_LV1 },
      { level: 20, skill: Skills.HOPE_LV1 },
    ],
  };
}
