// eslint-disable-next-line max-classes-per-file
import {
  Type,
  IsString,
  ValidateNested,
} from '@galaxyops/validation-schemas';
import { getJsonSchemas } from './get-json-schemas';

describe('getJsonSchemas', () => {
  it.each([
    ['longitude', 'longitude'],
    ['latitude', 'latitude'],
    ['money', 'money'],
  ])(
    'should determine "%s" property to have JSONSchema format "%s"',
    async (property: string, value: any) => {
      const { SampleClass } = require('./__tests__/sample-class');
      const schemas = getJsonSchemas();
      expect(schemas.SampleClass.properties).toHaveProperty(
        property,
        expect.objectContaining({ format: value, type: 'string' }),
      );
    },
  );

  it.each([
    ['diceNotation', '(\\d+)?d(\\d+)([+-]\\d+)?'],
    [
      'uuidV4',
      '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89AB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$',
    ],
  ])(
    'should determine "%s" property to have JSONSchema pattern "%s"',
    async (property: string, value: string) => {
      const { SampleClass } = require('./__tests__/sample-class');
      const schemas = getJsonSchemas();
      expect(schemas.SampleClass.properties).toHaveProperty(property);
      expect(schemas.SampleClass.properties).toHaveProperty(
        property,
        expect.objectContaining({
          pattern: value,
          type: 'string',
        }),
      );
    },
  );

  it('should ref ValidateNested schemas', () => {
    class BlogPost {
      @IsString()
      public words: string;
    }

    class User {
      @ValidateNested({ each: true })
      @Type(() => BlogPost)
      public blogPosts: BlogPost[];
    }

    expect(getJsonSchemas()).toMatchObject({
      BlogPost: {
        properties: { words: { type: 'string' } },
        required: ['words'],
        type: 'object',
      },
      User: {
        properties: {
          blogPosts: { items: { $ref: 'BlogPost' }, type: 'array' },
        },
        required: ['blogPosts'],
        type: 'object',
      },
    });
  });
});
