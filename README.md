# @cats-cradle

**Out-of-the-Box AWS Enterprise Architecture for DevOps Teams**

[![CI](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml/badge.svg)](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml)
[![Code Quality](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/cats-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/cats-cradle&utm_campaign=Badge_Grade)
[![Codacy Coverage](https://app.codacy.com/project/badge/Coverage/8024531285164025aef972fcb059ea74)](https://app.codacy.com/gh/hxtree/cats-cradle)
[![Docs](https://github.com/hxtree/cats-cradle/actions/workflows/pages/pages-build-deployment/badge.svg)](https://hxtree.github.io/cats-cradle/)
[![GitHub Stars](https://img.shields.io/github/stars/hxtree/cats-cradle?style=social)](https://github.com/hxtree/cats-cradle/stargazers)

Architecture outlines the stuff that is hard to change. In the realm of
architecture, it's not merely about constructing individual buildings; it's
about designing the city. Our opinionated approach to running enterprise
software architecture on AWS extends beyond individual projects, laying the
groundwork for the entire landscape.

Jumpstart your enterprise application development journey. Speed up your
software pipeline by embracing modern DevOps practices on AWS, utilizing a
monorepo architecture like this one[^1]. This repository goes beyond theory—it's
a hands-on showcase, containing diverse working placeholder packages actively
employed in developing a cooperative RPG.

### Key Features

- Turn-key development environment with Github Codespaces.
- Emphemiral environments with TLS certifcates, email, etc.
- Event-driven microservices architecture with data lake.
- Interservice schema contracts, offering automatic mocking, faking, and
  validation pipes for seamless development and data integrity.
- User registration and authentication functionality.
- Single-page application (SPA) frontend with backend for frontend (BFF)
  architecture.
- Infrastructure as Code (IaC) for streamlined DevOps pipeline.
- Continuous integration and continuous deployment (CI/CD) leveraging AWS.
- Happy productive engineers.

## Getting Started

### Installing

The easiest way to start a develop environment is by
[forking the repo](https://github.com/hxtree/cats-cradle/fork) and open in
Github Codespaces.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=438855397)

Alternatively, git clone the repo and build, test, and deploy apps locally using
the [devcontainer](.devcontainer/README.md).

### Architecture Guidelines

![Flow Chart](docs/flow-chart.drawio.svg)

The guide below outlines principles and standards applicable to this repository,
ensuring that each piece contributes harmoniously to the overall cityscape we're
constructing.

#### Code Structure

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

#### Universal language

Javascript is the chosen base language for microservices in this project, due to
its performance, ubiquity, beginner-friendly nature, extensive adoption, and
omnipresence. Typescript, backed by Microsoft, is utilized for compiling
Javascript. Typescript brings the advantage of type hinting, which aids in
maintenance and improves the readability of code. As a guideline, Typescript
**SHOULD** be the default language for the majority of application code, unless
there's a substantial reason to opt for a different language.

#### Infrastructure as Code

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

AWS CDK **MUST** be selected for generating Cloudformation templates. The only
exception is for platform which **MAY** use AWS Org Formation or other
Cloudformation abstraction layers. CDK works well for generating most L1 and L2
Constructrs. Althouh other frameworks offer more L3 Constructs, L3 Constructs
are more business specific and **SHOULD** be maintained by platform instead of a
third party software vendor.

#### Deployments

Each app **MUST** be capable of deployment themselves of using CDK via
`rushx cdk:deploy`. This command **MAY** also be used in local development to
deploy services.

During CI, an artifact from each project **MUST** be generated and uploaded to
S3 for auditing and deployment purposes. This artifact **SHOULD** be processed
by AWS CodePipeline for CD.

<details>
  <summary>Initial Infrastructure Provisioning</summary>

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
