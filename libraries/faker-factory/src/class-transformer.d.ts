// See links for details
// https://github.com/typestack/class-transformer/issues/563
// https://github.com/epiphone/class-validator-jsonschema#validatenested-and-arrays

declare module 'class-transformer/cjs/storage' {
  import type { MetadataStorage } from 'class-transformer/types/MetadataStorage';

  export const defaultMetadataStorage: MetadataStorage;
}
