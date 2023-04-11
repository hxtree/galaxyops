# @cats-cradle/bundlers

This package contains various bundler profiles. The bundlers bundle another
projects source code to make it ready for deployment.

## Usage

Install bundler as devDependency:

```bash
npm install @cats-cradle/bundlers --dev
```

Call the binary from within your package.json

```json
{
  "name": "your-package",
  "scripts": {
    "build": "nestjs-bundler",
    "cdk:deploy": "nestjs-bundler && cdk deploy"
  }
}
```

## Profiles

**nestjs-bundler**: Compiles Typescript NestJS src to Javascript dist using
esbuild. Designed for use in AWS Lambda with applicable external modules, which
lambda layer should provide, excluded.
