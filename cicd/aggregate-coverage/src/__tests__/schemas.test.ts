// eslint-disable-next-line max-classes-per-file
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { getSchemas } from '../schemas';

class BlogPost {
  @IsString()
  public words: string;
}

class User {
  @ValidateNested({ each: true })
  @Type(() => BlogPost)
  public blogPosts: BlogPost[];
}

describe('getSchemas', () => {
  it('should get all schemas', () => {
    const schemas = getSchemas();
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
});
