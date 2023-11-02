import 'reflect-metadata';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { defaultMetadataStorage } from 'class-transformer/cjs/storage';
import { SchemasObject } from 'openapi3-ts';

/**
 * Determines how JSONSchema is created from validation schema decorators
 * @returns
 */
export function getJsonSchemas(): SchemasObject {
  return validationMetadatasToSchemas({
    refPointerPrefix: '',
    classTransformerMetadataStorage: defaultMetadataStorage,
    /**
     * Add support for faking additional class-validator decorators by
     * specifying the format that gets carried over to JSON schema faker.
     *
     * {@link} https://www.npmjs.com/package/class-validator-jsonschema
     */
    additionalConverters: {
      isMoney: {
        format: 'money',
        type: 'string',
      },
      isLongitude: {
        format: 'longitude',
        type: 'string',
      },
      isLatitude: {
        format: 'latitude',
        type: 'string',
      },
    },
  });
}
