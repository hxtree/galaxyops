import { ClassConstructor, plainToInstance } from 'class-transformer';
import { cloneDeep } from 'lodash';
import { CreateManySettings, CreateSettings } from './settings.type';
import { generateFakeData } from './generate-fake-data';
import { getJsonSchemas } from './get-json-schemas';
import { toPojo } from './pojo';

export class FakerFactory {
  public getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public static createMany<T>(
    constructor: ClassConstructor<unknown>,
    partial: Partial<T> = {},
    settings?: CreateManySettings,
  ): Promise<T[]> {
    return new FakerFactory().createMany(constructor, partial, settings);
  }

  public async createMany<T>(
    constructor: ClassConstructor<unknown>,
    partial: Partial<T> = {},
    settings?: CreateManySettings,
  ): Promise<T[]> {
    const factory = new FakerFactory();
    const fakes = [];
    const min = settings?.min ?? 1;
    const max = settings?.max ?? 10;
    const amount = factory.getRandomInt(min, max);

    for (let i = 0; i < amount; i++) {
      const fake = await factory.create(constructor, partial, settings);
      fakes.push(fake);
    }
    return Promise.resolve(fakes);
  }

  public static create<T>(
    constructor: ClassConstructor<unknown>,
    partial: Partial<T> = {},
    settings?: CreateSettings,
  ): Promise<T> {
    return new FakerFactory().create(constructor, partial, settings);
  }

  public async create<T>(
    constructor: ClassConstructor<unknown>,
    partial: Partial<T> = {},
    settings?: CreateSettings,
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
