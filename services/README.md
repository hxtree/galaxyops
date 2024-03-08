# Services

This directory contains deployable organization services.

## NestJS

NestJS **SHOULD** be selected as a framework for building service. It comes with
dependency injection, swagger integration for generating OpenAPI spec, is
decorator based, and is sponsored as an open collective project.

Here are some important guidelines for building services:

## Guidelines

- **Serverless**: Services projects **SHOULD** be serverless, unless there is
  good reason to use alternative. Function as a Service (FaaS) are often by big
  three cloud providers.

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

- **Persistent Storage:**

  - **S3**: For persistent file storage S3 **SHOULD** be used. Buckets are a
    simple abstraction layer for persistent file storage. AWS S3 buckets
    **SHOULD** be provisioned following the principle of least privilege. This
    principle implies that each user or service should have the minimal
    permissions necessary to perform their specific tasks, and no more. This
    approach minimizes the potential damage that can result from error,
    malicious activity, or compromise of a specific user or service.

  - **Database**: Every service employing a database **MUST** maintain its
    dedicated database instance within our architecture.Specifically, code
    **SHOULD** rely on MongoDB, leveraging the Mongoose library for interaction
    for persistent storage. In the context of microservices, we consciously
    avoid the use of an Object-Relational Mapping (ORM) layer, considering it an
    unnecessary abstraction. Instead of utilizing ObjectId for identification,
    services **SHOULD** opt for UUID type 4 IDs. This choice not only enhances
    security but also mitigates the exposure of details such as when the ID was
    generated and processor-related information.

  - **Data Lake**: Messages sent between services **SHOULD** adhere to a
    contract and persist in a data lake. Because services communicate via queues
    and queues publish messages this **SHOULD** occur automatically.

- **Event-Driven Design:** The microservices communicate through events,
  allowing for loosely coupled components and enabling efficient handling of
  business processes. The use of event-driven microservices enables flexibility,
  scalability, and responsiveness to changing business needs.

- **Domain-Driven Design and Ubiquitous Language:** Domain-Driven Design (DDD)
  principles are integral to our architecture guidelines. We emphasize the
  importance of establishing a Ubiquitous Language throughout our development
  process. This language ensures that domain concepts are consistently
  represented and understood across all stakeholders, from domain experts to
  developers. By aligning our codebase with the language used in the domain, we
  enhance communication, reduce ambiguity, and foster a deeper understanding of
  the problem space. Therefore, all code artifacts **MUST** reflect the
  Ubiquitous Language established for the respective domain, facilitating
  collaboration and maintaining clarity throughout the software development
  lifecycle.

- **Conway's Law:** In this repository, we embrace Conway's Law as a guiding
  principle in our software development practices. Conway's Law states that the
  structure of an organization will reflect in the design of its systems. By
  organizing our codebase into modules and components that correspond to the
  various teams and departments within our organization, we foster a natural
  alignment between our software architecture and our organizational structure.
  This approach not only enhances communication and collaboration but also
  promotes autonomy and ownership.

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
