import { MockFactory } from '../mock-factory';
import { ExampleClass } from './example-class';

describe('MockFactory', () => {
  describe('create', () => {
    let mock: ExampleClass;

    beforeAll(async () => {
      mock = MockFactory.create<ExampleClass>(ExampleClass);
    });

    it('should create a mock object', () => {
      expect(typeof mock).toBe('object');
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
