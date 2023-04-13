# @cats-cradle/bundle-project

BundleProject is a tool to bundle a single pnpm workspace project.

This allows a RushJS monorepo using pnpm to package a deployable project using
CDK into something that can be used for in AWS CodePipelines.

## Opinions

Often for a RushJS monorepo CI/CD that starts with Github CI and flow into a AWS
CodePipeline, it seems simplest to mirror the repository in AWS CodeCommit and
have CodePipeline build from pushes to main.

This approach has several drawbacks:

- This means that in order for a pipeline to build from that source it must
  clone the repo in CodePipeline.
- In order for a RushJS monorepo to perform diffs to see which projects change,
  it must fetch all git histories, which is often a large file.
- Then once it gets all histories it must build all applicable projects and
  download the dependencies.

An alternative approach, is to use Github CI to bundle each project changed
individually along with workspace and non-workspace dependencies and place that
in a S3 bucket. Then use a CodePipeline that is triggered on object put to
deploy the project. This prevents the need for a CodePipeline to fetch and
process large amounts of code.

## TODO

need to address:

- [ ] tsconfig reference
- [ ] eslint-config
- [ ] devDependencies
- [ ] recursive dev references, eslint-config, faker-factory,

## References

<https://github.com/elyse0/pnpm-bundle-workspace-package>
<https://github.com/Madvinking/pnpm-isolate-workspace>
<https://rushstack.zulipchat.com/#narrow/stream/262513-general/topic/rush.20deploy.20for.20docker.20images.3F>
