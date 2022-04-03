import {
  Active,
  Luck,
} from '../Luck';
import {FickleLuckAdjustment} from '../LuckAdjustment/FickleLuckAdjustment';

describe('Luck', () => {

    test.each([[Active.enable],[Active.disable]])('status()', (status) => {
        const luck = new Luck(0);
        luck.status = status;
        expect(luck.status).toEqual(status)
    });

    test('value()', () => {
        const luck = new Luck(0);
        luck.value = 6;
        expect(luck.value).toBe(6)
    });

    test('algorithm()', () => {
        const luck = new Luck(0);
        luck.algorithm = new FickleLuckAdjustment();
        expect(luck.algorithm).toBeInstanceOf(FickleLuckAdjustment)
    });

    test('applicablePercent() greater than 0', () => {
        const luck = new Luck(100);        
        expect(luck.applicablePercent).toBeGreaterThanOrEqual(0);
    });

    test('applicablePercent() less than 10', () => {
        const luck = new Luck(100);        
        expect(luck.applicablePercent).toBeLessThanOrEqual(10);
    });

    test('modify() greater than', () => {
        const luck = new Luck(100);
        const roll = 1;
        const newRoll = luck.modify(roll);    
        expect(newRoll).toBeGreaterThanOrEqual(roll);
    });

    test('modify() less than', () => {
        const luck = new Luck(1);
        const roll = 10;
        const newRoll = luck.modify(roll);    
        expect(newRoll).toBeLessThanOrEqual(roll);
    });

    test('modify() a lot', () => {
        const luck = new Luck(100000000000);
        const roll = 10;
        const newRoll = luck.modify(roll);
        expect(newRoll).toBeGreaterThan(roll);
    });
});
