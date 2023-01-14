import { faker } from '@faker-js/faker';
import { Type, plainToInstance, ClassConstructor } from 'class-transformer';
import { cloneDeep } from 'lodash';

export function build(cls: ClassConstructor<unknown>, seed: any): any {
  const mockSeed = cloneDeep(seed);

  // Partial<User> = {};

  const plain = mockSeed;

  const mockObject = plainToInstance(cls, plain);

  return mockObject;
}
