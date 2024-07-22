# coverage-fusion

[![npm version](https://badge.fury.io/js/@galaxyops%2Frush-coverage.svg)](https://badge.fury.io/js/@galaxyops%2Frush-coverage)
[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/hxtree/galaxyops?style=social)](https://github.com/hxtree/galaxyops/stargazers)

coverage-fusion is a code coverage consolidation tool for PNPM based monorepos.

It consolidates code coverage reports from multiple projects into one report.
This allows for one coverage badge to cover the entire monorepo or one badge to
coverage each team, etc. as to help promote team ownership of code base.

This can be useful for continuous integration purposes. It can also be useful
for simultaneously browsing coverage html, et al. reports for the entire repo.

## Usage

Beforehand, use Jest (or similar) to generate
`**/**/coverage/coverage-final.json` coverage reports for each project.

Now that it's ready, run the script to merge coverage files from all projects
into a single report:

```bash
npx coverage-fusion
```

That's it! The consolidated code coverage reports are generated to cwd
`./coverage`. Reports can reviewed manually or integrated into CI.
