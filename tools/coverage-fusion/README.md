# coverage-fusion

[![npm version](https://badge.fury.io/js/coverage-fusion.svg)](https://badge.fury.io/js/coverage-fusion)
[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/hxtree/galaxyops?style=social)](https://github.com/hxtree/galaxyops/stargazers)

coverage-fusion consolidates monorepo code coverage report.

It merges code coverage reports from multiple projects into a single report.
This allows for one coverage badge to cover the entire monorepo or one badge to
coverage each team. A coverage report badge can be a helpful KPI.

## Usage

Beforehand, use a test runner (such as Jest or similar) to generate
`**/**/coverage/coverage-final.json` coverage reports for each project.

Now that there are multiple coverage report files, simply run the script to
merge the coverage reports from all projects into a single report:

```bash
npx coverage-fusion
```

That's it! The consolidated code coverage reports are generated to cwd
`./coverage`.

Reports can be reviewed manually or integrated into CI.
