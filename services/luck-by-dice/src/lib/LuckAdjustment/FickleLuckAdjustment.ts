import { AbstractLuckAdjustment } from './AbstractLuckAdjustment';

export class FickleLuckAdjustment extends AbstractLuckAdjustment {
  public adjustment(rollPercent: number = 0.5): number {
    if (rollPercent <= 0.1) {
      return -2;
    }
    if (rollPercent <= 0.2) {
      return -1;
    }
    if (rollPercent >= 0.9) {
      return 2;
    }
    if (rollPercent >= 0.8) {
      return 1;
    }

    return 0;
  }
}
