import { Matches, matches, ValidationOptions } from 'class-validator';

export const UUID_V4_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89AB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;

export function IsUuidV4Validator(value: string) {
  return matches(value, UUID_V4_REGEX);
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
export function IsUuidV4(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return Matches(UUID_V4_REGEX, validationOptions);
}
