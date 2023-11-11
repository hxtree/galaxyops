export class GaussianRandom {
  private mean: number;

  private standardDeviation: number;

  constructor(mean: number, standardDeviation: number) {
    this.mean = mean;
    this.standardDeviation = standardDeviation;
  }

  generate(): number {
    // Using the Box-Muller transform to generate a random number with a Gaussian distribution
    const u1 = 1 - Math.random();
    const u2 = 1 - Math.random();
    const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

    // Apply mean and standard deviation
    return this.mean + z0 * this.standardDeviation;
  }
}

export default GaussianRandom;
