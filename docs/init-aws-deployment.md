# Initial AWS Deployment

1. Setup [AWS Org Formation](/platform/aws-org-formation/README.md).

2. Login via SSO standard account, bootstrap deployments, deploy platform, and
   then deploy apps.

   ```bash
   rush sso
   rush cdk:bootstrap
   rush cdk:deploy --to tag:deploy-platform
   rush cdk:deploy --to tag:deploy-app
   ```

3. Login via SSO to tools account and then deploy tools.

   ```bash
   rush sso -p tools
   rush cdk:bootstrap
   rush cdk:deploy --to tag:deploy-tools
   ```
