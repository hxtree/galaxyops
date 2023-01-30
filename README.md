<h1 align="center">Keepers Cradle</h1>

**Keepers Cradle** is a unreleased online mobile role-playing game (RPG) looking
for contributors.

This monorepo contains the development container, game engine, and
infrastructure as code (IaC) used to continously deploy Keepers Cradle in its
entirety.

The backend consist of many microservices programmed primarly in Typescript.
These microservices are deployed using IaC, specically AWS CDKv2.

The game engine client is built using Unreal Engine 5.

[![Continue Intergration](https://github.com/hxtree/keepers-cradle/actions/workflows/ci.yml/badge.svg)](https://github.com/hxtree/keepers-cradle/actions/workflows/ci.yml)
[![Code Quality](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/keepers-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/keepers-cradle&utm_campaign=Badge_Grade)
[![Codacy Coverage](https://app.codacy.com/project/badge/Coverage/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/keepers-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/keepers-cradle&utm_campaign=Badge_Coverage)
[![Slack](https://img.shields.io/badge/slack-keeperscradle-purple)](https://keeperscradle.slack.com/archives/C04JH10RP9V)
![TypeScript](https://shields.io/badge/typescript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![AWS CDKv2](https://shields.io/badge/cdkv2-FF9900?logo=amazon-aws&logoColor=FFF&style=flat-square)

## Getting Started

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=438855397)

Alternatively, locally build, test, and deploy apps using the devcontainer:

1. Clone this repo using [Git](https://git-scm.com/downloads).

   ```bash
   git clone git@github.com:hxtree/keepers-cradle
   ```

2. Install [Docker](https://docs.docker.com/get-docker/),
   [VSCode](https://code.visualstudio.com/), and the
   [Remote - Containers](https://code.visualstudio.com/docs/remote/containers-tutorial)
   extension.

3. Open repo Project Folder using VSCode and build and connect to remote
   container.

---

> **Note** Development of `@org-clients/base-game-engine` client requires
> [additional tools](clients/base-game-engine/README.md).

### Folder Structure

```graphql
./*
  ├─ clients - # user facing clients.
  ├─ common - # rushjs common folder; contains scripts, commands, etc.
  ├─ docs - # repo wide documentation.
  ├─ libraries - # resources intented for use in three or more packages.
  │  └─ api-client - # openapi generated clients.
  ├─ packages - # contains deployable microservices.
  │  └─ ./**/*
  │     ├─ bin - # binary file that invokes stack.
  │     ├─ src - # source code.
  │     └─ stack - # CDK deployment code.
  ├─ platform - # fundemental bases for other applications.
  │  ├─ aws-org-formation - # AWS account provisioning, SSO, etc.
  │  ├─ constructs - # Custom AWS constructs used in package deployments.
  │  ├─ eslint-config - # eslint configurations.
  │  ├─ rigs - # rushjs heft rigs.
  │  └─ lambda-layers - # serverless lambda layers.
  └─ tests - # e2e tests.
```

## Documentation

- [Git Setup](docs/git-setup.md)
- [Architecture Guidelines](docs/architecture-guidelines.md)
- [Coding Standards](docs/CODING_STANDARDS.md)
- [Code of Conduct](docs/CODE_OF_CONDUCT.md)
- [Third Party Docs](docs/third-party-docs.md)

> **Note** Use `rush help` for information on builtin commands.

## Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Pull requests and bug reports are welcome on GitHub at
<https://github.com/hxtree/keepers-cradle>. This project is intended to be a
safe, welcoming space for collaboration, and contributors are expected to adhere
to the [code of conduct](docs/CODE_OF_CONDUCT.md).

The quickest way to start contibuting is to
[fork repo](https://github.com/hxtree/keepers-cradle/fork) and submit changes
back.

### Our Contributors

<a href="https://github.com/hxtree/keepers-cradle/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hxtree/keepers-cradle" />
</a>

<p align="center">
:hourglass: :infinity: :white_heart:
</p>
