# AWS SSO Organization Formation

The AWS Organization is initalized and managed using [AWS Organization Formation](https://github.com/org-formation/org-formation-cli).


## Steps

1. Create an [Administrator IAM user](https://docs.aws.amazon.com/mediapackage/latest/ug/setting-up-create-iam-user.html) or use an existing adaquetly permissioned IAM user.

2. Add Administrator and set `aws_access_key_id` and `aws_secret_access_key` in ~/.aws/credentials

3. Initialize the organization using Administrator profile recently added.

    ```bash
    org-formation init organization.yml --profile=Administrator --region us-east-2
    ```

4. Make changes to the Organization resources. Note Org Formation does not delete accounts, accounts must be deleted from within AWS.

5. Update the Organization resources.
   
    ```bash
    org-formation update organization.yml --profile=Administrator
    ```

# Need help?
```bash
org-formation --help
```

## Documentation

*  [Org Unit Best Practices](https://aws.amazon.com/blogs/mt/best-practices-for-organizational-units-with-aws-organizations/?org_product_rc_OUBlog)
*  [Generating an Organization](https://github.com/org-formation/org-formation-cli/blob/master/docs/articles/org-formation.md#generating-an-organizationyml-file)