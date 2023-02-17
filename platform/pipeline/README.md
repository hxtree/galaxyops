# @cats-cradle/pipeline

Unstable WIP

## AWS Environments

| Environment | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `test`      | Test is where Acceptance Tests are ran.                        |
| `prod`      | Production is where the rubber hits the road, customer facing. |
| `build`     | Build is where the pipeline are provisioned from.              |

Default policy `AdministratorAccess`

Pipelines should accept a stage param as to build feature branches.

```bash
cdk bootstrap aws://298217020330/us-east-2 --profile tools \
    --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess \
    --trust 760440398296
```

## TODO

Try to publish packages to CodeArtifact and release from there to prevent need
from pulling entire monorepo git history.

## Documentation

- [CDK Pipeline](https://docs.aws.amazon.com/cdk/v2/guide/cdk_pipeline.html)
- [Code Artificat](https://aws.amazon.com/blogs/devops/integrating-aws-codeartifact-package-mgmt-flow/)
