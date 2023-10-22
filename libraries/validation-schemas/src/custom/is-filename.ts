import { registerDecorator, ValidationOptions } from 'class-validator';

// TODO should a path be a valid filename? File name vs filepath?
export function IsFilenameValidator(value: any): boolean {
  if (!value || value.length < 1 || value.length > 255) {
    return false;
  }

  // filename reserved regex
  if (/[<>:"/\\|?*\u0000-\u001F]/g.test(value)) {
    return false;
  }

  // windowsReservedNameRegex
  if (/^(con|prn|aux|nul|com\d|lpt\d)$/i.test(value)) {
    return false;
  }

  if (value === '.' || value === '..') {
    return false;
  }

  return true;
}

/**
 * Checks if valid filename
 *
 * "example.pdf", "my-documents.txt"
 *
 * @param property
 * @param validationOptions
 * @returns
 */
export function IsFilename(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isFilename',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate: IsFilenameValidator,
      },
    });
  };
}
