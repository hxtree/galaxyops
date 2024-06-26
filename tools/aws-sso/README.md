# aws-sso

The `aws-sso` project provides a TypeScript script to simplify AWS Single
Sign-On (SSO) authentication and configuration of AWS CLI credentials on local
machines. This script automates the process of logging in via AWS SSO and
configuring AWS CLI credentials based on the retrieved session token.

## Features

- Initiates AWS SSO login for a specified AWS profile.
- Retrieves and caches AWS CLI credentials using the SSO session token.
- Configures AWS CLI with the retrieved credentials in the local environment.

## Prerequisite

Install AWS Command Line Interface as applicable to OS.
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

```bash
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /
```

Copy AWS SSO config:

```bash
cp -pr .aws ~/
```

## References

https://awscli.amazonaws.com/v2/documentation/api/latest/index.html
