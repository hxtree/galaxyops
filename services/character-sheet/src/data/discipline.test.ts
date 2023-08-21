import { canLearn } from './discipline';

describe('canLearn', () => {
  it('should not be able to learn without prerequisite', () => {
    const result = canLearn('MAGI_YELLOW', []);

    expect(result).toBe(false);
  });

  it('should be able to learn with prerequisite', () => {
    const result = canLearn('MAGI_YELLOW', ['MAGI']);

    expect(result).toBe(true);
  });
});
