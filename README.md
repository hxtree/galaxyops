# @cats-cradle

[![CI](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml/badge.svg)](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml)
[![Code Quality](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/cats-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/cats-cradle&utm_campaign=Badge_Grade)
[![Codacy Coverage](https://app.codacy.com/project/badge/Coverage/8024531285164025aef972fcb059ea74)](https://app.codacy.com/gh/hxtree/cats-cradle)
[![Docs](https://github.com/hxtree/cats-cradle/actions/workflows/pages/pages-build-deployment/badge.svg)](https://hxtree.github.io/cats-cradle/)
[![GitHub Stars](https://img.shields.io/github/stars/hxtree/cats-cradle?style=social)](https://github.com/hxtree/cats-cradle/stargazers)

## The problem

Running multiple applications in the cloud without a solid architectural
framework is akin to constructing a house without blueprints - it invites chaos.
While many resources focus solely on single-application setups, cloud
architecture encompasses an entire city, not just one building. Without a
coherent plan in place, any attempt to make changes becomes a daunting task.

## This solution

Looking to kickstart your enterprise cloud architecture? Take a deep dive into
the realm of modern DevOps practices on AWS with a monorepo setup like the one
provided here [^1]. This isn't mere conjecture - it's a practical demonstration
featuring tangible code, driving a cooperative RPG. Our approach transcends
individual projects; we're laying the groundwork for the entire landscape of
enterprise software on AWS.

### Features

The below features outline the principles and standards applicable to this
repository. Each piece contributes harmoniously to the overall cityscape we're
constructing.

<details>
  <summary>Emphemiral environments with TLS certifcates, email, etc.</summary>
  AWS Org Formation is used to set that bases for platform. Other services build on top of that.
</details>

<details>
  <summary>Turn-key development environment with VSCode Dev Containers or Github Codespaces.</summary>
  Even the development environment is code. Reducing on boarding setup and workstation recovery from days to minutes.
</details>

<details>
  <summary>Event-driven microservices architecture with data lake.</summary>
  Services use queues communition. They are fault tolerant. Events are automatically archived in a data lake for data anlaytics and business driven insights.
</details>

<details>
  <summary>Interservice schema contracts, offering automatic mocking, faking, and
  validation pipes for seamless development and data integrity.</summary>
  Libriaries define schema and allow for automated faking of interservice contracts.
</details>

<details>
  <summary>User registration and authentication functionality.</summary>
  Cognito service provides user registration.
</details>

<details>
  <summary>Single-page application (SPA) frontend with backend for frontend (BFF)
  architecture.</summary>
  Clients are SPA usually S3 backed and deployed to cloudfront. BFF are middleware.
</details>

<details>
  <summary>Universal language</summary>
Javascript is the chosen base language for microservices in this project, due to
its performance, ubiquity, beginner-friendly nature, extensive adoption, and
omnipresence. Typescript, backed by Microsoft, is utilized for compiling
Javascript. Typescript brings the advantage of type hinting, which aids in
maintenance and improves the readability of code. As a guideline, Typescript
**SHOULD** be the default language for the majority of application code, unless
there's a substantial reason to opt for a different language.
</details>

<details>
  <summary>Enterprise Architectured Monorepo</summary>
A monorepo was chosen to simplify development by housing multiple projects in a
single repository, streamlining code sharing, versioning, and dependency
management. Monorepos help fosters collaboration, ensures consistency, and
enables efficient code reuse across projects. That's not to say every bit of
code the organization maintains should go into a monorepo or the same monorepo.

A package base monorepo approach is preferred as to create a clear separation in
layers. Microsoft backed Rush was selected over Nx, Lerna, Turbo, etc. for
monorepo management. Nx is also suitable, but rush has worked fine so far.

The code is divided into several categories: libraries, platform, services,
middleware, and clients. Each is further defined in there retrospective folders.
When it comes to individual package files, those that typically change in tandem
**SHOULD** generally be kept together. The organization of code **SHOULD** be
based on features. All project dependencies **MUST** be unidirectional
dependencies.

</details>

<details>
  <summary>Infrastructure as Code (IaC) for streamlined DevOps pipeline.</summary>

We selected AWS as our Infrastructure as a Service (IaaS) provider because of
the advantages of vendor lock-in, allowing us access to a diverse array of
standardized services. In this project, prioritizing these benefits takes
precedence over maintaining cloud agnosticism. We anticipate potential project
failure before AWS, and we've accounted for the potential cost of migrating
between IaaS providers. Our approach involves intentional structuring of layers
and relies primarily on features offered by multiple cloud providers.

The entire infrastructure is defined as code, allowing for version control, easy
replication, and consistent environments across different stages of the
development lifecycle. All Infrastructure as Code **MUST** be defined as or
compile to CloudFormation templates.

</details>

<details>
  <summary>Continuous integration and continuous deployment (CI/CD) leveraging AWS.</summary>
  AWS CDK **MUST** be selected for generating Cloudformation templates. The only
exception is for platform which **MAY** use AWS Org Formation or other
Cloudformation abstraction layers. CDK works well for generating most L1 and L2
Constructrs. Althouh other frameworks offer more L3 Constructs, L3 Constructs
are more business specific and **SHOULD** be maintained by platform instead of a
third party software vendor.
</details>

<details>
  <summary>Independent and Auditable Deployments</summary>
Every project **MUST** have the capability for independent deployment using the
standardized command `rushx cdk:deploy`. This deployment command is also
applicable for deploying services during local development. Any changes to the
base branch that affect deployable projects **MUST** automatically create and
upload a self contained artifact for each impacted project to S3. This artifact
serves both auditing and deployment purposes. It is advisable to use AWS
CodePipeline for managing this artifact within continuous delivery (CD)
workflows.
</details>

<details>
  <summary>Happy productive engineers.</summary>
  From an anthropological standpoint, our selection of languages and tools goes beyond code; it becomes the cultural fabric of our tech ecosystem. Tools were selected not only to serve enablers for engineers but as catalysts for a user-centric experience.
</details>

## Getting Started

### Setting up Development Environment

The quickest way to start a develop environment is by clicking open in Github
Codespaces. To actually save and commit changes back it is recommended to
[forking the repo](https://github.com/hxtree/cats-cradle/fork) .

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=438855397)

Alternatively, git clone and install locally using a
[devcontainer](.devcontainer/README.md). It's possible to install without a
container using the Dockerfile as guidance on package to install.

![Flow Chart](docs/flow-chart.drawio.svg)

### Implementing AWS Multi-Account Architecture

These steps only need to be performed once by the platform team to initalize the
IaaS.

1. Setup [AWS Org Formation](/platform/aws-org-formation/README.md).

2. Login via SSO, bootstrap deployments, deploy platform, deploy services, and
   then deploy clients.

   ```bash
   rush sso
   rush cdk:bootstrap
   rush cdk:deploy --to tag:deploy-platform
   rush cdk:deploy --to tag:services
   rush cdk:deploy --to tag:middleware
   rush cdk:deploy --to tag:clients
   ```

3. Login via SSO to tools account and then deploy tools.

   ```bash
   rush sso -p tools
   rush cdk:bootstrap
   rush cdk:deploy --to tag:deploy-tools
   ```

## Documentation

Documentation **SHOULD** be maintained where it will be looked for. A README.md
file **SHOULD** be added to explain each project and important folder
structures. README.md files instructions should adhere to RFC 2119[^2]. Any code
that isn't self-documenting **MUST** be accompanied by documentation. Tsdoc
**MAY** be selected as a standard for writing Typescript documentation. Typedoc
**MAY** be selected to compile documentation as code.

> **Note** Use `rush help` for information on builtin commands.

<details>
  <summary>Third Party Documentation</summary>

- [AWS CLI](https://docs.aws.amazon.com/cdk/v2/guide/cli.html)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Jest](https://jestjs.io/)
- [RushJS](https://rushjs.io)
  - [Selecting Subsets](https://rushjs.io/pages/developer/selecting_subsets/)
- [Rushstack](https://github.com/microsoft/rushstack)
</details>

## Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

We welcome contributions of any size to this open-source project. Please follow
the [code of conduct](docs/CODE_OF_CONDUCT.md) when contributing.

Pull requests and bug reports are welcome on GitHub at
<https://github.com/hxtree/cats-cradle>.

<details>
  <summary>How to contribute</summary>

1. Checkout a new branch from main using git.

   ```bash
   git checkout -b feature/improve-readme
   ```

2. Work on changes (e.g. fix a bug or add a new feature). Test-driven
   development encouraged.

   ```bash
   rushx dev
   rushx test
   ```

3. Stage and commit changes using
   [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification).

   ```bash
   git add .
   git commit -m 'doc: fix spelling of computers'
   ```

4. (Optional) If changing a library that is published to NPM, document
   [semantic version](https://semver.org/) changes, generate Changelogs, and
   commit changes.

   ```bash
   rush change
   rush version --bump
   git commit -m 'chore: bump change log'
   ```

5. Push code and open a PR. Celebrate contributing to @cats-cradle.

   ```bash
   git push
   ```

</details>

### Acknowledgements

<a href="https://github.com/hxtree/cats-cradle/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hxtree/cats-cradle" />
</a>

## License

Packages available on [NPM](https://www.npmjs.com/search?q=%40cats-cradle) are
MIT licensed. Packages without a specific license have not yet been developed
with reuse in mind and are primarily maintained for the game. Simply remove
these projects when setting up your architecture.

[^1]:
    Accelerate: The Science of Lean Software and DevOps: Building and Scaling
    High Performing Technology Organizations Paperback – Illustrated, March 27,
    2018 by Nicole Forsgren PhD (Author), Jez Humble (Author), Gene Kim
    (Author).

[^2]:
    This document adheres to the guidelines outlined in
    [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt), which defines the standard
    interpretations of key words used in IETF documents. These key words include
    "MUST", "MUST NOT", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT",
    "RECOMMENDED", "MAY", and "OPTIONAL". The usage of these words in this
    document follows the specifications set forth in RFC 2119, ensuring clarity
    and consistency in the requirements and recommendations presented herein.
