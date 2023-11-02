import { FakerFactory } from './faker-factory';
import {
  SampleClass,
  SampleChildClass,
  SampleEnum,
} from './__tests__/sample-class';

describe('FakerFactory', () => {
  describe('create', () => {
    let faker: SampleClass;

    beforeEach(async () => {
      faker = await FakerFactory.create<SampleClass>(SampleClass);
    });

    it('should create a pojo faker object', async () => {
      faker = await FakerFactory.create<SampleClass>(
        SampleClass,
        {},
        { pojo: true },
      );
      expect(typeof faker).toBe('object');
    });

    it('should create a faker object', () => {
      expect(typeof faker).toBe('object');
    });

    it('should create correct instance', () => {
      expect(faker).toBeInstanceOf(SampleClass);
    });

    it('should create boolean based on decorators', () => {
      expect(typeof faker.boolean).toBe('boolean');
    });

    it('should create number based on decorators', () => {
      expect(typeof faker.number).toBe('number');
    });

    it('should create string based on decorators', () => {
      expect(typeof faker.string).toBe('string');
    });

    it('should create uuid based on decorators', () => {
      expect(typeof faker.uuid).toBe('string');
    });

    it('should create email based on decorators', () => {
      expect(typeof faker.email).toContain('string');
      expect(faker.email).toContain('@');
    });

    it('should create site based on decorators', () => {
      expect(typeof faker.site).toContain('string');
      expect(faker.site).toContain('.');
    });

    it('should create enum of defined type', () => {
      const enumValues = Object.values(SampleEnum);
      expect(enumValues.includes(faker.enum));
    });

    it('should create int between min and max', () => {
      expect(faker.rating).toBeGreaterThanOrEqual(0);
      expect(faker.rating).toBeLessThanOrEqual(10);
    });

    it('should create string that contains value', () => {
      expect(faker.haystack.includes('needle'));
    });

    it('should create faker object using seeded data', async () => {
      const partial = {
        number: 2131,
        string: 'Test data',
        boolean: true,
      };
      faker = await FakerFactory.create<SampleClass>(SampleClass, partial);

      expect(faker.number).toBe(partial.number);
      expect(faker.string).toBe(partial.string);
      expect(faker.boolean).toBe(partial.boolean);
    });

    it('should create property objects based on decorators', () => {
      expect(faker.childClass).toBeInstanceOf(SampleChildClass);
    });

    it('should populate optional params some of the time based on decorators', () => {
      expect(
        faker.optional === undefined || faker.optional.length > 0,
      ).toBeTruthy();
    });
  });
});
