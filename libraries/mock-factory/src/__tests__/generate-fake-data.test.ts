import { generateFakeData } from '../generate-fake-data';
import { SampleClass } from './sample-class';
import { getSchemas } from '../schemas';

describe('generateFakeData', () => {
  it('should change to schema and back again correctly', async () => {
    const schemas = getSchemas();

    const fakeData = await generateFakeData(schemas[SampleClass.name], schemas);

    const result = fakeData as SampleClass;

    expect(typeof result.boolean).toBe('boolean');
    expect(typeof result.number).toBe('number');
    expect(typeof result.string).toBe('string');
    expect(typeof result.uuid).toBe('string');
    expect(typeof result.currency).toBe('string');
    expect(typeof result.email).toBe('string');
    expect(typeof result.site).toBe('string');
  });
});
