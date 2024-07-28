import {
  DisciplineProgression,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';

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
