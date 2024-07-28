import { Injectable } from '@nestjs/common';
import { Turn } from '@galaxyops/dice-simulator';

@Injectable()
export class DiceRollService {
  async turn(
    notationValue: string,
    luckValue: number,
    iterations: number,
  ): Promise<any> {
    try {
      const notation = notationValue ?? 'd6';
      const luck = Number(luckValue) ?? 0;
      const turn = new Turn(notation, luck);
      const data = [];

      for (let i = 0; i < iterations; i++) {
        data.push({
          total: turn.roll(),
          luck: turn.luck.value,
          min: turn.minPotential(),
          average: turn.averageOutcome,
          max: turn.maxPotential(),
          bonus: turn.extraBonus,
        });
      }

      return await Promise.resolve({
        message: 'Success',
        data,
      });
      // todo define response format, jsend, etc.
    } catch (err) {
      return Promise.reject(new Error('Failed to get Roll'));
    }
  }

  /**
   * Determines the probability of a dice notation meeting a required score/throw/save.
   *
   * For example, the probability of meeting a 2+ score with a 1d6 roll is 0.8333% chance (5/6)
   *
   * {@link https://www.thedarkfortress.co.uk/tech_reports/1_dice_roll.php#:~:text=Well%20it%20might%20seem%20an,16.666%25%20or%201%2F6.}
   */
  determineProbability(score: number, diceNotation: string): number {
    // TODO add logic to determine probability from dice notation
    // 10
    // how many outcomes meet criteria

    return 1;
  }

  /**
   * Describe probability of action using words of estimative probability
   *
   * {@link https://en.wikipedia.org/wiki/Words_of_estimative_probability}
   */
  describeProbability(probability: number): string {
    switch (true) {
      case probability > 1:
        return 'certainly';
      case probability > 0.5:
        return 'likely';
      case probability < 0.5 && probability > 0.1:
        return 'frequent';
      case probability <= 0.1 && probability > 0.1:
        return 'occasional';
      case probability <= 0.1 && probability > 0:
        return 'rare';
      case probability <= 0:
      default:
        return 'impossible';
    }
  }
}
