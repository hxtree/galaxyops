import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsDiceNotationValidator(value: any): boolean {
  return typeof value === 'string' && /(\d+)?d(\d+)([\+\-]\d+)?/.test(value);
}

/**
 * Checks if is dice notation
 *
 * "d4", "2d6", "4d8+2", "3d5+20*3"
 *
 * @param property
 * @param validationOptions
 * @returns
 */
export function IsDiceNotation(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isDiceNotation',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate: IsDiceNotationValidator,
      },
    });
  };
}
