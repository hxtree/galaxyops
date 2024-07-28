import { FickleLuckAdjustment } from './FickleLuckAdjustment';

describe('FickleLuckAdjustment', () => {
  it('should return -2 for rollPercent <= 0.1', () => {
    const luckAdjustment = new FickleLuckAdjustment();
    expect(luckAdjustment.adjustment(0.1)).toBe(-2);
  });

  it('should return -1 for 0.1 < rollPercent <= 0.2', () => {
    const luckAdjustment = new FickleLuckAdjustment();
    expect(luckAdjustment.adjustment(0.15)).toBe(-1);
  });

  it('should return 1 for rollPercent >= 0.8', () => {
    const luckAdjustment = new FickleLuckAdjustment();
    expect(luckAdjustment.adjustment(0.8)).toBe(1);
  });

  it('should return 2 for rollPercent >= 0.9', () => {
    const luckAdjustment = new FickleLuckAdjustment();
    expect(luckAdjustment.adjustment(0.9)).toBe(2);
  });

  it('should return 0 for other cases', () => {
    const luckAdjustment = new FickleLuckAdjustment();
    expect(luckAdjustment.adjustment(0.5)).toBe(0);
  });

  // Add more test cases as needed

  // For example, you might want to test the default value for rollPercent
  it('should return 0 when no rollPercent is provided', () => {
    const luckAdjustment = new FickleLuckAdjustment();
    expect(luckAdjustment.adjustment()).toBe(0);
  });
});
