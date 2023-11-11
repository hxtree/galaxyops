import { GaussianRandom } from './gaussian-random';

describe('GaussianRandom', () => {
  it.each(Array.from({ length: 100 }, (_, index) => index + 1))(
    'Run %i: should generate numbers with a Gaussian distribution',
    (runNumber) => {
      const gaussianRandom = new GaussianRandom(0, 1);

      const result = gaussianRandom.generate();

      // Snapshot to ensure consistent results across runs
      expect(result).toMatchSnapshot();
    },
  );

  it('should generate numbers with the specified mean and standard deviation', () => {
    const mean = 5;
    const standardDeviation = 2;
    const gaussianRandom = new GaussianRandom(mean, standardDeviation);

    const result = gaussianRandom.generate();

    // Check if the result is within an acceptable range based on the mean and standard deviation
    expect(result).toBeGreaterThanOrEqual(mean - 3 * standardDeviation);
    expect(result).toBeLessThanOrEqual(mean + 3 * standardDeviation);
  });
});
