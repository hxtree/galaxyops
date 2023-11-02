import { ClassConstructor, plainToInstance } from 'class-transformer';
import { cloneDeep } from 'lodash';
import { Settings } from './settings.type';
import { generateFakeData } from './generate-fake-data';
import { getJsonSchemas } from './get-json-schemas';
import { toPojo } from './pojo';

export class FakerFactory {
  public static create<T>(
    constructor: ClassConstructor<unknown>,
    partial: Partial<T> = {},
    settings?: Settings,
  ): Promise<T> {
    return new FakerFactory().create(constructor, partial, settings);
  }

  public async create<T>(
    constructor: ClassConstructor<unknown>,
    partial: Partial<T> = {},
    settings?: Settings,
  ): Promise<T> {
    const schemas = getJsonSchemas();

    const randomFixture = await generateFakeData(
      schemas[constructor.name],
      schemas,
      settings,
    );
    const partialClone = cloneDeep(partial);
    const objectInstance = plainToInstance(constructor, {
      ...randomFixture,
      ...partialClone,
    });

    if (settings?.pojo === true) {
      return toPojo(objectInstance);
    }

    return objectInstance as T;
  }
}
