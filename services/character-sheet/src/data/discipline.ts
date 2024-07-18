import {
  DisciplineCategory,
  Discipline,
  DisciplineProgression,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from './skills';

/**
 * Experience records a character experience for a specific discipline.
 * Different disciplines have different experience requirements.
 * A character can have multiple disciplines and therefore multiple experience records.
 * Progression in one discipline may unlock other disciplines, actions, and attributes bonuses.
 */
export function awardAbilityPointEachLevel(
  abilityPoints: number,
  levelInterval: number,
  maxLevel = DISCIPLINE_DEFAULT_MAX_LEVEL,
): DisciplineProgression[] {
  const progression: DisciplineProgression[] = [];

  let previousInterval = 0;

  for (let level = 1; level <= maxLevel; level++) {
    if (level % levelInterval === 0) {
      progression.push({ abilityPoints, level });
      previousInterval = level;
    } else if (previousInterval + levelInterval <= level) {
      progression.push({ abilityPoints, level });
      previousInterval = level;
    }
  }

  return progression;
}

export namespace Disciplines {
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

  export const HERO: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize in saving others.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Hero',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
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

  export const MECHANIC: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
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

  export const ROYALTY: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
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

  export const SUMMONER: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Summons and commands magical beings.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Summoner',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 2, skill: Skills.SUMMON_LV1 },
      { level: 10, skill: Skills.DISMISS_LV1 },
      { level: 14, skill: Skills.COMMAND_LV1 },
    ],
  };

  export const THIEF: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
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

  export const XSOLIDER: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Soldiers that have gone against their teachings to gain new skills.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'XSolider',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 9, skill: Skills.PHYSICAL_CONDITIONING_LV1 },
      { level: 20, skill: Skills.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 11, skill: Skills.PHYSICAL_CONDITIONING_LV2 },
      { level: 18, skill: Skills.PHYSICAL_CONDITIONING_LV3 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
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

  export const HEALER: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
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
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Bard',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.LULLABY_LV1 },
      { level: 10, skill: Skills.INSPIRE_LV1 },
    ],
  };

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

  export const MAIDEN: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Maiden',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.SPIRITUAL_GROWTH_LV1 },
    ],
  };

  export const Keeper: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Keeper',
    progression: [
      ...awardAbilityPointEachLevel(8, 16, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skills.HEAL_LV1 },
      { level: 10, skill: Skills.SPIRITUAL_GROWTH_LV1 },
      { level: 10, skill: Skills.CURE_LV1 },
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const SAGE: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
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

  export const ENGINEER: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
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

  export const KEEPER: Discipline = {
    category: DisciplineCategory.OMEGA,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Keeper',
    progression: [
      ...awardAbilityPointEachLevel(1, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
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

  export const OUROBOROS: Discipline = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Ouroboros',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
    ],
  };

  /**
   * Instinct Disciplines
   * Represents a hierarchy of instinct disciplines, ranging from detrimental
   * beginnings to legendary mastery. These disciplines are inherent to
   * non-player archetypes by virtue of their existence.
   * */

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

  /**
   * Creature Mastery Disciplines
   * Represents a discipline granted to specific types of creatures
   * These disciplines are inherent to non-player archetypes by virtue
   * of their existence.
   * */

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

export const DisciplineIds = Object.keys(Disciplines);

export type DisciplineId = keyof typeof Disciplines;

export function canLearn(
  disciplineId: DisciplineId,
  currentDisciplines: DisciplineId[],
): boolean {
  const prerequisites = Disciplines[disciplineId].prerequisites ?? [];
  const currentDisciplinesSet = new Set(currentDisciplines);

  for (const discipline of prerequisites) {
    if (!currentDisciplinesSet.has(discipline as DisciplineId)) {
      return false;
    }
  }

  return true;
}
