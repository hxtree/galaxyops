import { FisherYatesShuffle } from './fisher-yates-shuffle';

describe('FisherYatesShuffle', () => {
  it('should shuffle the seed string', () => {
    const fisherYatesShuffle = new FisherYatesShuffle();
    const seed = 'abcdefghijklmnopqrstuvwxyz';

    const result = fisherYatesShuffle.run(seed);

    // Check if the length is the same
    expect(result.length).toEqual(seed.length);

    // Check if the characters are still the same after shuffling
    expect([...seed].every((char) => result.includes(char))).toBe(true);

    // Check if the order is different, indicating a shuffle
    expect(result).not.toEqual(seed);
  });

  it('should handle an empty string', () => {
    const fisherYatesShuffle = new FisherYatesShuffle();
    const seed = '';

    const result = fisherYatesShuffle.run(seed);

    // Expect an empty string as the result
    expect(result).toEqual('');
  });

  it('should handle a string with one character', () => {
    const fisherYatesShuffle = new FisherYatesShuffle();
    const seed = 'a';

    const result = fisherYatesShuffle.run(seed);

    // Expect the result to be the same as the input (no shuffle possible)
    expect(result).toEqual(seed);
  });

  it('should handle a string with repeated characters', () => {
    const fisherYatesShuffle = new FisherYatesShuffle();
    const seed = 'aaaaaa';

    const result = fisherYatesShuffle.run(seed);

    // Expect the result to have the same characters as the input, but in a different order
    expect([...seed].every((char) => result.includes(char))).toBe(true);
  });
});
