# @cats-cradle/rush-coverage

RushCoverage is a code coverage consolidation tool for RushJs based monorepos.

It consolidate code coverage reports from multiple projects into one. This
allows one coverage badge to cover the entire monorepo or one badge to coverage
each team, etc. as to help promote team ownership of code base. This is
particularlly useful for continuous intergration purposes.

RushCoverage works by obtaining a list of all projects from the `rush.json`.
Then it checks each project for a compatable coverage file and gathers a list of
all coverage files. It then combines all the coverage files found into one
consildated coverage file which can be used to monitor coverage accross the
entire monorepo.

## Usage

```bash

rush test:cov && rushx start
```

## TODO

- [ ] add tag filter support as arg
