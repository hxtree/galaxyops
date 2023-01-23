import { targetConstructorToSchema } from 'class-validator-jsonschema';
import { generateFakeData } from '../generate-fake-data';
import { ExampleClass } from './example-class';

describe('generateFakeData', () => {
  it('should change to schema and back again correctly', async () => {
    const exampleClassSchema = targetConstructorToSchema(ExampleClass);
    const fakeData = generateFakeData(exampleClassSchema);
    const result = fakeData as ExampleClass;

    expect(typeof result.boolean).toBe('boolean');
    expect(typeof result.number).toBe('number');
    expect(typeof result.string).toBe('string');
    expect(typeof result.uuid).toBe('string');
    expect(typeof result.currency).toBe('string');
    expect(typeof result.email).toBe('string');
    expect(typeof result.site).toBe('string');
  });
});
