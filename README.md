# @cats-cradle

[![CI](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml/badge.svg)](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml)
[![Code Quality](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/cats-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/cats-cradle&utm_campaign=Badge_Grade)
[![Codacy Coverage](https://app.codacy.com/project/badge/Coverage/8024531285164025aef972fcb059ea74)](https://app.codacy.com/gh/hxtree/cats-cradle)
[![GitHub Stars](https://img.shields.io/github/stars/hxtree/cats-cradle?style=social)](https://github.com/hxtree/cats-cradle/stargazers)

An **open-souce enterprise monorepo** designed to provide a modular and scalable
architecture for enterprises looking to **accelerate** using modern software
devops practices.

## Key Features

- **Microservices Architecture:** The repository is organized into modular
  microservices, each focusing on specific business functionalities. This design
  promotes maintainability, scalability, and ease of deployment.

- **Event-Driven Design:** The microservices communicate through events,
  allowing for loosely coupled components and enabling efficient handling of
  business processes. The use of event-driven microservices enables flexibility,
  scalability, and responsiveness to changing business needs.

- **DevOps CI/CD:** The repository includes a robust DevOps pipeline for
  continuous integration and continuous deployment. Automated testing, build,
  and deployment processes ensure a smooth and reliable software delivery
  lifecycle. Services are released on
  [Github](https://github.com/hxtree/cats-cradle/releases). Reusable libraries
  are published on [NPM](https://www.npmjs.com/search?q=%40cats-cradle).

- **Platform as a Service (PaaS):** Leveraging a PaaS foundation simplifies
  infrastructure management and allows developers to focus on writing code
  without worrying about the underlying infrastructure.

- **Infrastructure as Code (IaC):** The entire infrastructure is defined as
  code, allowing for version control, easy replication, and consistent
  environments across different stages of the development lifecycle.

This repository functions as a foundation for architecting monorepos. In
addition, many example packages are actively used in the development of a
nostalgic co-op RPG.

## Getting Started

Start up an instant turn-key development environment by
[forking the repo](https://github.com/hxtree/cats-cradle/fork) and open in
Github Codespaces.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=438855397)

Alternatively, git clone the repo and build, test, and deploy apps locally using
the [devcontainer](.devcontainer/README.md).

## Architecture

This repository houses a collection of event-driven microservices, built on a
powerful Platform as a Service (PaaS) foundation. The integration of
Infrastructure as Code (IaC) ensures a streamlined DevOps pipeline for
continuous integration and continuous deployment (CI/CD) leveraging the power of
AWS.

![Flow Chart](docs/flow-chart-dark.drawio.svg)

### Pull Request Lifecycle (~5 mins)

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

## Documentation

See [Documentation](docs/index.md).

> **Note** Use `rush help` for information on builtin commands.

## Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Contribute to any part of the monorepo. Join us on this development journey as
we build an open-source enterprise monororepo and/or develop bring the game to
life.

Pull requests and bug reports are welcome on GitHub at
<https://github.com/hxtree/cats-cradle>. This project is intended to be a safe,
welcoming space for collaboration, and contributors are expected to adhere to
the [code of conduct](docs/CODE_OF_CONDUCT.md).

### Our Contributors

<a href="https://github.com/hxtree/cats-cradle/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hxtree/cats-cradle" />
</a>

## License

Packages available on [NPM](https://www.npmjs.com/search?q=%40cats-cradle) are
MIT licensed. Packages without a specific license have not yet been developed
with reuse in mind and are primarily maintained for the game.

<p align="center">
🤍 / ⌛ / ♾️
</p>
