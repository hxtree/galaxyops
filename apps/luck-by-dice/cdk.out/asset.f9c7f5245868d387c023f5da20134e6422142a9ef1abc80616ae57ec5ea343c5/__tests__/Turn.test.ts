import { NotationCodec } from '../components/NotationCodec';
import { Turn } from '../components/Turn';

describe('Turn', () => {
    test('.constructor()', () => {
        const turn = new Turn('d6,10d12+2*2',0);
        const notationCodec = new NotationCodec();
        const cup = notationCodec.decodeCup('d6,10d12+2*2');
        expect(turn.cup).toEqual(cup);
    });

    test('get notation()', () => {
        const turn = new Turn('d6,10d12+2*2',0);
        expect(turn.notation).toBe('d6,10d12+2*2');
    });

    test('set notation()', () => {
        const turn = new Turn('d6',0);
        turn.notation = 'd8';
        expect(turn.notation).toBe('d8');
    });
    
    
    test('get luck()', () => {
        const turn = new Turn('d6,10d12+2*2',10);
        expect(turn.luck.value).toBe(10);
    });

    test('set luck()', () => {
        const turn = new Turn('d6',0);
        turn.luck.value = 8;
        expect(turn.luck.value).toBe(8);
    });

    test('get cup()', () => {
        const turn = new Turn('d6,10d12+2*2',10);
        const notationCodec = new NotationCodec();
        const cup = notationCodec.decodeCup('d6,10d12+2*2');
        expect(turn.cup).toEqual(cup);
    });

    test('set cup()', () => {
        const turn = new Turn('d6',0);
        const notationCodec = new NotationCodec();
        const cup = notationCodec.decodeCup('d6,10d12+2*2');
        turn.cup = cup;
        expect(turn.cup).toEqual(cup);
    });

    test('roll() greater than', () => {
        const turn = new Turn('10d6',0);
        expect(turn.roll()).toBeGreaterThanOrEqual(10);
    });

    test('roll() less than', () => {
        const turn = new Turn('10d6',0);
        expect(turn.roll()).toBeLessThanOrEqual(60);
    });

    test('minPotential()', () => {
        const turn = new Turn('10d6',0);
        expect(turn.minPotential()).toBe(10);
    });
    
    test('maxPotential()', () => {
        const turn = new Turn('10d6',0);
        expect(turn.maxPotential()).toBe(60);
    });

    test('Total should not be 100% every time', () => {
        // 1 out of a million chance of failing
        const turn = new Turn('1000000d6',0);
        const outcome = turn.roll();
        expect(outcome).toBeLessThan(6000000);
    });

});