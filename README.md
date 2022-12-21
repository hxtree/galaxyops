# Keepers Cradle  :hourglass: :infinity: :white_heart:

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/monorepo/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/monorepo&utm_campaign=Badge_Grade)
[![GitHub issues by-label](https://img.shields.io/github/issues/hxtree/monorepo/help%20wanted.svg)](https://github.com/hxtree/monorepo/issues)

**Keepers Cradle** is a online mobile RPG.

This monorepo contains the game engine, development container, and infrastructure as code (IaC).
The serverless backend is programmed primarly in Typescript.
Microservices are deployed using AWS CDKv2 for IaC.
The game engine client is built using a Unreal Engine 5.

![Base Game Client](/docs/assets/images/shield-sword.png)

## Getting Started

Get started building, testing, and deploying apps.

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

## Documentation

- [Git Setup](docs/git-setup.md)
- [Architecture Guidelines](docs/architecture-guidelines.md)
- [Coding Standards](docs/CODING_STANDARDS.md)
- [Code of Conduct](docs/CODE_OF_CONDUCT.md)
- [Third Party Docs](docs/third-party-docs.md)
