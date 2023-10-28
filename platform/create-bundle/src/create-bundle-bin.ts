#!/usr/bin/env node
import { NestJsBundler } from './profiles/nestjs-bundler';

const projectRoot = process.cwd();
const watchMode = process.argv.includes('--watch');

// TODO add support for other bundle profiles based on flags as necessary

new NestJsBundler({
  projectRoot,
  watch: !!watchMode,
});
