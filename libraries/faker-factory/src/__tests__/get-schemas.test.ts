import { IsDiceNotation } from '@cats-cradle/validation-schemas';
import { getSchemas } from '../get-schemas';

describe('getSchemas', () => {
  let testClass: TestClass;

  class TestClass {
    @IsDiceNotation()
    public property: string;
  }

  beforeEach(async () => {
    testClass = new TestClass();
  });

  it('should get accurate pattern for schemas', async () => {
    const schemas = getSchemas();

    expect(schemas).toMatchObject({
      TestClass: {
        properties: {
          property: {
            pattern: /(\d+)?d(\d+)([+-]\d+)?/,
            type: 'string',
          },
        },
        type: 'object',
        required: ['property'],
      },
    });
  });
});
