# @cats-cradle/pipeline

Unstable WIP

## Steps

1. Github CI runs `rush deploy` to build each project into a compressed file and
   uploads file to S3 bucket.
2. Each deployable project features a AWS CodePipeline with a filter that is
   triggered when a file change is made to that S3 bucket.
3. CodePipeline runs deploying the project through environments.

## AWS Environments

| Environment | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `test`      | Test is where Acceptance Tests are ran.                        |
| `prod`      | Production is where the rubber hits the road, customer facing. |
| `build`     | Build is where the pipeline are provisioned from.              |

Default policy `AdministratorAccess`

Pipelines should accept a stage param as to build feature branches.

Prior to being able to deploy to an account te account being deployed into must
be
[bootstrapped](https://docs.aws.amazon.com/cdk/api/v1/docs/pipelines-readme.html#cdk-environment-bootstrapping)
to allow the tools to deploy to it.

```bash
CDK_NEW_BOOTSTRAP=1 cdk bootstrap
   --profile tools \
   --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess \
   --trust 760440398296
   aws://298217020330/us-east-2 \
```

- **DevOps CI/CD:** The repository includes a robust DevOps pipeline for
  continuous integration and continuous deployment. Automated testing, build,
  and deployment processes ensure a smooth and reliable software delivery
  lifecycle.

## Documentation

- [CDK Pipeline](https://docs.aws.amazon.com/cdk/v2/guide/cdk_pipeline.html)
