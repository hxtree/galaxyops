import { Collection } from './Collection';

describe('Collection', () => {
  test('Notation returns correct values', () => {
    const collection = new Collection(1, 6);
    expect(collection.notation).toBe('d6');
  });

  test('Notation returns correct values with modifier', () => {
    const collection = new Collection(10, 100, 10);
    expect(collection.notation).toBe('10d%+10');
  });

  test('Notation returns correct values with modifier and multipler', () => {
    const collection = new Collection(100, 4, 2, 4);
    expect(collection.notation).toBe('100d4+2*4');
  });

  test('Count returns correct value', () => {
    const collection = new Collection(6, 10);
    expect(collection.count()).toBe(6);
  });

  test('Set bonus is absorbed by dice and sets excess', () => {
    const collection = new Collection(10, 8);

    for (let i: number = 0; i < collection.dice.length; i++) {
      collection.dice[i].value = 4;
    }

    collection.bonus = 41;
    expect(collection.excess).toBe(1);
  });

  test('Total natural adds up correctly', () => {
    const collection = new Collection(10, 8);

    for (let i: number = 0; i < collection.dice.length; i++) {
      collection.dice[i].value = 4;
    }

    expect(collection.total).toBe(40);
  });

  test('Total adds up correctly', () => {
    const collection = new Collection(10, 8, 2, 10);

    for (let i: number = 0; i < collection.dice.length; i++) {
      collection.dice[i].value = 4;
    }

    expect(collection.total).toBe(420);
  });

  test('Total should not be 100% every time', () => {
    // 1 out of a million chance of failing
    const collection = new Collection(1000000, 6);
    expect(collection.roll()).toBeLessThan(6000000);
  });
});
