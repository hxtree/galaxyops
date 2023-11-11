/* eslint  max-classes-per-file: 0 */
import { AbstractLuckAdjustment } from './AbstractLuckAdjustment';

describe('AbstractLuckAdjustment', () => {
  class MockLuckAdjustment extends AbstractLuckAdjustment {
    adjustment(rollPercent: number): number {
      return 0;
    }
  }

  it('should have default min value of 0 and max value of 2147483647', () => {
    const luckAdjustment = new MockLuckAdjustment();
    expect(luckAdjustment.min).toBe(0);
    expect(luckAdjustment.max).toBe(2147483647);
  });

  it('should set and get min and max values correctly', () => {
    const luckAdjustment = new MockLuckAdjustment();
    luckAdjustment.min = -10;
    luckAdjustment.max = 100;
    expect(luckAdjustment.min).toBe(-10);
    expect(luckAdjustment.max).toBe(100);
  });

  it('should calculate adjustment and adjusted luck correctly', () => {
    const luckAdjustment = new MockLuckAdjustment();
    luckAdjustment.min = 0;
    luckAdjustment.max = 10;

    const currentLuck = 5;
    const rollPercent = 0.5;

    const adjustment = luckAdjustment.adjustment(rollPercent);
    const adjustedLuck = luckAdjustment.run(currentLuck, rollPercent);

    expect(adjustedLuck).toBe(currentLuck + adjustment);
  });

  it('should handle adjusted luck exceeding max value', () => {
    class MockPlusLuckAdjustment extends AbstractLuckAdjustment {
      adjustment(rollPercent: number): number {
        return 10;
      }
    }

    const luckAdjustment = new MockPlusLuckAdjustment();
    luckAdjustment.min = 0;
    luckAdjustment.max = 10;

    const currentLuck = 8;
    const rollPercent = 0.9;

    const adjustedLuck = luckAdjustment.run(currentLuck, rollPercent);

    expect(adjustedLuck).toBe(luckAdjustment.max);
  });

  it('should handle adjusted luck falling below min value', () => {
    class MockNegativeLuckAdjustment extends AbstractLuckAdjustment {
      adjustment(rollPercent: number): number {
        return -10;
      }
    }

    const luckAdjustment = new MockNegativeLuckAdjustment();
    luckAdjustment.min = 0;
    luckAdjustment.max = 10;

    const currentLuck = 2;
    const rollPercent = 0.1;

    const adjustedLuck = luckAdjustment.run(currentLuck, rollPercent);

    expect(adjustedLuck).toBe(luckAdjustment.min);
  });
});
