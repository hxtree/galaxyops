import 'reflect-metadata';
import { cloneDeep } from 'lodash';
import { JSONSchemaFaker } from 'json-schema-faker';
import currency from 'currency.js';
import { faker } from '@faker-js/faker';
import { CreateSettings, defaultSettings } from './settings.type';

/**
 * Determines how JSONSchema is faked based on format, pattern, etc.
 *
 * @param inputSchema
 * @param fakerRefs
 * @param inputSettings
 * @returns
 */
export async function generateFakeData(
  inputSchema: any,
  fakerRefs: any,
  inputSettings?: CreateSettings,
): Promise<any> {
  const settings = { ...defaultSettings, ...inputSettings };
  const fakerSchema = cloneDeep(inputSchema);

  // custom types

  JSONSchemaFaker.format('currency', () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    currency(faker.finance.amount(), {
      symbol: '',
      separator: '',
      decimal: '.',
      precision: 2,
    }).format());

  JSONSchemaFaker.format('money', () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    currency(faker.finance.amount(), {
      symbol: '',
      separator: '',
      decimal: '.',
      precision: 2,
    }).format());

  JSONSchemaFaker.format('email', () => faker.internet.email().toLowerCase());

  JSONSchemaFaker.format('uuid', () => faker.datatype.uuid());

  JSONSchemaFaker.format('date', () => faker.date.past());

  JSONSchemaFaker.format('hostname', () => faker.internet.url());
  JSONSchemaFaker.format('string', () => faker.internet.url());

  JSONSchemaFaker.format('latitude', () => faker.address.latitude());
  JSONSchemaFaker.format('longitude', () => faker.address.longitude());

  if (settings.optionals === true || settings.probability === 1) {
    JSONSchemaFaker.option('alwaysFakeOptionals', true);
  }

  if (settings.optionals === false || settings.probability === 0) {
    JSONSchemaFaker.option('alwaysFakeOptionals', false);
  }

  if (settings.optionals === undefined) {
    JSONSchemaFaker.option('optionalsProbability', `${settings?.probability}`);
  }

  JSONSchemaFaker.option('ignoreMissingRefs', true);
  JSONSchemaFaker.option('failOnInvalidTypes', true);
  JSONSchemaFaker.option('failOnInvalidFormat', true);

  // ideally fakers would be sync or async
  // JSONSchemaFaker has issues with resolve() in v3.1.1
  const schema = JSONSchemaFaker.generate(fakerSchema, fakerRefs);

  return schema;
}
