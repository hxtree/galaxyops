# cdk-monorepo (WIP)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/monorepo/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=hxtree/monorepo&amp;utm_campaign=Badge_Grade)


A monorepo for deploying AWS apps.

## Useful commands

* `rush` use to run a command in bulk or globally. 
* `rushx` use to run a command relative to the app / current working directory.

* `rush sso`           Authenticate to AWS SSO and set profile
* `rush bootstrap`     bootstrap deploy for the first time
* `rush build`         build projects
* `rushx test`         test a package within directory
* `rushx lint`         eslint static code analysis
* `rush docs`          generate documents from code
* `rush synth`         show synthesized CloudFormation template
* `rush diff`          compare deployed stack with current state
* `rush deploy`        deploy apps using AWS CDK
* `rush purge`         purge packages
* `rush update`        update workspace files
* `rush update --full` full update of workspace files
* `rush add -p @package/a` add a new package to app
* `rush add -p @rushstack/heft --make-consistent` make package version consistant across monorepo

Commands yet to be refined:
* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy --hotswap` speed up dev deployment
* `cdk watch`       hotsawp on changes
* `cdk doctor`     Checks your CDK project for potential problems

## Third Party Documentation

* https://docs.aws.amazon.com/cdk/v2/guide/cli.html
* https://rushjs.io/
* https://github.com/microsoft/rushstack
* https://jestjs.io/ 
* https://www.typescriptlang.org/docs/
* https://github.com/microsoft/tsdoc
* https://github.com/TypeStrong/typedoc

## Architectural Assumptions

* **Infrastructure as a Service**: AWS was selected a provider. Project assumes it will fail before AWS and vendor buyin allows leveraging numerous undifferentiated services which outweighs being cloud agnostic for this project.
* **Monorepo**: Selected monorepo instead of polyrepo as apps will be mostly serverless microservices.
* **Monorepo Manager**: Selected Microsoft backed Rush over Nx, Lerna, etc. for monorepo management.  
* **Typescript**: Selected Javascript as base language for microservices due to its performance and omnipresence. Microsoft backed Typescript compiling is used for Javascript due to typehinting, maintenance, and readability.  
* **Repo Structure**: Selected Microsoft Rushstack for monorepo project structure.
* **Package Manager**: Selected PNPM for Javascript package manager over Yarn and NPM. Yarn workspaces are not supported in Rush. Micosoft purchased NPM, but it remains infamous. PNPM uses symlinks.
* **Heft**: Selected Rush Heft to build Typescript projects because it accompanies Rush. Selected Heft Node Rig as many projects will have same configuration.
* **AWS CDK**: Selected AWS CDK instead of [Serverless Framework](https://github.com/serverless-stack/serverless-stack). When it comes down to it, SST is an unecessary and incomplete abstraction layer. SST live lambda development works using serverless website. Question need for coupling reliance. And SST future plans and kickback.
* **AWS SSO**: Selected AWS SSO for authentication over hard coded credentials for easy of maintenance and security.
* **Documentation**: Selected tsdoc as a standard for writing documentation and typedoc to compile documentation as code.

## Considering

* Code coverage and static analysis using codacy.
* Contracts for interdependent apps, possibly https://nestjs.com/ .
* Some form of application app templating package. cdk init,
