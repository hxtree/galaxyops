import { BadRequestException } from '@nestjs/common';
import { SpawnGuideline } from '../../data/place';
import { ArchetypeId } from '../../data/archetype';
import { CreateCharacterSheetDto } from '../character-sheet/create-character-sheet-dto';

export class SpawnService {
  calculateSpawn(spawnGuidelines: SpawnGuideline[]): CreateCharacterSheetDto {
    const level = this.calculateLevel(spawnGuidelines);
    const archetypeId = this.calculateArchetype(spawnGuidelines);

    if (archetypeId === undefined) {
      throw new BadRequestException('Spawn archetype not found');
    }

    const createCharacterSheet = new CreateCharacterSheetDto();
    createCharacterSheet.archetypeId = archetypeId;

    // TODO apply level to disciplines at random based on level

    return createCharacterSheet;
  }

  calculateArchetype(
    spawnGuidelines: SpawnGuideline[],
  ): ArchetypeId | undefined {
    if (spawnGuidelines === undefined) {
      return undefined;
    }

    const totalGuidelines = spawnGuidelines.length;

    if (totalGuidelines === 0) {
      return undefined;
    }

    const randomIndex = Math.floor(Math.random() * totalGuidelines);

    return spawnGuidelines[randomIndex].archetype;
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
