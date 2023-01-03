<h1 align="center">Keepers Cradle</h1>

[![CI](https://github.com/hxtree/keepers-cradle/actions/workflows/ci.yml/badge.svg)](https://github.com/hxtree/keepers-crttps://shields.io/badge/AWS%23FF9900?adle/actions/workflows/ci.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/keepers-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/monorepo&utm_campaign=Badge_Grade)
![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![AWS CDKv2](https://shields.io/badge/AWS%20CDKv2-FF9900?logo=amazon-aws&logoColor=FFF&style=flat-square)
[![Slack](https://img.shields.io/badge/slack-keeperscradle-purple)](https://ouxsoft.slack.com/archives/C02FR135CN9)

**Keepers Cradle** is a online mobile RPG.

This monorepo contains the game engine, development container, and
infrastructure as code (IaC). The serverless backend is programmed primarly in
Typescript. Microservices are deployed using AWS CDKv2 for IaC. The game engine
client is built using a Unreal Engine 5.

## Getting Started

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=438855397)

Altenratively, build, test, and deploy apps locally using the devcontainer:

1. Clone this repo using [Git](https://git-scm.com/downloads).

   ```bash
   git clone git@github.com:hxtree/monorepo.git
   ```

2. Install [Docker](https://docs.docker.com/get-docker/),
   [VSCode](https://code.visualstudio.com/), and the
   [Remote - Containers](https://code.visualstudio.com/docs/remote/containers-tutorial)
   extension.

3. Open repo Project Folder using VSCode and build and connect to remote
   container.

For information on builtin commands, use `rush help`.

Development of `@org-clients/base-game-engine` client requires
[additional tools](clients/base-game-engine/README.md).

![Base Game Client](/docs/assets/images/shield-sword.png)

## Documentation

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
  │  └─ lambda-layers - # serverless lambda layers.
  ├─ rigs - # rushjs heft rigs.
  └─ tests - # e2e tests.
```

- [Git Setup](docs/git-setup.md)
- [Architecture Guidelines](docs/architecture-guidelines.md)
- [Coding Standards](docs/CODING_STANDARDS.md)
- [Code of Conduct](docs/CODE_OF_CONDUCT.md)
- [Third Party Docs](docs/third-party-docs.md)

## Contributing

Pull requests and bug reports are welcome on GitHub at
[https://github.com/hxtree/keepers-cradle](https://github.com/hxtree/keepers-cradle).
This project is intended to be a safe, welcoming space for collaboration, and
contributors are expected to adhere to the
[code of conduct](docs/CODE_OF_CONDUCT.md).

### List of Contributors

<a href="https://github.com/hxtree/keepers-cradle/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hxtree/keepers-cradle" />
</a>

<p align="center">
:hourglass: :infinity: :white_heart:
</p>
