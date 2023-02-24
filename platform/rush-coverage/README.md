# @cats-cradle/rush-coverage

RushCoverage is a code coverage consolidation tool for RushJs based monorepos.

It consolidate code coverage reports from multiple projects into one. This
allows one coverage badge to cover the entire monorepo or one badge to coverage
each team, etc. as to help promote team ownership of code base. This is
particularly useful for continuous integration purposes.

RushCoverage works by obtaining a list of all projects from the `rush.json`.
Then it checks each project for a compatible coverage file and gathers a list of
all coverage files. It then combines all the coverage files found into one
consolidated coverage file which can be used to monitor coverage across the
entire monorepo.

## Usage

Run code coverage for each project then run this project to combine them.

```bash

rush test:cov && rushx start
```

Coverage files will be generated to `coverage/` directory. These files can then
be used to reports for entire monorepo or in CI to get monitor code coverage.
