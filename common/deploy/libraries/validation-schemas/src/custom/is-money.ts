import { registerDecorator, ValidationOptions } from 'class-validator';
import currency from 'currency.js';

export function isMoneyValidator(value: any): boolean {
  const formatted = currency(value, {
    symbol: '',
    separator: '',
    precision: 2,
    decimal: '.',
  }).format();
  return typeof value === 'string' && value === formatted;
}

/**
 * Checks if Money "0.00", "101.00", "9999.00"
 *
 * All money is communicated without separator, with a decimal, and percision 2.
 *
 * @param property
 * @param validationOptions
 * @returns
 */
export function IsMoney(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isMoney',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate: isMoneyValidator,
      },
    });
  };
}
