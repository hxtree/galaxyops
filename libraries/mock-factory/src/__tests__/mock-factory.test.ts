import { MockFactory } from '../mock-factory';
import { ExampleClass, ExampleEnum } from './example-class';

describe('MockFactory', () => {
  describe('create', () => {
    let mock: ExampleClass;

    beforeAll(() => {
      mock = MockFactory.create<ExampleClass>(ExampleClass);
    });

    it('should create a mock object', () => {
      expect(typeof mock).toBe('object');
    });

    it('should create correct instance', () => {
      expect(mock).toBeInstanceOf(ExampleClass);
    });

    it('should create boolean based on decorators', () => {
      expect(typeof mock.boolean).toBe('boolean');
    });

    it('should create number based on decorators', () => {
      expect(typeof mock.number).toBe('number');
    });

    it('should create string based on decorators', () => {
      expect(typeof mock.string).toBe('string');
    });

    it('should create uuid based on decorators', () => {
      expect(typeof mock.uuid).toBe('string');
    });

    it('should create currency based on decorators', () => {
      expect(typeof mock.currency).toBe('string');
    });

    it('should create email based on decorators', () => {
      expect(typeof mock.email).toContain('string');
      expect(mock.email).toContain('@');
    });

    it('should create site based on decorators', () => {
      expect(typeof mock.site).toContain('string');
      expect(mock.site).toContain('.');
    });

    it('should create date on decorators', () => {
      expect(typeof mock.date).toContain('string');
    });

    it('should create enum of defined type', () => {
      const enumValues = Object.values(ExampleEnum);
      expect(enumValues.includes(mock.enum));
    });

    it('should create int between min and max', () => {
      expect(mock.rating).toBeGreaterThanOrEqual(0);
      expect(mock.rating).toBeLessThanOrEqual(10);
    });

    it('should create string that contains value', () => {
      expect(mock.haystack.includes('needle'));
    });

    it('should create mock object using seeded data', async () => {
      const partial = {
        number: 2131,
        string: 'Test data',
        boolean: true,
      };
      mock = MockFactory.create<ExampleClass>(ExampleClass, partial);

      expect(mock.number).toBe(partial.number);
      expect(mock.string).toBe(partial.string);
      expect(mock.boolean).toBe(partial.boolean);
    });

    // it('should create nested objects based on decorators', () => {
    //   expect(typeof mock.exampleChildClass).toBeInstanceOf(ExampleChildClass);
    // });
  });
});
