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

  // clear
  rmSync(outDir, { recursive: true, force: true });

  try {
    const externalModules = [
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
    ];

    await build({
      entryPoints: [entryPoint],
      // outfile: join(outDir, 'index.js'),
      outdir: outDir,
      bundle: true,
      platform: 'node',
      target: 'es2021',
      external: externalModules,
      tsconfig: tsconfigPath,
      plugins: [
        esbuildDecorators(),
        //   require('esbuild-plugin-inline-node-modules')({
        //     baseDir: __dirname,
        //     includePaths: [path.join(__dirname, 'node_modules')],
        //   }),
      ],
    });

    console.log('Build succeeded!');
  } catch (e) {
    console.error(`Build failed: ${e}`);
    process.exit(1);
  }
}
