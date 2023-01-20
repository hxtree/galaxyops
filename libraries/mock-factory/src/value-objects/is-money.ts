import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

/**
 * Checks if Money "0.00", "101.00", "9999.00"
 *
 * @param property
 * @param validationOptions
 * @returns
 */
export function IsMoney(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isMoney',
      target: object.constructor,
      propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return typeof value === 'string' && typeof relatedValue === 'string';
        },
      },
    });
  };
}
