# @cats-cradle

[![CI](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml/badge.svg)](https://github.com/hxtree/cats-cradle/actions/workflows/on-merge.yml)
[![Code Quality](https://app.codacy.com/project/badge/Grade/8024531285164025aef972fcb059ea74)](https://www.codacy.com/gh/hxtree/cats-cradle/dashboard?utm_source=github.com&utm_medium=referral&utm_content=hxtree/cats-cradle&utm_campaign=Badge_Grade)
[![Codacy Coverage](https://app.codacy.com/project/badge/Coverage/8024531285164025aef972fcb059ea74)](https://app.codacy.com/gh/hxtree/cats-cradle)
[![Docs](https://github.com/hxtree/cats-cradle/actions/workflows/pages/pages-build-deployment/badge.svg)](https://hxtree.github.io/cats-cradle/)
[![GitHub Stars](https://img.shields.io/github/stars/hxtree/cats-cradle?style=social)](https://github.com/hxtree/cats-cradle/stargazers)

Explore this opinionated approach to jumpstart your enterprise application
development. Adopt modern DevOps practices on AWS with a monorepo architecture
like this one to expedite your software pipeline. This repository goes beyond
theory—it's a hands-on showcase, containing diverse placeholder packages
actively employed in developing a cooperative RPG.

## Getting Started

Instantly start a turn-key development environment by
[forking the repo](https://github.com/hxtree/cats-cradle/fork) and open in
Github Codespaces.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=438855397)

Alternatively, git clone the repo and build, test, and deploy apps locally using
the [devcontainer](.devcontainer/README.md).

<details>
  <summary>Pull Request Lifecycle (~5 mins)</summary>

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

## Infrastructure

### Architecture

This repository houses a collection of event-driven microservices, built on a
powerful Platform as a Service (PaaS) foundation. The integration of
Infrastructure as Code (IaC) ensures a streamlined DevOps pipeline for
continuous integration and continuous deployment (CI/CD) leveraging the power of
AWS.

![Flow Chart](docs/flow-chart.drawio.svg)

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
