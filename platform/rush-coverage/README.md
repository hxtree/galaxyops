# @cats-cradle/rush-coverage

RushCoverage is a code coverage consolidation tool for RushJs based monorepos.

It consolidate code coverage reports from multiple projects into one. This
allows one coverage badge to cover the entire monorepo or one badge to coverage
each team, etc. as to help promote team ownership of code base.

This is particularly useful for continuous integration purposes. It can also be
useful for browsing html, etc. coverage reports for the entire repo at once.

## Usage

Run code coverage with a tool such as Jest to generate the necessary
`**/**/coverage/coverage-final.json` file for each project. Afterwards, run this
project to combine them.

```bash
rushx start
```

This will generate and save collective coverage files to the monorepo root
`/coverage/` directory. These files within this directory can then be used to
report code coverage for entire monorepo. They can be used in CI to get monitor
code coverage same as any single coverage report can be.

## How it Works

RushCoverage works by obtaining a list of all projects from the `rush.json`.
Then it checks each project for a compatible coverage file and gathers a list of
all coverage files. It then combines all the coverage files found into one
consolidated coverage file that can be used to monitor code coverage for the
entire monorepo.
