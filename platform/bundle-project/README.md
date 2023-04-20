# @cats-cradle/bundle-project

BundleProject is a tool for bundling a single PNPM workspace project as a
compressed ZIP file.

It was designed for a monorepo that uses PNPM to help create small fast
deployable projects using AWS CDK in AWS CodePipelines.

## Usage

### Example in RushJS

For each project that will be compressed, add BundleProject as a dev dependency:

```bash
# example of how to add dev dependency in RushJS
rush add --package @cats-cradle/bundle-project --dev
```

Add a script command to bundle your package to the project's package.json. Make
sure to replace `my-package-name` with the name of your package.

```json
{
  "name": "my-package-name",
  "scripts": {
    "build:project": "bundle-project my-package-name"
  }
}
```

Run the script to bundle the project.

```bash
rushx build:project
```

## Opinions

Originally, our RushJS monorepo CI/CD process started in Github CI and next went
to AWS CodePipeline, Although it was quicker to get a mirror of the repository
in AWS CodeCommit and trigger a CodePipeline build from pushes to main, that
approach had several costly drawbacks:

- In order for a pipeline to build from that source it must clone the entire
  monorepo within CodePipeline.
- RushJS diffs to determine which projects changed are based on git histories.
  This meant the clone had to be a deep fetch (had to download all git
  histories) to work, which is an even larger file.
- A step that built all applicable projects and download the dependencies was
  required.
- It exponentially increases the amount of downloading and processing that needs
  to be done within a CodePipeline. This in turn can create prolonged contract
  varations between microservices when deploying multi service changes, which
  can cause system errors.
- This expoententially increases disaster recovery time, as pipelines take
  longer to ship code.

Instead BundleProject was favored. It enables for a single dedicated Github CI
build stage to individually bundle, compress each project changed (along with
workspace and non-workspace dependencies), and put the compress object in a S3
bucket. A CodePipeline is then triggered on each object put to deploy the
project. This prevents the need for a CodePipeline to fetch and process large
amounts of code and drastically speeds up CI/CD pipelines, allowing engineers to
ship code faster.

## References

- [PNPM Bundle Workspace](https://github.com/elyse0/pnpm-bundle-workspace-package)
- [PNPM Isolate Workspace](https://github.com/Madvinking/pnpm-isolate-workspace)
- [Rush Deploy](https://rushstack.zulipchat.com/#narrow/stream/262513-general/topic/rush.20deploy.20for.20docker.20images.3F)
