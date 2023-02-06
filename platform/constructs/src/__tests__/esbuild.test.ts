import { esbuilder } from '../esbuild/esbuild';
import * as path from 'path';

describe('Esbuilder', () => {
  it('should not produce errors when properly setup', async () => {
    const result = await esbuilder({
      entrypoints: [path.join(__dirname, '/test-data/test')],
      bundle: true,
      outfile: path.join(__dirname, '/test-data/test.js'),
    });
    ('test.js');

    expect(result.errors).toEqual([]);
  });

  it('should not produce errors when properly setup', async () => {
    const result = await esbuilder({
      entrypoints: [path.join(__dirname, '/test-data/test')],
      bundle: true,
      outfile: path.join(__dirname, '/test-data/test.js'),
      external: [
        'express',
        'reflect-metadata',
        'rxjs',
        'source-map-support',
        'aws-lambda',
        'class-transformer',
        'class-validator',
        '@nestjs/common',
        '@nestjs/core',
        '@nestjs/terminus',
        '@vendia/serverless-express',
        'express',
        'node-cache',
        'reflect-metadata',
        'rxjs',
      ],
    });
    ('test.js');

    expect(result.errors).toEqual([]);
  });
});
