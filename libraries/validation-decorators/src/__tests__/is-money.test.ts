import { validateSync, ValidationError } from 'class-validator';
import { IsMoney } from '../custom/is-money';

describe('IsMoney', () => {
  class TestClass {
    @IsMoney()
    public property: string;
  }

  describe('create', () => {
    let testClass: TestClass;

    beforeEach(async () => {
      testClass = new TestClass();
    });

    it('should not error on valid', () => {
      testClass.property = '0.22';
      const errors: ValidationError[] = validateSync(testClass);
      expect(errors.length).toBe(0);
    });

    it('should error on invalid', () => {
      testClass.property = '$0.1';
      const errors: ValidationError[] = validateSync(testClass);
      expect(errors.length).toBe(1);
    });
  });
});
