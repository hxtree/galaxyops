import { validateSync, ValidationError } from 'class-validator';
import { IsUuidV4 } from '../custom/is-uuidv4';

describe('IsMoney', () => {
  class TestClass {
    @IsUuidV4()
    public property: string;
  }

  let testClass: TestClass;

  beforeEach(async () => {
    testClass = new TestClass();
  });

  it.each([['3112b3db-c1ef-4cc2-994b-306d75834277']])(
    'should determine "%i" valid',
    (notation: string) => {
      testClass.property = notation;
      const errors: ValidationError[] = validateSync(testClass);
      expect(errors.length).toBe(0);
    },
  );

  it.each([['rawawadad-sada-2']])(
    'should determine "%i" invalid',
    (notation: any) => {
      testClass.property = notation;
      const errors: ValidationError[] = validateSync(testClass);
      expect(errors.length).toBe(1);
    },
  );
});
