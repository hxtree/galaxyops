import 'reflect-metadata';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { defaultMetadataStorage } from 'class-transformer/cjs/storage';
import { SchemasObject } from 'openapi3-ts';

export function getSchemas(): SchemasObject {
  return validationMetadatasToSchemas({
    refPointerPrefix: '',
    classTransformerMetadataStorage: defaultMetadataStorage,
  });
}
