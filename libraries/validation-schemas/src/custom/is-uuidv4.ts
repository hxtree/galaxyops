import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsUuidV4Validator(value: any): boolean {
  return (
    typeof value === 'string' &&
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89AB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i.test(
      value,
    )
  );
}

/**
 * Checks if is valid UUID version 4
 *
 * "3112b3db-c1ef-4cc2-994b-306d75834277"
 *
 * @param property
 * @param validationOptions
 * @returns
 */
export function IsUuidV4(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isUuidV4',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate: IsUuidV4Validator,
      },
    });
  };
}
