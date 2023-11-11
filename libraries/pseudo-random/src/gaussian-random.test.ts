import { GaussianRandom } from './gaussian-random';

describe('GaussianRandom', () => {
  it.each(Array.from({ length: 100 }, (_, index) => index * 9997))(
    'Run %i: should generate numbers with a Gaussian distribution',
    (seed) => {
      const gaussianRandom = new GaussianRandom(0, 1);
      const seedString = seed.toString().padStart(8, '0');

      const result = gaussianRandom.generate(seedString);

      // Snapshot to ensure consistent results across runs
      expect(result).toMatchSnapshot();
    },
  );
});
