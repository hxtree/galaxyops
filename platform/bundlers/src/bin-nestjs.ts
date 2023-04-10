#!/usr/bin/env node
import { join } from 'path';
import { nestJsBundler } from './profiles/nestjs-bundler';

const projectRoot = process.cwd();

nestJsBundler({ projectRoot });
