#!/usr/bin/env node
import { NestJsBundler } from './profiles/nestjs-bundler';

const projectRoot = process.cwd();
const watchMode = process.argv.includes('--watch');

// TODO add support for other bundle profiles based on flags as necessary

if (watchMode) {
  new NestJsBundler({
    projectRoot,
    watch: true,
  });
} else {
  const bundler = new NestJsBundler({
    projectRoot,
    watch: false,
  });
  bundler.build();
}
