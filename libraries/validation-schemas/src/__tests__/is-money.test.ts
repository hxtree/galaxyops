import { validateSync, ValidationError } from 'class-validator';
import { IsMoney } from '../custom/is-money';

describe('IsMoney', () => {
  class TestClass {
    @IsMoney()
    public property: string;
  }

  let testClass: TestClass;

  beforeEach(async () => {
    testClass = new TestClass();
  });

  it.each([['0.22'], ['100.00'], ['9999.00'], ['0.00']])(
    'should determine "%i" valid',
    (notation: string) => {
      testClass.property = notation;
      const errors: ValidationError[] = validateSync(testClass);
      expect(errors.length).toBe(0);
    },
  );

  it.each([['0.2'], ['00'], ['$9999.00'], ['0'], [0], ['']])(
    'should determine "%i" invalid',
    (notation: any) => {
      testClass.property = notation;
      const errors: ValidationError[] = validateSync(testClass);
      expect(errors.length).toBe(1);
    },
  );
});
