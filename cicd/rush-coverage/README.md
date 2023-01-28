# @org-cicd/rush-coverage

RushCoverage is a code coverage continuous intergration consolidation tool for
RushJs monorepo.

It consolidate code coverage reports from multiple projects into one. This
allows one coverage badge to cover the entire monorepo or one badge to coverage
each team, etc. as to help promote team ownership of code base.

RushCoverage works by obtaining a list of all projects from the `rush.json`.
Then it checks each project for a compatable coverage file and gathers a list of
all coverage files. It then combines all the coverage files found into one
consildated coverage file which can be used to monitor coverage accross the
entire monorepo.

## TODO

- [ ] consolidate by tool
- [ ] finalize out folde structure
