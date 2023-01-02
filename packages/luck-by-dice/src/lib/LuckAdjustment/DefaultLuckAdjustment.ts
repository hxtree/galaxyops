import { AbstractLuckAdjustment } from './AbstractLuckAdjustment';

export class DefaultLuckAdjustment extends AbstractLuckAdjustment {
  public get phi(): number {
    return (1 + Math.sqrt(5)) / 2;
  }

  public adjustment(rollPercent: number = 0.5): number {
    const { phi } = this;

    if (rollPercent >= 1 / phi) {
      return 1;
    }

    if (rollPercent <= 1 - 1 / phi) {
      return -1;
    }

    return 0;
  }
}
