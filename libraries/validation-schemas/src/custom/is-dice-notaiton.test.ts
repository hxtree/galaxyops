import { validateSync, ValidationError } from 'class-validator';
import { IsDiceNotation } from './is-dice-notation';

describe('IsDiceNotation', () => {
  let testClass: TestClass;

  class TestClass {
    @IsDiceNotation()
    public property: string;
  }

  beforeEach(async () => {
    testClass = new TestClass();
  });

  it.each([['d6'], ['1d6'], ['2d6+3'], ['2d6-2']])(
    'should determine "%i" valid',
    (notation: string) => {
      testClass.property = notation;
      const errors: ValidationError[] = validateSync(testClass);
      expect(errors.length).toBe(0);
    },
  );

  it.each([['string'], [''], ['DD'], [true], [5]])(
    'should determine "%i" invalid',
    (notation: any) => {
      testClass.property = notation;
      const errors: ValidationError[] = validateSync(testClass);
      expect(errors.length).toBe(1);
    },
  );
});
