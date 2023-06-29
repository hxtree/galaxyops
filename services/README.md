# Services

This directory contains deployable organization services. Here are some
important guidelines:

- **Dependency on Platform**: Services rely on platform projects located in the
  `platform/` directory. Make sure to deploy platform projects before deploying
  services.

- **Business Logic**: Services in this directory should primarily focus on
  business logic, as they are company-specific.

- **Independence**: Each service must be independent and should not have
  dependencies on other services. When adding a new service, one should only
  need to modify the project folder and the monorepo configuration (`rush.json`)
  file. If there are any interconnected platform components used by multiple
  services, place them in appropriate directories like `/platform`,
  `/libraries`, etc.

- **Uniform Structure**: Each subfolder within this directory represents a
  package that contains source code and Infrastructure as Code (IaC) used for
  deployment. The structure should follow the pattern below:

```graphql
./*
  └─ services - # contains deployable microservices.
     └─ ./**/*
        ├─ bin - # binary file that invokes ./stack deployment.
        ├─ src - # source code.
        └─ stack - # CDK deployment code.
```

## References

- [Structuring Monorepos](https://danoncoding.com/monorepos-for-microservices-part-2-code-structure-e2bddac3474d)
