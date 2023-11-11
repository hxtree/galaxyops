import { ObfuscateCounter } from './obfuscate-counter';

export class GaussianRandom {
  private mean: number;

  private standardDeviation: number;

  private obfuscateCounter;

  constructor(mean: number, standardDeviation: number) {
    this.obfuscateCounter = new ObfuscateCounter();
    this.mean = mean;
    this.standardDeviation = standardDeviation;
  }

  generate(seed: string): number {
    // Using the Box-Muller transform to generate a random number with a Gaussian distribution
    const counter = Number(this.obfuscateCounter.run(seed));
    const max = Number('9'.repeat(seed.length));
    const fraction1 = counter / max;
    const fraction2 = counter / max;

    const u1 = 1 - fraction1;
    const u2 = 1 - fraction2;
    const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

    // Apply mean and standard deviation
    return this.mean + z0 * this.standardDeviation;
  }
}

export default GaussianRandom;
