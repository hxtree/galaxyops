<h1 align="center">Cats Cradle :yarn:</h1>

**Cats Cradle** is a unreleased mobile role-playing game (RPG).

This monorepo contains platform as a service (PaaS), microservices, a
devcontainer, and infrastructure as code (IaC) used to continuously deploy Cats
Cradle in its entirety.

Although each package is for the game, many are released and available on NPM.

The game engine client is built using Unreal Engine 5.

[![CI](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml/badge.svg)](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml)
[![Code Quality](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/cats-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/cats-cradle&utm_campaign=Badge_Grade)
[![Codacy Coverage](https://app.codacy.com/project/badge/Coverage/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/cats-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/cats-cradle&utm_campaign=Badge_Coverage)
[![NPM Packages](https://img.shields.io/static/v1?label=Publishes&message=11%20Packages&color=000?style=flat&logo=npm)](https://www.npmjs.com/search?q=%40cats-cradle)

## Getting Started

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=438855397)

Use the link above for a turn-key codespace development environment.
Alternatively, locally build, test, and deploy apps using the devcontainer:

1. Clone this repo using [Git](https://git-scm.com/downloads).

   ```bash
   git clone git@github.com:hxtree/cats-cradle
   ```

2. Install [Docker](https://docs.docker.com/get-docker/),
   [VSCode](https://code.visualstudio.com/), and the
   [Remote - Containers](https://code.visualstudio.com/docs/remote/containers-tutorial)
   extension.

3. Open repo Project Folder using VSCode and build and connect to remote
   container.

---

> **Note** Development of `@cats-cradle/base-game-engine` client requires
> [additional tools](clients/base-game-engine/README.md).

### Lifecycle of a Pull Request (~5 mins)

1. Create a new branch from the main using git.

   ```bash
   git checkout -b feature/improve-readme
   ```

2. Work on changes (e.g. fix a bug or add a new feature). Build, lint, and unit
   test projects.

   ```bash
   rush build
   rush lint
   rush test
   ```

3. Stage and commit changes using
   [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification).

   ```bash
   git add .
   git commit -m 'doc: fix spelling of computers'
   ```

4. If applicable, document [semantic version](https://semver.org/) changes,
   generate Changelogs, and commit changes.

   ```bash
   rush change
   rush version --bump
   git commit -m 'chore: bump change log'
   ```

5. Push code and open a PR. Celebrate contributing to @cats-cradle!

   ```bash
   git push
   ```

## Initial AWS Deployment

1. Setup [AWS Org Formation](/platform/aws-org-formation/README.md).

2. Login via SSO standard account, bootstrap deployments, deploy platform, and
   then deploy apps.

   ```bash
   rush sso
   rush cdk:bootstrap
   rush cdk:deploy --to tag:deploy-platform
   rush cdk:deploy --to tag:deploy-app
   ```

3. Login via SSO to tools account and then deploy tools.

   ```bash
   rush sso -p tools
   rush cdk:bootstrap
   rush cdk:deploy --to tag:deploy-tools
   ```

## Documentation

- [Git Setup](docs/git-setup.md)
- [Architecture Guidelines](docs/architecture-guidelines.md)
- [Coding Standards](docs/CODING_STANDARDS.md)
- [Code of Conduct](docs/CODE_OF_CONDUCT.md)
- [Important Third Party Docs](docs/third-party-docs.md)

> **Note** Use `rush help` for information on builtin commands.

## Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Pull requests and bug reports are welcome on GitHub at
<https://github.com/hxtree/cats-cradle>. This project is intended to be a safe,
welcoming space for collaboration, and contributors are expected to adhere to
the [code of conduct](docs/CODE_OF_CONDUCT.md).

The quickest way to start contributing is to
[fork repo](https://github.com/hxtree/cats-cradle/fork) and submit changes back.

### Our Contributors

<a href="https://github.com/hxtree/cats-cradle/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hxtree/cats-cradle" />
</a>

<p align="center">
:hourglass: :infinity: :white_heart:
</p>
