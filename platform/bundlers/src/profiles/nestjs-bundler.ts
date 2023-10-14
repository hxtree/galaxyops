import { build } from 'esbuild';
import { join } from 'path';
import { rmSync } from 'fs';
import { esbuildDecorators } from '@anatine/esbuild-decorators';

export interface NestJsBundlerOptions {
  projectRoot: string;
}

export async function nestJsBundler(options: NestJsBundlerOptions) {
  const tsconfigPath = join(options.projectRoot, 'tsconfig.json');
  const entryPoint = join(options.projectRoot, 'src', 'index.ts');
  const outDir = join(options.projectRoot, 'dist');

  // remove previous bundle
  rmSync(outDir, { recursive: true, force: true });

  try {
    const externalModules = [
      // nestjs
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
      // chromium
      'puppeteer',
      'chrome-aws-lambda',
    ];

    await build({
      entryPoints: [entryPoint],
      outdir: outDir,
      bundle: true,
      platform: 'node',
      target: 'es2021',
      external: externalModules,
      tsconfig: tsconfigPath,
      plugins: [esbuildDecorators()],
    });

    console.log('Build succeeded!');
  } catch (e) {
    console.error(`Build failed: ${e}`);
    process.exit(1);
  }
}
