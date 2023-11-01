// eslint-disable-next-line max-classes-per-file
import { Type } from 'class-transformer';
import { IsLongitude, IsString, ValidateNested } from 'class-validator';
import { IsDiceNotation } from '@cats-cradle/validation-schemas';
import { getJsonSchemas } from '../get-json-schemas';

describe('getJsonSchemas', () => {
  it('should get all schemas', () => {
    class BlogPost {
      @IsString()
      public words: string;
    }

    class User {
      @ValidateNested({ each: true })
      @Type(() => BlogPost)
      public blogPosts: BlogPost[];
    }

    const schemas = getJsonSchemas();
    expect(schemas).toEqual({
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

  it('should get accurate pattern for schemas', async () => {
    class TestClass {
      @IsDiceNotation()
      public property: string;
    }
    const schemas = getJsonSchemas();

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

  it('should get accurate pattern for schemas', async () => {
    class Place {
      @IsLongitude()
      public property: string;
    }

    const schemas = getJsonSchemas();

    expect(schemas).toMatchObject({
      Place: {
        properties: {
          property: {
            format: 'longitude',
            type: 'string',
          },
        },
        type: 'object',
        required: ['property'],
      },
    });
  });
});
