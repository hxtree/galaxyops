# @cats-cradle/rush-coverage

RushCoverage is a code coverage consolidation tool for RushJs based monorepos.

It consolidate code coverage reports from multiple projects into one report.
This allows for one coverage badge to cover the entire monorepo or one badge to
coverage each team, etc. as to help promote team ownership of code base.

This can be useful for continuous integration purposes. It can also be useful
for browsing coverage html, et al. reports for the entire repo simultaneously.

## Usage

Beforehand, use Jest (or similar) to generate
`**/**/coverage/coverage-final.json` coverage reports for each project.

Now its ready to run the script to merge coverage files from all projects into a
single `/coverage` directory:

```bash
npx @cats-cradle/rush-coverage@1.1.4
```

That's it. The consolidated code coverage reports are generated to cwd
`/coverage`. Reports can reviewed manually or integrated into CI.

### Github Action

This is an example of how to use a Github Action, RushCoverage, and third party,
in this case [Codacy](https://www.codacy.com/), to generate code coverage in CI.

See vendor specific documentation for specific instructions for vendor coverage
submission, badging, pr feedback, etc. Change `test:cov` command as specific to
monorepo. Set secrets, `CODACY_PROJECT_TOKEN` as necessary.

```yaml
name: CodeCoverage

on:
  workflow_call:
    secrets:
      CODACY_PROJECT_TOKEN:
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

      - name: Rush build
        run: node common/scripts/install-run-rush.js build

      - name: Rush test with coverage
        run: node common/scripts/install-run-rush.js test:cov

      - name: Merge coverage reports
        run: npx @cats-cradle/rush-coverage@1.1.4

      - name: Submit merged coverage report
        uses: codacy/codacy-coverage-reporter-action@v1.3.0
        with:
          project-token: ${{ secrets.CODACY_PROJECT_TOKEN }}
          coverage-reports: coverage/lcov.info
```

## How it Works

RushCoverage works by obtaining a list of all projects from the `rush.json`.
Then it checks each project for a compatible `./coverage/coverage-final.json` to
gather a list of all coverage files. It then combines all the coverage files
found into one consolidated coverage file to monitor code coverage for the
entire monorepo.
