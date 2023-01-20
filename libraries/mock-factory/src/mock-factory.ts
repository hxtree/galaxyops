import { faker } from '@faker-js/faker';
// import {
//   Type,
//   plainToClass,
//   plainToInstance,
//   ClassConstructor,
// } from 'class-transformer';

// TODO mock type
// import { cloneDeep } from 'lodash';
// export function build(cls: ClassConstructor<unknown>, seed: any): any {
//   const mockSeed = cloneDeep(seed);
//   const mockObject = plainToInstance(cls, plain);

import 'reflect-metadata';
import {
  getMetadataStorage,
  IS_BOOLEAN,
  IS_NUMBER,
  IS_STRING,
  IS_UUID,
  IS_CURRENCY,
  IS_EMAIL,
  IS_FQDN,
} from 'class-validator';
import { ValidationMetadata } from 'class-validator/types/metadata/ValidationMetadata';

export class MockFactory {
  public static create<T>(constructor: Function, partial: Partial<T> = {}): T {
    return new MockFactory().create(constructor, partial);
  }

  public create<T>(constructor: Function, partial: Partial<T> = {}): T {
    const metadataStorage = getMetadataStorage();
    const targetMetadatas = metadataStorage.getTargetValidationMetadatas(
      constructor,
      '',
      false,
      false,
    );
    const groupedMetadatas =
      metadataStorage.groupByPropertyName(targetMetadatas);

    let randomFixture = {} as T;

    for (const propertyName of Object.keys(groupedMetadatas)) {
      // console.log(JSON.stringify(groupedMetadatas));

      const value = this.generatePropertyValueFromMetadatas(
        groupedMetadatas[propertyName],
      );

      if (value !== undefined) {
        randomFixture = {
          ...randomFixture,
          [propertyName]: value,
        };
      }
    }

    // return plainToClass(constructor, { ...randomFixture, ...partial });
    return { ...randomFixture, ...partial };
  }

  private generatePropertyValueFromMetadatas(
    metadatas: ValidationMetadata[],
  ): any {
    for (const metadata of metadatas) {
      const constraints = getMetadataStorage().getTargetValidatorConstraints(
        metadata.constraintCls,
      );

      for (const constraint of constraints) {
        switch (constraint.name) {
          case IS_BOOLEAN:
            return faker.datatype.boolean();
          case IS_NUMBER:
            return Number(faker.random.numeric(10));
          case IS_STRING:
            return faker.random.alpha(10);
          case IS_UUID:
            return faker.datatype.uuid();
          case IS_CURRENCY:
            return `${faker.finance.amount(5, 10)}`;
          case IS_EMAIL:
            return faker.internet.email();
          case IS_FQDN:
            return faker.internet.url();
          default:
            break;
        }
      }
    }

    return undefined;
  }
}
