import { validateSync, ValidationError } from 'class-validator';
import { IsFilename } from './is-filename';

describe('IsFilename', () => {
  class TestClass {
    @IsFilename()
    public property: string;
  }

  let testClass: TestClass;

  beforeEach(async () => {
    testClass = new TestClass();
  });

  it.each([
    ['example.pdf'],
    ['a'],
    [
      'very-long-filename-example-shown-here-in-text-today-which-is-or-should-be.csv',
    ],
    ['Once Upon A Time.docx'],
  ])('should determine "%i" valid', (value: string) => {
    testClass.property = value;
    const errors: ValidationError[] = validateSync(testClass);
    expect(errors.length).toBe(0);
  });

  it.each([
    [''],
    ['../filename.csv'],
    ['//'],
    [undefined],
    [0],
    [null],
    ['/etc/shadowpassword'],
  ])('should determine "%i" invalid', (value: any) => {
    testClass.property = value;
    const errors: ValidationError[] = validateSync(testClass);
    expect(errors.length).toBe(1);
  });
});
