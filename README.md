# cdk-monorepo

Work in progress.

A monorepo for deploying AWS apps.
## Useful commands

Global

* `sso DeveloperSandbox` aws sso authenticate
* `rush purge` purge packages
* `rush update` update workspace files
* `rush update --full` full update of workspace files
* `rush build` build projects

App specific

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk bootstrap`  bootstra[] deployment
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk deploy --hotswap` speed up dev deployment
* `cdk watch`       hotsawp on changes
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       show synthesized CloudFormation template
* `rush add -p @package/a` add a package to a repo
* `rush add -p @rushstack/heft --make-consistent` make package version consistant across monorepo
* `rushx test`      test a package within directory

## Third Party Documentation

* https://docs.aws.amazon.com/cdk/v2/guide/cli.html
* https://rushjs.io/
* https://github.com/microsoft/rushstack
* https://jestjs.io/ 
* https://www.typescriptlang.org/docs/

## Architectural Assumptions

* Selected AWS exclusively for cloud provider vs cloud agnostic. Project assumes it will fail before AWS and vendor allows leveraging undifferentiated servers.
* Selected monorepo instead of polyrepo as apps will be mostly serverless microservices.
* Selected Microsoft backed Rush for monorepo management over Nx, Lerna, etc.  
* Selected Microsoft Rushstack for high level project layout.
* Selected Microsoft backed Typescript for javascript based microservices.
* Selected PNPM over Yarn and NPM. Yarn workspaces are not supported in Rush. Micosoft purchased NPM, but it remains infamous.
* Selected Rush Heft to build Typescript projects because it was accompanied Rush.
* Selected heft node rig as many projects will have same configuraiton
* Selected AWS CDK instead of [Serverless Framework](https://github.com/serverless-stack/serverless-stack). SST is an unecessary and incomplete abstraction layer. SST live lambda development starts an endpoint utilizing their website. Question reliance on paid service and SST kickback.
* Selected AWS SSO for authentication over hard coded credentials.

## Considering

Contracts for interdependent apps, possibly https://nestjs.com/ .
Some form of application app templating package.