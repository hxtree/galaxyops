# AWS SSO Organization Formation

The AWS Organization is initalized and managed using [AWS Organization Formation](https://github.com/org-formation/org-formation-cli).


## Getting Started

1. Use an existing adequately permissioned IAM user or create an [Administrator IAM user](https://docs.aws.amazon.com/mediapackage/latest/ug/setting-up-create-iam-user.html). Set user or Administrator `aws_access_key_id` and `aws_secret_access_key` credentials in ~/.aws/credentials if missing.

2. Initialize the organization using an adequately permissioned user or Administrator profile recently added. This pulls changes for the AWS Organization to the Org template file.

    ```bash
    org-formation init organization.yml --profile=Administrator --region us-east-2
    ```

## Updating Org

1. Edit the desired YAML files within this directory making the desired change. Org Formation does not delete accounts. Accounts must be deleted from within AWS.

2. Update the Organization resources using an adequately permissioned user. 
   
    ```bash
    org-formation update organization.yml --profile=Administrator
    ```

# Need help?

```bash
org-formation --help
```

## Documentation

* [AWS Control Tower](https://aws.amazon.com/controltower/) serves a similar purposes. However AWS Control Tower for CDK is currently a [RFC](https://github.com/aws/aws-cdk-rfcs/issues/81). Org Formation was selected for managing user accounts as it is a mature project.
* [Org Unit Best Practices](https://aws.amazon.com/blogs/mt/best-practices-for-organizational-units-with-aws-organizations/?org_product_rc_OUBlog)
* [Generating an Organization](https://github.com/org-formation/org-formation-cli/blob/master/docs/articles/org-formation.md#generating-an-organizationyml-file)