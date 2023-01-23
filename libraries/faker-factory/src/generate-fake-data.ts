import 'reflect-metadata';
import { cloneDeep } from 'lodash';
import { JSONSchemaFaker } from 'json-schema-faker';
import currency from 'currency.js';
import { faker } from '@faker-js/faker';

export async function generateFakeData(
  inputSchema: any,
  fakerRefs: any,
): Promise<any> {
  const fakerSchema = cloneDeep(inputSchema);

  // custom types

  JSONSchemaFaker.format('currency', () =>
    // eslint-disable-next-line implicit-arrow-linebreak
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
  JSONSchemaFaker.format('string', () => faker.internet.url());

  JSONSchemaFaker.option('alwaysFakeOptionals', false);
  JSONSchemaFaker.option('ignoreMissingRefs', true);
  JSONSchemaFaker.option('failOnInvalidTypes', false);
  JSONSchemaFaker.option('failOnInvalidFormat', false);
  JSONSchemaFaker.option('optionalsProbability', 0.5);

  // ideally fakers would be sync or async
  // JSONSchemaFaker has issues with resolve() in v3.1.1
  const schema = JSONSchemaFaker.generate(fakerSchema, fakerRefs);

  return schema;
}
