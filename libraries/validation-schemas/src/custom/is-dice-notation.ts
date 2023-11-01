import { Matches, matches, ValidationOptions } from 'class-validator';

export const DICE_NOTATION_REGEX = /(\d+)?d(\d+)([+-]\d+)?/;

export function IsDiceNotationValidator(value: string) {
  return matches(value, DICE_NOTATION_REGEX);
}

/**
 * Checks if is dice notation, e.g. "d4", "2d6", "4d8+2", "3d5+20*3"
 * @param validationOptions
 * @returns
 */
export function IsDiceNotation(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return Matches(DICE_NOTATION_REGEX, validationOptions);
}
