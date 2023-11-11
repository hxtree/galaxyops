import { DefaultLuckAdjustment } from './DefaultLuckAdjustment';

describe('DefaultLuckAdjustment', () => {
  it('should return 1 for rollPercent >= 1 / phi', () => {
    const luckAdjustment = new DefaultLuckAdjustment();
    expect(luckAdjustment.adjustment(0.8)).toBe(1);
  });

  it('should return -1 for rollPercent <= 1 - 1 / phi', () => {
    const luckAdjustment = new DefaultLuckAdjustment();
    expect(luckAdjustment.adjustment(0.2)).toBe(-1);
  });

  it('should return 0 for other cases', () => {
    const luckAdjustment = new DefaultLuckAdjustment();
    expect(luckAdjustment.adjustment(0.5)).toBe(0);
  });

  // Add more test cases as needed

  // For example, you might want to test the default value for rollPercent
  it('should return 0 when no rollPercent is provided', () => {
    const luckAdjustment = new DefaultLuckAdjustment();
    expect(luckAdjustment.adjustment()).toBe(0);
  });

  // Test the value of phi
  it('should return the correct value for phi', () => {
    const luckAdjustment = new DefaultLuckAdjustment();
    expect(luckAdjustment.phi).toBe((1 + Math.sqrt(5)) / 2);
  });
});
