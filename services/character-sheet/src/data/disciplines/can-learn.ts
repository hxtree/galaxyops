import { DisciplineId, Disciplines } from './index';

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
