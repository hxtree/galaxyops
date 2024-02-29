# @cats-cradle

[![CI](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml/badge.svg)](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml)
[![Code Quality](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/cats-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/cats-cradle&utm_campaign=Badge_Grade)
[![Codacy Coverage](https://app.codacy.com/project/badge/Coverage/8024531285164025aef972fcb059ea74)](https://app.codacy.com/gh/hxtree/cats-cradle)
[![Docs](https://github.com/hxtree/cats-cradle/actions/workflows/pages/pages-build-deployment/badge.svg)](https://hxtree.github.io/cats-cradle/)
[![GitHub Stars](https://img.shields.io/github/stars/hxtree/cats-cradle?style=social)](https://github.com/hxtree/cats-cradle/stargazers)

## Description

Explore this opinionated approach to jumpstart your enterprise application
development. Adopt modern DevOps practices on AWS with a monorepo architecture
like this one to expedite your software pipeline. This repository goes beyond
theory—it's a hands-on showcase, containing diverse placeholder packages
actively employed in developing a cooperative RPG.

### Features

- Turn-key development environment with Github Codespaces
- Infrastructure as Code (IaC) for streamlined DevOps pipeline
- Event-driven microservices architecture with data lake
- Continuous integration and continuous deployment (CI/CD) leveraging AWS

## Getting Started

### Installing

Instantly start a turn-key development environment by
[forking the repo](https://github.com/hxtree/cats-cradle/fork) and open in
Github Codespaces.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=438855397)

Alternatively, git clone the repo and build, test, and deploy apps locally using
the [devcontainer](.devcontainer/README.md).

### Architecture Guidelines

This document adheres to the guidelines outlined in
[RFC 2119](https://www.ietf.org/rfc/rfc2119.txt), which defines the standard
interpretations of key words used in IETF documents. These key words include
"MUST", "MUST NOT", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",
"MAY", and "OPTIONAL". The usage of these words in this document follows the
specifications set forth in RFC 2119, ensuring clarity and consistency in the
requirements and recommendations presented herein.

#### What is Architecture?

Outlining the stuff that is hard to change. In the realm of architecture, it's
not merely about constructing individual buildings; it's about designing the
city. Similarly, our architecture guidelines go beyond the confines of a single
project; they lay the groundwork for the entire landscape.

The guide below outlines principles and standards applicable to this repository,
ensuring that each piece contributes harmoniously to the overall cityscape we're
constructing.

![Flow Chart](docs/flow-chart.drawio.svg)

#### Twelve Factor App

Applications **MUST** be designed to run as a service. To avoid common systemic
problems in modern application development, layers **MUST** be constructed
around twelve factor app principles. Code **MUST** be agnostic of environment.

[https://12factor.net/](https://12factor.net/)

#### MACH Architecture

Overall this repository adheres to a Microservices-based, API-first,
Cloud-native, and Headless architecture.

#### Code Structure

A monorepo is believed to help streamline changes. The project **MUST** be
designed as a monorepo instead of polyrepo. Apps **MUST** be mostly serverless
microservices. Not every bit of code the organization maintains should go into
the monorepo, but those that change together stay together.

Microsoft backed Rush was selected over Nx, Lerna, Turbo, etc. for monorepo
management. Nx would probably also be suitable, but rush has worked fine so far.
A package base approach is preferred as to create a clear separation in layers.

The structure of the parent project folder **MUST** follow the pattern
established by Microsoft Rushstack. When it comes to individual package files,
those that typically change in tandem **SHOULD** be kept together. The
organization of code **SHOULD** be based on features. The code is divided into
several categories: libraries, platform, services, middleware, and clients.

#### Universal language

Javascript is the chosen base language for microservices in this project, due to
its performance, ubiquity, beginner-friendly nature, extensive adoption, and
omnipresence. Typescript, backed by Microsoft, is utilized for compiling
Javascript. Typescript brings the advantage of type hinting, which aids in
maintenance and improves the readability of code. As a guideline, Typescript
**SHOULD** be the default language for the majority of application code, unless
there's a substantial reason to opt for a different language.

#### Persistent Storage

##### S3

For persistent file storage S3 **SHOULD** be used. Buckets are a simple
abstraction layer for persistent file storage.

AWS S3 buckets **SHOULD** be provisioned following the principle of least
privilege. This principle implies that each user or service should have the
minimal permissions necessary to perform their specific tasks, and no more. This
approach minimizes the potential damage that can result from error, malicious
activity, or compromise of a specific user or service.

##### Database

Every service employing a database **MUST** maintain its dedicated database
instance within our architecture.

Specifically, code **SHOULD** rely on MongoDB, leveraging the Mongoose library
for interaction for persistent storage. In the context of microservices, we
consciously avoid the use of an Object-Relational Mapping (ORM) layer,
considering it an unnecessary abstraction.

Instead of utilizing ObjectId for identification, services **SHOULD** opt for
UUID type 4 IDs. This choice not only enhances security but also mitigates the
exposure of details such as when the ID was generated and processor-related
information.

##### Data Lake

Messages sent between services **SHOULD** adhere to a contract and persist in a
data lake. Because services communicate via queues and queues publish messages
this **SHOULD** occur automatically.

#### Infrastructure

AWS **MUST** be selected a single Infrastructure as a Service (IaaS) provider.
This project assumes it will fail before AWS does. Vendor lock-in/buy-in allows
leveraging numerous undifferentiated services. For this project that outweighs
being cloud agnostic. The cost it would take to move off AWS was considered.

##### Cloudformation

The entire infrastructure is defined as code, allowing for version control, easy
replication, and consistent environments across different stages of the
development lifecycle. All Infrastructure as Code (IaC) **MUST** be defined as
or compile to CloudFormation templates.

###### AWS CDK

AWS CDK **MUST** be selected for generating Cloudformation templates. The only
exception is for platform which **MAY** use AWS Org Formation or other
Cloudformation abstraction layers.

CDK was selected instead of
[Serverless Framework](https://github.com/serverless-stack/serverless-stack).
When it comes down to it, SST is an unnecessary and incomplete abstraction
layer. SST live lambda development works using serverless website. There does
not appear to be a need to add a reliance on SST. SST future plans, incentives,
and kickback are questionable.

#### Documentation

A README.md file **SHOULD** be added to explain each project and important
folder structures. Any code that isn't self-documenting **MUST** be accompanied
by documentation.

Documentation as code is desired. Documentation **SHOULD** be maintained where
it will be looked for.

Tsdoc **MAY** be selected as a standard for writing Typescript documentation.
Typedoc **MAY** be selected to compile documentation as code.

#### Deployments

Each app **MUST** be capable of deployment themselves using CDK via
`rushx cdk:deploy`. `rushx cdk:deploy` **MAY** be used in local development to
deploy services.

During CI, an artifact from each project **MUST** be uploaded to S3. This
artifact **SHOULD** be processed by AWS CodePipeline for CD.

#### Empowering Teams

If a team needs to rely on another team to make a change that slows down the
application development life cycle, this is unacceptable.

This separation of concerns between dev and ops teams is commonly seen in
enterprises. This introduces numerous problems. Instead Ops in ment to provide a
platform to enable Dev to focus on writting code that matters.

Dev should not be limited by Ops infulstructure, and be forced to add logic to
the same ball of mud. The should be empowered to release software. It's better
for platform to provide a L3 construct than to ship code it doesn't understand.

#### Ephemeral Environments

Furthermore, ephemeral environments **MUST** facilitate parallel development and
testing, enabling multiple teams to work on different features simultaneously
without interfering with each other. This parallelization **MUST** accelerate
development cycles and enhance collaboration, ultimately leading to faster
time-to-market and improved software quality.

Data necessary for setting up a service should move uphill from one environment
to the next through migrations. Software engineers should not require access to
production to do their job.

#### Domain-Driven Design and Ubiquitous Language

Domain-Driven Design (DDD) principles are integral to our architecture
guidelines. We emphasize the importance of establishing a Ubiquitous Language
throughout our development process. This language ensures that domain concepts
are consistently represented and understood across all stakeholders, from domain
experts to developers. By aligning our codebase with the language used in the
domain, we enhance communication, reduce ambiguity, and foster a deeper
understanding of the problem space. Therefore, all code artifacts **MUST**
reflect the Ubiquitous Language established for the respective domain,
facilitating collaboration and maintaining clarity throughout the software
development lifecycle.

### Conway's Law

In this repository, we embrace Conway's Law as a guiding principle in our
software development practices. Conway's Law states that the structure of an
organization will reflect in the design of its systems. By organizing our
codebase into modules and components that correspond to the various teams and
departments within our organization, we foster a natural alignment between our
software architecture and our organizational structure. This approach not only
enhances communication and collaboration but also promotes autonomy and
ownership.

<details>
  <summary>Provisioning</summary>

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

   </details>

## Documentation

See [Documentation](docs/index.md).

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

We welcome contributions to this open-source project. Please follow the
[code of conduct](docs/CODE_OF_CONDUCT.md) when contributing.

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
with reuse in mind and are primarily maintained for the game.
