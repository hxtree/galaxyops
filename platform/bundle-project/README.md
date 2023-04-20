# @cats-cradle/bundle-project

BundleProject is a tool for bundling a single pnpm workspace project.

It was designed for a RushJS monorepo that uses PNPM to help create small fast
deployable projects using AWS CDK in AWS CodePipelines.

## Opinions

Originally, the RushJS monorepo CI/CD process started in Github CI and next went
to AWS CodePipeline, Although it was quicker to get a mirror of the repository
in AWS CodeCommit and have CodePipeline build trigger from pushes to main, that
approach had several drawbacks:

- In order for a pipeline to build from that source it must clone the entire
  monorepo within CodePipeline.
- The clone had to bee deep and fetch all git histories, which is an even larger
  file, to allow RushJS to perform diffs to determine which projects changed.
- That a step need to build all applicable projects and download the
  dependencies.

Instead BundleProject was favored. It enables for a single dedicated Github CI
build stage to individually bundle, compress each project changed (along with
workspace and non-workspace dependencies), and put the compress object in a S3
bucket. A CodePipeline then is triggered on each object put to deploy the
project. This prevents the need for a CodePipeline to fetch and process large
amounts of code and drastically speeds up CI/CD pipelines, allowing engineers to
ship code faster.

## References

- [PNPM Bundle Workspace](https://github.com/elyse0/pnpm-bundle-workspace-package)
- [PNPM Isolate Workspace](https://github.com/Madvinking/pnpm-isolate-workspace)
- [Rush Deploy](https://rushstack.zulipchat.com/#narrow/stream/262513-general/topic/rush.20deploy.20for.20docker.20images.3F)
