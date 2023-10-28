import { ClassConstructor, plainToInstance } from 'class-transformer';
import { cloneDeep } from 'lodash';
import { Settings } from './settings';
import { generateFakeData } from './generate-fake-data';
import { getSchemas } from './schemas';
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
    const schemas = getSchemas();
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
