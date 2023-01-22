import { cloneDeep } from 'lodash';
import { JSONSchemaFaker } from 'json-schema-faker';
import currency from 'currency.js';
import { faker } from '@faker-js/faker';

export function generateFakeData(
  jsonSchema: any,
  definitions: { [name: string]: any } = {},
): any {
  console.log(jsonSchema);

  if (
    jsonSchema.$ref &&
    definitions[jsonSchema.$ref.replace('#/definitions/', '')]
  ) {
    jsonSchema = definitions[jsonSchema.$ref.replace('#/definitions/', '')];
  }

  const toDealJsonSchema = cloneDeep(jsonSchema);
  if (definitions) {
    toDealJsonSchema.definitions = definitions;
  }

  // custom types
  JSONSchemaFaker.format('currency', () =>
    currency(faker.finance.amount(), {
      symbol: '',
      separator: '',
      decimal: '.',
      precision: 2,
    }).format(),
  );

  JSONSchemaFaker.format('email', () => faker.internet.email().toLowerCase());

  JSONSchemaFaker.format('uuid', () => faker.datatype.uuid());

  JSONSchemaFaker.format('date', () => faker.date.past());

  JSONSchemaFaker.format('hostname', () => faker.internet.url());

// use the async-version (preferred way)
  JSONSchemaFaker.resolve(jsonSchema).then(sample => {
    console.log(sample);
  });

  // JSONSchemaFaker.option('alwaysFakeOptionals', false);
  // JSONSchemaFaker.option('ignoreMissingRefs', true);
  // JSONSchemaFaker.option('failOnInvalidTypes', false);
  // JSONSchemaFaker.option('failOnInvalidFormat', false);

  const schema = JSONSchemaFaker.generate(toDealJsonSchema);

  return schema;
}
