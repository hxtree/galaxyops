# Monorepo
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/monorepo/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=hxtree/monorepo&amp;utm_campaign=Badge_Grade)

A monorepo for deploying AWS apps.

## Need Help?
`rush help`

## Architecture Guidelines

The guide below describes guidelines applicable to repository.

* **Infrastructure as a Service**: AWS was selected a provider. Project assumes it will fail before AWS and vendor buyin allows leveraging numerous undifferentiated services which outweighs being cloud agnostic for this project.
* **Monorepo**: Selected monorepo instead of polyrepo as apps will be mostly serverless microservices.
* **Monorepo Manager**: Selected Microsoft backed Rush over Nx, Lerna, etc. for monorepo management.  
* **Typescript**: Selected Javascript as base language for microservices due to its performance and omnipresence. Microsoft backed Typescript compiling is used for Javascript due to typehinting, maintenance, and readability.  
* **Repo Structure**: Project folder structure mimics Microsoft Rushstack.
* **Package Manager**: Selected PNPM for Javascript package manager over Yarn and NPM. Yarn workspaces are not supported in Rush. Micosoft purchased NPM, but it remains infamous. PNPM uses symlinks.
* **Heft**: Selected Rush Heft to build Typescript projects because it accompanies Rush. Selected Heft Node Rig as many projects will have same configuration.
* **AWS CDK**: Selected AWS CDK instead of [Serverless Framework](https://github.com/serverless-stack/serverless-stack). When it comes down to it, SST is an unecessary and incomplete abstraction layer. SST live lambda development works using serverless website. Question need for coupling reliance. And SST future plans and kickback.
* **AWS SSO**: Selected AWS SSO for authentication over hard coded credentials for easy of maintenance and security.
* **Documentation**: Selected tsdoc as a standard for writing documentation and typedoc to compile documentation as code.
* **Deployments**: `rush deploy` copies files from projects to a deployment folder including applicable dependencies. This is intentially not used. Instead apps deploy themselves using CDK stacks via `rushx deploy`.

### Considering

* Contracts for interdependent apps, possibly https://nestjs.com/ .
* Codegen: yeoman-generator, plopjs, hygen, etc.

## Third Party Documentation

* https://docs.aws.amazon.com/cdk/v2/guide/cli.html
* https://www.typescriptlang.org/docs/
* https://jestjs.io/ 
* https://rushjs.io/
* https://github.com/microsoft/rushstack
* https://github.com/microsoft/tsdoc
* https://github.com/TypeStrong/typedoc
