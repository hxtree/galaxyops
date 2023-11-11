import { ObfuscateCounter } from './obfuscate-counter';

const obfuscateCounter = new ObfuscateCounter();

describe('ObfuscateCounter', () => {
  it.each(Array.from({ length: 100 }, (_, index) => index * 55279))(
    'Run %i: should encrypt and increment correctly',
    (value: number) => {
      const seed = String(value).padStart(8, '0');
      const result = obfuscateCounter.run(seed);
      expect(result).toMatchSnapshot();
    },
  );

  it.each([
    '1',
    '111',
    '11111',
    '1111111',
    '111111111',
    '11111111111',
    '1111111111111',
    '111111111111111',
  ])(
    'Seed %i: should throw an error for odd-numbered digits',
    async (value: string) => {
      expect(() => obfuscateCounter.run(String(value))).toThrowError();
    },
  );
});
