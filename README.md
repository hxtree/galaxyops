<h1 align="center">Keepers Cradle</h1>

[![CI](https://github.com/hxtree/keepers-cradle/actions/workflows/ci.yml/badge.svg)](https://github.com/hxtree/keepers-crttps://shields.io/badge/AWS%23FF9900?adle/actions/workflows/ci.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/keepers-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/monorepo&utm_campaign=Badge_Grade)
![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![AWS CDKv2](https://shields.io/badge/AWS%20CDKv2-FF9900?logo=amazon-aws&logoColor=FFF&style=flat-square)
- [ ] The pull request is complete according to the [Definition of Done](https://sites.google.com/leviy.com/development/development/definition-of-done)
  - [ ] Acceptance criteria in the ticket have been met
  - [ ] Automated tests are written according to the [test plan](https://docs.google.com/document/d/106bwyTS-gIrT7edLW4_5pCl6DSDaZBEMiiyBw1za0R8/edit#heading=h.5ybg7xjjzlkj)
  - [ ] The documentation is up-to-date
  - [ ] Deployment automation includes newly introduced environment variables and credentials are added to the credentials.fact file of all servers
- [ ] The pull request has a descriptive title that describes what has changed, and provides enough context for the changelog
- [ ] When applicable, the pull request title starts with the issue number
[![Slack](https://img.shields.io/badge/slack-keeperscradle-purple)](https://ouxsoft.slack.com/archives/C02FR135CN9)

**Keepers Cradle** is a online mobile RPG.

This monorepo contains the game engine, development container, and
infrastructure as code (IaC). The serverless backend is programmed primarly in
Typescript. Microservices are deployed using AWS CDKv2 for IaC. The game engine
client is built using a Unreal Engine 5.

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

## Contributing

Pull requests and bug reports are welcome on GitHub at
[https://github.com/hxtree/keepers-cradle](https://github.com/hxtree/keepers-cradle).
This project is intended to be a safe, welcoming space for collaboration, and
contributors are expected to adhere to the
[code of conduct](docs/CODE_OF_CONDUCT.md).

## List of Contributors

<a href="https://github.com/hxtree/keepers-cradle/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hxtree/keepers-cradle" />
</a>

:hourglass: :infinity: :white_heart:
