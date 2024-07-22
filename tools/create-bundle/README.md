# @galaxyops/create-bundle

[![npm version](https://badge.fury.io/js/@galaxyops%2Fcreate-bundle.svg)](https://badge.fury.io/js/@galaxyops%2Fcreate-bundle)
[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/hxtree/galaxyops?style=social)](https://github.com/hxtree/galaxyops/stargazers)

This package contains various bundler profiles. The bundlers bundle another
projects source code to make it ready for distribution.

## Usage

Install bundler as devDependency:

```bash
npm install @galaxyops/create-bundle --dev
```

Call the binary from within your package.json

```json
{
  "name": "your-package",
  "scripts": {
    "build": "create-bundle",
    "build:watch": "create-bundle --watch",
    "cdk:deploy": "create-bundle && cdk deploy"
  }
}
```

## Profiles

**nestjs-bundler**: Compiles Typescript NestJS src to Javascript dist using
esbuild. Designed for use in AWS Lambda with applicable external modules, which
lambda layer should provide, excluded.
