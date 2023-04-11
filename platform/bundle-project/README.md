# @cats-cradle/bundle-project

Unstable WIP

CLI tool to bundle a single pnpm workspace project.

The goal of this package is to create a deployable project with CDK from a
RushJS monorepo using pnpm that can be used in AWS CodePipelines.

Using the entire monorepo in deployments creates unnecessary overhead. Using git
repository to base deployments on creates unnecessary head fetches.

## TODO

need to address:

- [ ] tsconfig reference
- [ ] eslint-config
- [ ] devDependencies
- [ ] recursive dev references, eslint-config, faker-factory,
- [ ] bin, e.g. bundlers
- [ ] zip / archive / compress

## References

<https://github.com/elyse0/pnpm-bundle-workspace-package>
<https://github.com/Madvinking/pnpm-isolate-workspace>
<https://rushstack.zulipchat.com/#narrow/stream/262513-general/topic/rush.20deploy.20for.20docker.20images.3F>
