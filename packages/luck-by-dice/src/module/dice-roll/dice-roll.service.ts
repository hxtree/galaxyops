import { Injectable } from '@nestjs/common';
import { Turn } from '../../lib/Turn';

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
}
