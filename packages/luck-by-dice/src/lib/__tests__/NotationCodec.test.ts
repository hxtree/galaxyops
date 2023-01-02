import { Collection } from '../Collection';
import { Cup } from '../Cup';
import { Dice } from '../Dice';
import { NotationCodec } from '../NotationCodec';

describe('NotationCodec', () => {
  // decode - notation to object

  test('.decodeDice()', () => {
    const notationCodec = new NotationCodec();
    const diceFromNotation = notationCodec.decodeDice('d6');
    const diceObject = new Dice(6);

    expect(diceObject).toEqual(diceFromNotation);
  });

  test.each([
    { input: '1d6', output: new Collection(1, 6) },
    { input: '1d8', output: new Collection(1, 8) },
    { input: '2d10', output: new Collection(2, 10) },
    { input: 'd%', output: new Collection(1, 100) },
    { input: 'd%+2', output: new Collection(1, 100, 2) },
    { input: 'd%+3*7', output: new Collection(1, 100, 3, 7) },
    { input: '200d2+1', output: new Collection(200, 2, 1) },
    { input: 'd20+100', output: new Collection(1, 20, 100) },
    { input: 'd50-7', output: new Collection(1, 50, -7) },
    { input: '2d50-7', output: new Collection(2, 50, -7) },
    { input: 'd5*10', output: new Collection(1, 5, 0, 10) },
    { input: 'd5+20*1000', output: new Collection(1, 5, 20, 1000) },
    {
      input: '1000d1000+1000*1000',
      output: new Collection(1000, 1000, 1000, 1000),
    },
  ])('.decodeCollection($a)', ({ input, output }) => {
    const notationCodec = new NotationCodec();
    expect(notationCodec.decodeCollection(input)).toEqual(output);
  });

  test('.decodeCup()', () => {
    const notationCodec = new NotationCodec();
    const cup = new Cup();
    cup.push(new Collection(1, 6));
    cup.push(new Collection(1, 8));
    cup.push(new Collection(2, 10));
    cup.push(new Collection(1, 100));
    cup.push(new Collection(1, 100, 2));

    const output = notationCodec.decodeCup('d6,1d8,2d10,d%,d%+2');

    expect(output).toEqual(cup);
  });

  // encode -- object to notation

  test('.encodeDice()', () => {
    const notationCodec = new NotationCodec();
    const dice = new Dice(6);
    const notation = notationCodec.encodeDice(dice);

    expect(notation).toBe('d6');
  });

  test('.encodeCollection()', () => {
    const notationCodec = new NotationCodec();
    const collection = new Collection(2, 3, 4, 5);
    const notation = notationCodec.encodeCollection(collection);

    expect(notation).toBe('2d3+4*5');
  });

  test('.encodeCup()', () => {
    const notationCodec = new NotationCodec();
    const cup = new Cup();
    cup.push(new Collection(1, 6));
    cup.push(new Collection(1, 8));
    cup.push(new Collection(2, 10));
    cup.push(new Collection(1, 100));
    cup.push(new Collection(1, 100, 2));

    const notation = notationCodec.encodeCup(cup);

    expect(notation).toBe('d6,d8,2d10,d%,d%+2');
  });
});
