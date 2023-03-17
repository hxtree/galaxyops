# @cats-cradle/rush-coverage

RushCoverage is a code coverage consolidation tool for RushJs based monorepos.

It consolidate code coverage reports from multiple projects into one. This
allows one coverage badge to cover the entire monorepo or one badge to coverage
each team, etc. as to help promote team ownership of code base.

This is particularly useful for continuous integration purposes. It can also be
useful for browsing html, etc. coverage reports for the entire repo at once.

## Usage

Beforehand, use Jest or similar to generate `**/**/coverage/coverage-final.json`
coverage reports for each project.

Run script to merge coverage files for all projects into single root
`/coverage/` directory.

```bash
npx @cats-cradle/rush-coverage
```

The consolidated code coverage reports are generated to root monorepo
`/coverage` directory. Reports can reviewed manually or integrated into CI.

### Github Action

Github Action Codacy integration example.

```yaml
name: CodeCoverage

on:
  workflow_call:
    secrets:
      CODACY_PROJECT_TOKEN:
        required: true
      IMPACTED_BY_SHA:
        required: true

jobs:
  rush-coverage:
    name: rush coverage
    timeout-minutes: 15
    runs-on: ubuntu-latest
    steps:
      - name: checkout repository
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '16.18.0'

      - name: Rush install
        run: node common/scripts/install-run-rush.js install

      - name: Build
        run: node common/scripts/install-run-rush.js build

      - name: Test coverage
        run: node common/scripts/install-run-rush.js test:cov

      - name: Merge coverage reports
        run: npx @cats-cradle/rush-coverage

      - name: Submit merged coverage report
        uses: codacy/codacy-coverage-reporter-action@v1.3.0
        with:
          project-token: ${{ secrets.CODACY_PROJECT_TOKEN }}
          coverage-reports: coverage/lcov.info
```

## How it Works

RushCoverage works by obtaining a list of all projects from the `rush.json`.
Then it checks each project for a compatible coverage file to gather a list of
all coverage files. It then combines all the coverage files found into one
consolidated coverage file that can be used to monitor code coverage for the
entire monorepo.
