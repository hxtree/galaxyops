import { SpawnGuideline } from '../../data/place';
import { ArchetypeId } from '../../data/archetype';

export class SpawnService {
  async calculateArchetype(
    spawnGuidelines: SpawnGuideline[],
  ): Promise<ArchetypeId | undefined> {
    if (spawnGuidelines === undefined) {
      return Promise.resolve(undefined);
    }

    const totalGuidelines = spawnGuidelines.length;

    if (totalGuidelines === 0) {
      return Promise.resolve(undefined);
    }

    const randomIndex = Math.floor(Math.random() * totalGuidelines);

    return Promise.resolve(spawnGuidelines[randomIndex].archetype);
  }

  calculateLevel(spawnGuidelines: SpawnGuideline[]): number | undefined {
    const totalProbability = spawnGuidelines.reduce(
      (sum, guideline) => sum + guideline.probability,
      0,
    );

    const randomValue = Math.random() * totalProbability;

    let cumulativeProbability = 0;
    for (const guideline of spawnGuidelines) {
      cumulativeProbability += guideline.probability;
      if (randomValue <= cumulativeProbability) {
        return guideline.level;
      }
    }

    return undefined;
  }
}
