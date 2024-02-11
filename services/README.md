# Services

This directory contains deployable organization services. Here are some
important guidelines:

## Guidelines

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

- **Microservices Architecture:** The repository is organized into modular
  microservices, each focusing on specific business functionalities. This design
  promotes maintainability, scalability, and ease of deployment.

- **Event-Driven Design:** The microservices communicate through events,
  allowing for loosely coupled components and enabling efficient handling of
  business processes. The use of event-driven microservices enables flexibility,
  scalability, and responsiveness to changing business needs.

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

## Release

Services are released on
[Github](https://github.com/hxtree/cats-cradle/releases).

## References

- [Structuring Monorepos](https://danoncoding.com/monorepos-for-microservices-part-2-code-structure-e2bddac3474d)
