import { SkillType, Skill } from './skill';

/**
 * Experience records a character experience for a specific discipline.
 * Different disciplines have different experience requirements.
 * A character can have multiple disciplines and therefore multiple experience records.
 * Progression in one discipline may unlock other disciplines, actions, and attributes bonuses.
 */
export enum DisciplineCategory {
  // Specialty Classes
  PROFESSION = 'Profession',
  // Combat Classes
  ARCHETYPE = 'Archetype',
  // Spirit Class
  // Drive Classes
  OMEGA = 'Omega',
}

export type GainSkillType = {
  level: number;
  skill: SkillType;
};

export type GainAttributeType = {
  level: number;
  power?: number;
  speed?: number;
  wisdom?: number;
  intelligence?: number;
  defense?: number;
  accuracy?: number;
  evasion?: number;
  luck?: number;
};

export type AbilityPointProgression = {
  level: number;
  abilityPoints: number;
};

export type SkillProgression = {
  level: number;
  skill: SkillType;
};

export type DisciplineProgression = AbilityPointProgression | SkillProgression;

export const DISCIPLINE_DEFAULT_MAX_LEVEL = 20;

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

export namespace Discipline {
  export type Type = {
    name: string;
    description: string;
    category: DisciplineCategory;
    history?: string;
    prerequisites?: DisciplineId[]; // After level etc?
    // could also be event like defeated Lawzon, but may be that's too
    // character specific?
    progression?: DisciplineProgression[];
    maxLevel: number;
  };

  export const GYMNAST: Type = {
    category: DisciplineCategory.PROFESSION,
    description: 'Trains in gymnastics.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Gymnast',
    progression: [
      ...awardAbilityPointEachLevel(1, 3, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 1, skill: Skill.JUMP_LV1 },
      { level: 8, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skill.BACK_FLIP_LV1 },
      { level: 15, skill: Skill.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 17, skill: Skill.DOUBLE_BACK_FLIP_LV1 },
      { level: 18, skill: Skill.HIGH_JUMP_LV1 },
      { level: 20, skill: Skill.CONCENTRATION_LV1 },
    ],
  };

  export const WIZARD: Type = {
    category: DisciplineCategory.PROFESSION,
    description: 'Studies mysterious forces.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Wizard',
    progression: [
      ...awardAbilityPointEachLevel(1, 3, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.GUST_LV1 },
      { level: 25, skill: Skill.FLARE_LV1 },
      { level: 50, skill: Skill.HEAL_LV1 },
      { level: 70, skill: Skill.LIGHT_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const HISTORIAN: Type = {
    category: DisciplineCategory.PROFESSION,
    description: 'Studies the world as it was.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Historian',
    progression: [
      ...awardAbilityPointEachLevel(3, 9, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.APPRAISE_LV1 },
      { level: 13, skill: Skill.SCAN_LV1 },
      { level: 20, skill: Skill.HERALDIC_LION_LV1 },
    ],
  };

  export const BODY_BUILDER: Type = {
    category: DisciplineCategory.PROFESSION,
    description: 'Do you even lift?',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Body Builder',
    progression: [
      ...awardAbilityPointEachLevel(3, 9, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 20, skill: Skill.SCRIBBLES_LV1 },
    ],
  };

  // may be anyone can become a cook?>
  export const COOK: Type = {
    category: DisciplineCategory.PROFESSION,
    description: 'Prepares and cooks food',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Cook',
    progression: [
      ...awardAbilityPointEachLevel(3, 9, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.PREPARE_FOOD_LV1 },
      // todo prepare different food items
    ],
  };

  export const CHEERLEADER: Type = {
    category: DisciplineCategory.PROFESSION,
    description: 'Cheers their team as a form of encouragement.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Cheerleader',
    progression: [
      ...awardAbilityPointEachLevel(3, 9, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 1, skill: Skill.CHEER_LV1 },
      { level: 10, skill: Skill.SUPPORT_LV1 },
      { level: 12, skill: Skill.INSPIRE_LV1 },
      { level: 18, skill: Skill.SPIRITUAL_GROWTH_LV1 },
      { level: 20, skill: Skill.HOPE_LV1 },
    ],
  };

  export const COMMANDER: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize in giving orders to others.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Commander',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 1, skill: Skill.BOAST_LV1 },
      { level: 10, skill: Skill.LAST_STAND_LV1 },
      { level: 12, skill: Skill.BOAST_LV2 },
      { level: 15, skill: Skill.BLITZ_STRIKE_LV1 },
      { level: 20, skill: Skill.FLANK_LV1 },
    ],
  };

  export const MAGI: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Has a basic understanding of Magic',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi',
    prerequisites: [],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.SPIRITUAL_GROWTH_LV1 },
    ],
  };

  export const MAGI_BLACK: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize destruction Magic',
    history: 'Harnessed from the power of Ouren',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'MagiBlack',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.DARKNESS_LV1 },
      { level: 25, skill: Skill.DESOLATE_LV1 },
    ],
  };

  export const MAGI_BLUE: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize water Magic',
    history: 'Harnessed from the power of Genki',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi Blue',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.RAGE_LV1 },
      { level: 15, skill: Skill.AQUA_LV1 },
      { level: 20, skill: Skill.TSUNAMI_LV1 },
    ],
  };

  export const MAGI_BROWN: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize rock Magic',
    history: 'Harnessed from the power of Asmin',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi Brown',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.QUAKE_LV1 },
      { level: 15, skill: Skill.LANDSLIDE_LV1 },
    ],
  };

  export const MAGI_GREEN: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize time Magic',
    history: 'Harnessed from the power of Void',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi Green',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.STOP_LV1 },
      { level: 15, skill: Skill.SLOW_LV1 },
      { level: 15, skill: Skill.HASTE_LV1 },
    ],
  };

  export const MAGI_PINK: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize charm Magic',
    history: 'Harnessed from the power of Suyri',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi Pink',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.CHARM_LV1 },
      { level: 15, skill: Skill.CHILL_LV1 },
    ],
  };

  export const MAGI_PURPLE: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize ??? Magic',
    history: 'Harnessed from the power of Diag',
    // TODO CHANGE may be instead of quake do tainted
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi Purple',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.QUAKE_LV1 },
    ],
  };

  export const MAGI_WHITE: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize snow Magic',
    history: 'Harnessed from the power of Lawzon',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi White',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.SPIRITUAL_GROWTH_LV1 },
      { level: 10, skill: Skill.BLIZZARD_LV1 },
      { level: 10, skill: Skill.FROST_LV1 },
      { level: 10, skill: Skill.CHILL_LV1 },
    ],
  };

  export const MAGI_YELLOW: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize absorption Magic',
    history: 'Harnessed from the power of Wisp',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Magi Yellow',
    prerequisites: ['MAGI'],
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.SPIRITUAL_GROWTH_LV1 },
      { level: 10, skill: Skill.DRAIN_LV1 },
      { level: 25, skill: Skill.LEECH_LV1 },
      { level: 50, skill: Skill.DRAIN_LV1 },
    ],
  };

  export const GUARD: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize in protection.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Guard',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.BLOCK_LV1 },
    ],
  };

  export const GUARDIAN: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize in protection.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Guardian',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.SPIRITUAL_GROWTH_LV1 },
    ],
  };

  export const HERO: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize in saving others.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Hero',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
    ],
  };

  export const KNIGHT: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'A honored fighter who protects the kingdom.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Knight',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.BLOCK_LV1 },
      { level: 10, skill: Skill.STRIKE_LV1 },
      { level: 10, skill: Skill.BLOCK_LV1 },
      { level: 10, skill: Skill.CONCENTRATION_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const MECHANIC: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specializes in electromechanical engineering',
    // Actions: Tools
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,

    name: 'Mechanic',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.SCAN_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const ROUGE: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specializes sneak attacks and picking locks',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Rouge',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.DUAL_WELD_LV1 },
      { level: 10, skill: Skill.PICKPOCKET_LV1 },
    ],
  };

  export const ROYALTY: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specializes in ruling others',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Royalty',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.COMMAND_LV1 },
      { level: 10, skill: Skill.BOAST_LV1 },
      { level: 40, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const REBEL: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Rebel',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Rebel',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.STRIKE_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const SCOUT: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Specialize in moving ahead of the party to gathering information and reconnaissance.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Scout',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.SCOUT_LV1 },
      { level: 16, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const SOLIDER: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'A solider is a follower of the United Forces. They specialize in performing strict maneuvers.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Solider',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 1, skill: Skill.BLOCK_LV1 },
      { level: 10, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skill.CLEAVE_LV1 },
      { level: 20, skill: Skill.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 18, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const SUMMONER: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Summons and commands magical beings.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Summoner',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 2, skill: Skill.SUMMON_LV1 },
      { level: 10, skill: Skill.DISMISS_LV1 },
      { level: 14, skill: Skill.COMMAND_LV1 },
    ],
  };

  export const THIEF: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Proficient at stealing and picking locks.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Thief',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.PICKPOCKET_LV1 },
      { level: 10, skill: Skill.PICK_LOCK_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const WARRIOR: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specializes in combat on the battlefield.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Warrior',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 2, skill: Skill.STRIKE_LV1 },
      { level: 10, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skill.RAGE_LV1 },
      { level: 20, skill: Skill.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 10, skill: Skill.BLOCK_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const XSOLIDER: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Soldiers that have gone against their teachings to gain new skills.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'XSolider',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 20, skill: Skill.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const ASSASSIN: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specializes in sneak attacks and picking locks.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Assassin',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 3, skill: Skill.DUAL_WELD_LV1 },
      { level: 10, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 12, skill: Skill.PICKPOCKET_LV1 },
      { level: 15, skill: Skill.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 18, skill: Skill.PICK_LOCK_LV1 },
      { level: 20, skill: Skill.BACK_FLIP_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const HEALER: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: 'Specialize in healing.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Healer',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.HEAL_LV1 },
      { level: 10, skill: Skill.CURE_LV1 },
    ],
  };

  export const BARD: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Bard',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.LULLABY_LV1 },
      { level: 10, skill: Skill.INSPIRE_LV1 },
    ],
  };

  export const DUELIST: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Duelist',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.PARRY_LV1 },
      { level: 10, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const RUNE_KING: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Rune King',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.BOAST_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const MAIDEN: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Maiden',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.SPIRITUAL_GROWTH_LV1 },
    ],
  };

  export const Keeper: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Keeper',
    progression: [
      ...awardAbilityPointEachLevel(8, 16, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.HEAL_LV1 },
      { level: 10, skill: Skill.SPIRITUAL_GROWTH_LV1 },
      { level: 10, skill: Skill.CURE_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const SAGE: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Sage',
    progression: [
      ...awardAbilityPointEachLevel(2, 4, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.SCAN_LV1 },
      { level: 10, skill: Skill.SPIRITUAL_GROWTH_LV1 },
      { level: 10, skill: Skill.CONCENTRATION_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const POSSESSED: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Possessed',
    progression: [
      ...awardAbilityPointEachLevel(6, 12, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 20, skill: Skill.PRECISION_AND_TECHNIQUE_LV1 },
    ],
  };

  export const NINJA: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Ninja',
    progression: [
      ...awardAbilityPointEachLevel(3, 6, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 1, skill: Skill.STRIKE_LV1 },
      { level: 10, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skill.PARRY_LV1 },
      { level: 20, skill: Skill.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const AMBER_ASSASSIN: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Amber Assassin',
    progression: [
      ...awardAbilityPointEachLevel(3, 6, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skill.STRIKE_LV1 },
      { level: 20, skill: Skill.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 10, skill: Skill.PARRY_LV1 },
      { level: 10, skill: Skill.FIREBALL_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const ELITE_ASSASSIN: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Elite Assassin',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 20, skill: Skill.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const ENGINEER: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Engineer',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.SCAN_LV1 },
      { level: 10, skill: Skill.CONCENTRATION_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const BERSERKER: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Berserker',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.STRIKE_LV1 },
      { level: 10, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skill.RAGE_LV1 },
    ],
  };

  export const ONI: Type = {
    category: DisciplineCategory.OMEGA,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Oni',
    progression: [
      ...awardAbilityPointEachLevel(1, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 10, skill: Skill.ONI_LV1 },
      { level: 20, skill: Skill.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 10, skill: Skill.ONI_LV2 },
    ],
  };

  export const KEEPER: Type = {
    category: DisciplineCategory.OMEGA,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Keeper',
    progression: [
      ...awardAbilityPointEachLevel(1, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const LIGHTENING_WARRIOR: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description: '',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Lightening Warrior',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 10, skill: Skill.STRIKE_LV1 },
      { level: 10, skill: Skill.PHYSICAL_CONDITIONING_LV1 },
      { level: 15, skill: Skill.SHOCK_LV1 },
      { level: 20, skill: Skill.PRECISION_AND_TECHNIQUE_LV1 },
      { level: 25, skill: Skill.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const OUROBOROS: Type = {
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

  export const DETRIMENTAL_INSTINCT: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Instincts that are counterproductive to survival and advancement.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Detrimental Instinct',
    progression: [
      ...awardAbilityPointEachLevel(1, 3, DISCIPLINE_DEFAULT_MAX_LEVEL),
    ],
  };

  export const BASIC_INSTINCT: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Foundational instincts necessary for survival and basic functioning.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Basic Instinct',
    progression: [
      ...awardAbilityPointEachLevel(1, 2, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 2, skill: Skill.CLAW_LV1 },
    ],
  };

  export const ELITE_INSTINCT: Type = {
    category: DisciplineCategory.ARCHETYPE,
    description:
      'Advanced instincts that provide a competitive edge or superior capabilities.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Elite Instinct',
    progression: [
      ...awardAbilityPointEachLevel(1, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
    ],
  };

  export const LEGENDARY_INSTINCT: Type = {
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

export const DisciplineIds = Object.keys(Discipline);

export type DisciplineId = keyof typeof Discipline;

export function canLearn(
  disciplineId: DisciplineId,
  currentDisciplines: DisciplineId[],
): boolean {
  const prerequisites = Discipline[disciplineId].prerequisites ?? [];
  const currentDisciplinesSet = new Set(currentDisciplines);

  for (const discipline of prerequisites) {
    if (!currentDisciplinesSet.has(discipline)) {
      return false;
    }
  }

  return true;
}
