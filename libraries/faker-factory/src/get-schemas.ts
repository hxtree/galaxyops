import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { SchemaObject } from 'openapi3-ts';

export function getSchemas(): Record<string, SchemaObject> {
  return validationMetadatasToSchemas();
}
