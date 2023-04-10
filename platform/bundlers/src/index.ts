#!/usr/bin/env node
import { nestJsBundler } from './profiles/nestjs-bundler';

const projectRoot = process.cwd();

// TODO arg parse params
nestJsBundler({ projectRoot });
