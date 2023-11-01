import 'reflect-metadata';
import { ValidationTypes } from '@cats-cradle/validation-schemas';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { defaultMetadataStorage } from 'class-transformer/cjs/storage';
import { SchemasObject } from 'openapi3-ts';

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
