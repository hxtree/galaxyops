# @cats-cradle/create-artifact

[![npm version](https://badge.fury.io/js/@cats-cradle%2Fcreate-artifact.svg)](https://badge.fury.io/js/@cats-cradle%2Fcreate-artifact)
[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/hxtree/galaxyops?style=social)](https://github.com/hxtree/galaxyops/stargazers)

create-artifact is a tool for bundling a single package into an artifact. It was
designed to help create small fast deployable projects.

## How it Works

create-artifact creates a copy of the workspace, replaces any dynamic
package.json `workspace:*` references with the actual versions, and compresses
the project as a ZIP file.

> **Note** In CI/CD pipelines make sure to publish each `workspace` dependency
> prior to services that use it being deployed.

## Usage

### Example

For each project that needs an artifact, add create-artifact as a dev
dependency:

```bash
# example of how to add dev dependency
pnpm add @cats-cradle/create-artifact --dev
```

Add a script command to bundle your package to the project's package.json. Make
sure to replace `my-package-name` with the name of your package.

```json
{
  "name": "my-package-name",
  "scripts": {
    "artifact": "create-artifact my-package-name"
  }
}
```

Run the script to bundle the project.

```bash
pnpm artifact
```

## Opinions

Originally, our monorepo CI/CD process started in Github CI and next went to AWS
CodePipeline, Although it was quicker to get a mirror of the repository in AWS
CodeCommit and trigger a CodePipeline build from pushes to main, that approach
had several costly drawbacks:

- In order for a pipeline to build from that source it must clone the entire
  monorepo within CodePipeline.
- Monorepo diffs to determine which projects changed are based on git histories.
  This meant the clone had to be a deep fetch (had to download all git
  histories) to work, which is an even larger file.
- A step that built all applicable projects and download the dependencies was
  required.
- It exponentially increases the amount of downloading and processing that needs
  to be done within a CodePipeline. This in turn can create prolonged contract
  variations between microservices when deploying multi service changes, which
  can cause system errors.
- This exponentially increases disaster recovery time, as pipelines take longer
  to ship code.

Instead create-artifact was favored. It enables for a single dedicated Github CI
build stage to individually bundle, compress each project changed (along with
workspace and non-workspace dependencies), and put the compress object in a S3
bucket. A CodePipeline is then triggered on each object put to deploy the
project. This prevents the need for a CodePipeline to fetch and process large
amounts of code and drastically speeds up CI/CD pipelines, allowing engineers to
ship code faster.

## References

- [PNPM Bundle Workspace](https://github.com/elyse0/pnpm-bundle-workspace-package)
- [PNPM Isolate Workspace](https://github.com/Madvinking/pnpm-isolate-workspace)
