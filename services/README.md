# Services

This directory contains deployable organization services. Services within this
directory SHOULD contain business logic.

A service SHOULD NOT have a dependencies on another service. Each service MUST
be independent of any other service. Deleting or adding a service SHOULD only
involve changing the monorepo config `rush.json` file and the actual project
folder.

Each sub folders in this directory contains MUST contain a package. The package
should contain of the source code and the IaC used to deploy the package:

```graphql
./*
  └─ services - # contains deployable microservices.
     └─ ./**/*
        ├─ bin - # binary file that invokes ./stack deployment.
        ├─ src - # source code.
        └─ stack - # CDK deployment code.
```

> **Note** `platform/` projects MUST be deployed prior to deploying `services/`
> projects.

---

> **Warning** As to prevent interservice dependencies, packages within this
> folder MUST not contain any interconnected platform constructs that are used
> as the fundamental bases to make multiple applications work. Instead, those
> should be placed in either in `/platform`, `/libraries`, etc.

---

## References

- [Structuring Monorepos](https://danoncoding.com/monorepos-for-microservices-part-2-code-structure-e2bddac3474d)
