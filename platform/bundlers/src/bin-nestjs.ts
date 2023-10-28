#!/usr/bin/env node
import { NestJsBundler } from './profiles/nestjs-bundler';

const projectRoot = process.cwd();
const watchMode = process.argv.includes('--watch');

new NestJsBundler({
  projectRoot,
  watch: !!watchMode,
});
