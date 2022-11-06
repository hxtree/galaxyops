import {Injectable} from '@nestjs/common';
import {Turn} from '../../lib/Turn';

@Injectable()
export class RollService {
  async turn(notationValue: string, luckValue: number): Promise<any> {
    try {
      const notation = notationValue ?? 'd6';
      const luck = Number(luckValue) ?? 0;
      const turn = new Turn(notation, luck);

      return await Promise.resolve({
        message: 'Success',
        data: {
          total: turn.roll(),
          luck: turn.luck.value,
          min: turn.minPotential(),
          max: turn.maxPotential(),
          bonus: turn.extraBonus,
        },
      });
      // todo define response format, jsend, etc.
    } catch (err) {
      return Promise.reject({
        message: 'Error',
        error: 'Failed to get Roll',
      });
    }
  }
}
