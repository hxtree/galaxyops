export class ObfuscateCounter {
  private xorDecimal: Record<string, string> = {
    0: '4',
    1: '7',
    2: '6',
    3: '8',
    4: '0',
    5: '5',
    6: '2',
    7: '1',
    8: '3',
    9: '9',
  };

  private seedString: string = '';

  private decryptedString: string = '';

  private incrementString: string = '';

  private encryptedString: string = '';

  private xor(input: string): string {
    let output = '';
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      output += this.xorDecimal[char];
    }
    return output;
  }

  private split(input: string): { left: string; right: string } {
    const { length } = input;
    const midpoint = length / 2;
    return {
      left: input.substring(0, midpoint),
      right: input.substring(midpoint, length),
    };
  }

  private increment(input: string): string {
    const { length } = input;
    const max = '9'.repeat(length);
    let number = parseInt(input, 10);
    number++;
    if (number > parseInt(max, 10)) {
      number = 0;
    }
    return number.toString().padStart(length, '0');
  }

  private process(seed: string): string {
    if (seed.length % 2 !== 0) {
      throw new Error('Only works on even-numbered digits');
    }
    const parts = this.split(seed);
    return this.xor(parts.right) + this.xor(parts.left);
  }

  public run(seed: string): string {
    this.seedString = seed;
    this.decryptedString = this.process(seed);
    this.incrementString = this.increment(this.decryptedString);
    this.encryptedString = this.process(this.incrementString);

    return this.encryptedString;
  }

  public debugInfo(): Record<string, string> {
    return {
      seed: this.seedString,
      decrypted: this.decryptedString,
      increment: this.incrementString,
      encrypted: this.encryptedString,
    };
  }
}
