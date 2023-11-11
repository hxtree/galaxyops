export class FisherYatesShuffle {
  run(seed: string): string {
    const array = seed.split('');

    for (let i = 0; i < array.length; ++i) {
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }

    return array.join('');
  }
}
