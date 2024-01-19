import { build } from 'esbuild';
import { join, resolve } from 'path';
import { rmSync } from 'fs';
import { esbuildDecorators } from '@anatine/esbuild-decorators';
import chokidar, { FSWatcher } from 'chokidar';

export interface NestJsBundlerOptions {
  projectRoot: string;
  watch?: boolean;
  timeout?: number;
}

export class NestJsBundler {
  options: NestJsBundlerOptions;

  tsConfigPath: string;

  entryPoint: string;

  outDir: string;

  externalModules: string[];

  watcher: FSWatcher;

  constructor(options: NestJsBundlerOptions) {
    this.options = options;

    this.tsConfigPath = join(options.projectRoot, 'tsconfig.json');
    this.entryPoint = join(options.projectRoot, 'src', 'index.ts');
    this.outDir = join(options.projectRoot, 'dist');
    this.externalModules = [
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
      '@sparticuz/chromium',
    ];

    rmSync(this.outDir, { recursive: true, force: true });

    if (options.watch) {
      const watchDirectory = join(options.projectRoot, 'src');

      console.log(`Running in watch mode on ${watchDirectory}`);

      this.watcher = chokidar
        .watch(watchDirectory)
        .on('change', async (event, path) => {
          await build({
            entryPoints: [this.entryPoint],
            outdir: this.outDir,
            bundle: true,
            platform: 'node',
            target: 'es2021',
            external: this.externalModules,
            tsconfig: this.tsConfigPath,
            plugins: [esbuildDecorators()],
          });
        });
    }
  }

  async close() {
    await this.watcher.close();
  }

  async build() {
    try {
      await build({
        entryPoints: [this.entryPoint],
        outdir: this.outDir,
        bundle: true,
        platform: 'node',
        target: 'es2021',
        external: this.externalModules,
        tsconfig: this.tsConfigPath,
        plugins: [esbuildDecorators()],
      });
    } catch (e) {
      console.error(`Build failed: ${e}`);
      process.exit(1);
    }
  }
}
