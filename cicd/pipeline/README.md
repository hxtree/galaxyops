# @org-platform/pipeline

Unstable WIP

## AWS Environments

| Environment | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `test`      | Test is where Acceptance Tests are ran.                        |
| `prod`      | Production is where the rubber hits the road, customer facing. |
| `build`     | Build is where the pipeline are provisioned from.              |

Default policy `AdministratorAccess`

Pipelines should accept a stage param as to build feature branches.

## Documentation

- [CDK Pipeline](https://docs.aws.amazon.com/cdk/v2/guide/cdk_pipeline.html)
