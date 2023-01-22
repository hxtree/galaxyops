import 'reflect-metadata';
import { targetConstructorToSchema } from 'class-validator-jsonschema';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { generateFakeData } from './generate-fake-data';

export class MockFactory {
  public static create<T>(
    constructor: ClassConstructor<unknown>,
    partial: Partial<T> = {},
  ): T {
    return new MockFactory().create(constructor, partial);
  }

  public create<T>(
    constructor: ClassConstructor<unknown>,
    partial: Partial<T> = {},
  ): T {
    const schema = targetConstructorToSchema(constructor);
    const randomFixture = generateFakeData(schema);
    const object = { ...randomFixture, ...partial };
    const objectInstance = plainToInstance(constructor, object);

    return objectInstance as T;
  }
}
