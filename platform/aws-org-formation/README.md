# AWS Org Formation

The AWS Organization is initialized, managed, and synced using
[org-formation-cli](https://github.com/org-formation/org-formation-cli).

## AWS SSO

AWS SSO **MUST** be selected for authentication over hard coded credentials for
ease of maintenance and security. Developers can SSO in to sandbox environments.

## Domain Registration

Register a domain name through Route 53 in AWS master organization. In this
case, `nekosgate.com` was used. Delete the hostedZone in master account as org
formation will create one.

After running `./bin/sync.sh` get the name servers for the hosted zone in master
account and use them to update the Registered domain's nameservers in Route 53.

## Getting Started

1. Login to the AWS Management Console. Go to Org Formations and create an Org.

2. Use an existing IAM user with adequately permissions or create an
   [Administrator IAM user](https://docs.aws.amazon.com/mediapackage/latest/ug/setting-up-create-iam-user.html).
   Set user or Administrator `aws_access_key_id` and `aws_secret_access_key`
   credentials in ~/.aws/credentials if missing.

3. Initialize the organization using a user with adequate permission or the
   Administrator profile recently added. This pulls changes for the AWS
   Organization to the Org template file.

   ```bash
   org-formation init organization.yml --profile=Administrator --region us-east-2
   ```

## Updating Org

1. Edit the desired YAML files within this directory making the desired change.
   Org Formation does not delete accounts. Accounts must be deleted from within
   AWS.

2. Update the Organization resources using a user with adequate permissions.

   ```bash
   org-formation update organization.yml --profile=Administrator
   ```

## ACM WildCart Certs

For ACM cert verification it is important to have email setup for the domain as
to verify the domain. AWS WorkMail or other can be used for this purpose. This
allows for the wild card certs to be verified.

## Need help?

```bash
org-formation --help
```

## Documentation

- [AWS Control Tower](https://aws.amazon.com/controltower/) serves a similar
  purposes. However AWS Control Tower for CDK is currently a
  [RFC](https://github.com/aws/aws-cdk-rfcs/issues/81). Org Formation was
  selected for managing user accounts as it is a mature project.
- [Org Unit Best Practices](https://aws.amazon.com/blogs/mt/best-practices-for-organizational-units-with-aws-organizations/?org_product_rc_OUBlog).
- [Generating an Organization](https://github.com/org-formation/org-formation-cli/blob/master/docs/articles/org-formation.md#generating-an-organizationyml-file).
