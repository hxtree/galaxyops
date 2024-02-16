# Architecture Guidelines

## Introduction

This document adheres to the guidelines outlined in
[RFC 2119](https://www.ietf.org/rfc/rfc2119.txt), which defines the standard
interpretations of key words used in IETF documents. These key words include
"MUST", "MUST NOT", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",
"MAY", and "OPTIONAL". The usage of these words in this document follows the
specifications set forth in RFC 2119, ensuring clarity and consistency in the
requirements and recommendations presented herein.

## Architecture Guidelines

Outlining the stuff that is hard to change. In the realm of architecture, it's not merely about constructing individual
buildings; it's about designing the city. Smilarly, our architecture guidelines
go beyond the confines of a single project; they lay the groundwork for the
entire landscape.

The guide below outlines principles and standards applicable to this repository,
ensuring that each piece contributes harmoniously to the overall cityscape we're
constructing.

### Twelve Factor App

Applications **MUST** be designed to run as a service. To avoid common systemic
problems in modern application development, layers **MUST** be constructed
around twelve factor app principles. Code **MUST** be agnostic of environment.

[https://12factor.net/](https://12factor.net/)

### MACH Architecture

Overall this repository adheres to a Microservices-based, API-first,
Cloud-native, and Headless architecture.

### Language

#### Typescript

Javascript was selected as a base language for microservices due to its
performance and omnipresence. Microsoft backed Typescript compiling is used for
Javascript. Typescript offers typehinting, easies in maintenance, and code
readability. Typescript SHOULD be used for most application code unless there is
good reason to differ.

### Monorepo

A monorepo is believed to help streamline changes. The project **MUST** be
designed as a monorepo instead of polyrepo. Apps **MUST** be mostly serverless
microservices. Not every bit of code the organization maintains should go into
the monorepo, but those that change together stay together.

### Folder & File Structure

Parent project folder structure **MUST** mimic that of Microsoft Rushstack. As
for individual package files, generally files that change together **SHOULD**
stay together. Code **SHOULD** be structured by feature.

#### Monorepo Manager

Microsoft backed Rush was selected over Nx, Lerna, Turbo, etc. for monorepo
management. Nx would probably also be suitable, but rush has worked fine so far.
A package base approach is prefered as to create a clear separation in laters.

### Database

Every service employing a database **MUST** maintain its dedicated database
instance within our architecture.

Specifically, code SHOULD rely on MongoDB, leveraging the Mongoose library for
interaction for persistent storage. In the context of microservices, we
consciously avoid the use of an Object-Relational Mapping (ORM) layer,
considering it an unnecessary abstraction.

Instead of utilizing ObjectId for identification, we opt for UUID type 4. This
choice not only enhances security but also mitigates the exposure of details
such as when the ID was generated and processor-related information.

### Package Management

#### Package Manager

PNPM **MUST** be selected for as the Javascript package manager over Yarn and
NPM. Yarn workspaces are not supported in Rush, which would be the primary
motivation behind using Yarn. Microsoft purchased NPM, but it remains infamous.
PNPM uses symlinks which helps minimize dependency storage.

### Heft

Rush Heft **MAY** be selected to build Typescript projects mainly because it
accompanies Rush. Heft Node Rig **MAY** be selected as many projects will have
same configuration. The need for heft has been gradually decreasing.

### Infrastructure

#### Infrastructure as a Service

AWS **MUST** be selected a single IaaS provider. This project assumes it will
fail before AWS does. Vendor lock-in/buy-in allows leveraging numerous
undifferentiated services. For this project that outweighs being cloud agnostic.
The cost it would take to move off AWS was considered.

- **Infrastructure as Code (IaC):** The entire infrastructure is defined as
  code, allowing for version control, easy replication, and consistent
  environments across different stages of the development lifecycle.

#### IaC / AWS CDK

AWS CDK **MUST** be selected instead of
[Serverless Framework](https://github.com/serverless-stack/serverless-stack).
When it comes down to it, SST is an unnecessary and incomplete abstraction
layer. SST live lambda development works using serverless website. There does
not appear to be a need to add a reliance on SST. SST future plans, incentives,
and kickback are questionable.

#### AWS SSO

AWS SSO **MUST** be selected for authentication over hard coded credentials for
ease of maintenance and security. Developers can SSO in to sandbox environments.

### Documentation

Documentation as code is desired. Documentation **SHOULD** be maintained where
it will be looked for.

Tsdoc **SHOULD** be selected as a standard for writing Typescript documentation.
Typedoc **SHOULD** be selected to compile documentation as code.

A README.md file **SHOULD** be added to explain each project and important
folder structures. Any code that isn't self-documenting **MUST** be accompanied
by documentation.

### Deployments

Each app **MUST** be capable of deployment themselves using CDK via
`rushx cdk:deploy`. `rushx cdk:deploy` **MAY** be used in local development to
deploy services.

During CI, an artifact from each project **MUST** be uploaded to S3. This
artifact **SHOULD** be processed by AWS CodePipeline for CD.

### NestJS

NestJS **MUST** be selected as a framework for building server-side
applications. It comes with dependency injection, swagger integration for
generating OpenAPI spec, is decorator based, and is sponsored as an open
collective project.

### Serverless

Serverless **SHOULD** be selected over containers and bare metal. Our serverless
approach allows us to dynamically scale resources in response to demand,
minimizing idle capacity and reducing costs associated with over-provisioning.

Additionally, by breaking down our application into smaller, independent
functions, we can optimize resource allocation and mitigate the risk of
bottlenecks or performance issues. Furthermore, our modular architecture enables
us to deploy updates and enhancements to specific components independently,
reducing downtime and accelerating time-to-market.

### Hooks Automation

Git hooks can help reduce the need to perform redundant tasks, allowing
developers to focus on building code that matters. Code **MUST** be
automatically pushed on commit, packages **MUST** be automatically installed on
pull. Automation is in place that is aimed at allowing developers to focus on
what matters.

### Empowering Teams

If a team needs to rely on another team to make a change that slows down the
application development life cycle, this is unacceptable.

This separation of concerns between dev and ops teams is commonly seen in
enterprises. This introduces numerous problems. Instead Ops in ment to provide a
platform to enable Dev to focus on writting code that matters.

Dev should not be limited by Ops infulstructure, and be forced to add logic to
the same ball of mud. The should be empowered to release software. It's better
for platform to provide a L3 construct than to ship code it doesn't understand.

### Ephemeral Environments

Furthermore, ephemeral environments **MUST** facilitate parallel development and
testing, enabling multiple teams to work on different features simultaneously
without interfering with each other. This parallelization **MUST** accelerate
development cycles and enhance collaboration, ultimately leading to faster
time-to-market and improved software quality.

Data necessary for setting up a service should move uphill from one environment
to the next through migrations. Software engineers should not require access to
production to do their job.

### Dev Containers

Incorporating dev containers further enhances the efficiency and security of our
development process. Dev containers encapsulate the development environment,
including dependencies and tools, within a containerized environment, ensuring
consistency across different machines and operating systems. This
standardization **MUST** simplify the onboarding process for new developers and
reduce the risk of configuration drift or compatibility issues.

### Domain-Driven Design and Ubiquitous Language

Domain-Driven Design (DDD) principles are integral to our architecture
guidelines. We emphasize the importance of establishing a Ubiquitous Language
throughout our development process. This language ensures that domain concepts
are consistently represented and understood across all stakeholders, from domain
experts to developers. By aligning our codebase with the language used in the
domain, we enhance communication, reduce ambiguity, and foster a deeper
understanding of the problem space. Therefore, all code artifacts **MUST**
reflect the Ubiquitous Language established for the respective domain,
facilitating collaboration and maintaining clarity throughout the software
development lifecycle.

### Command Query Responsibility Segregation (CQRS)

Command Query Responsibility Segregation (CQRS) is a design pattern that
separates the responsibility of handling commands (write operations) from
queries (read operations) in a system. This separation enables more flexible and
scalable architectures by allowing different models and data stores to be
optimized for specific tasks.

#### Key Aspects of CQRS:

1. **Command and Query Separation:** CQRS emphasizes the distinction between
   commands, which modify state, and queries, which retrieve data. This
   separation enables independent scaling, optimization, and maintenance of
   command and query processing components.

2. **Domain-Driven Design Integration:** CQRS is often employed in conjunction
   with Domain-Driven Design (DDD) principles, enabling the creation of distinct
   command and query models that closely align with the domain concepts and
   requirements.

3. **Event Sourcing:** CQRS is frequently coupled with event sourcing, where
   changes to the system's state are captured as a series of immutable events.
   Event sourcing facilitates auditability, scalability, and replayability of
   state changes, enhancing system reliability and resilience.

4. **Scalability and Performance:** By segregating command and query processing,
   CQRS allows for independent scaling of write and read workloads, enabling
   optimizations tailored to the specific requirements of each operation type.
   This can lead to improved performance, responsiveness, and resource
   utilization.

5. **Complexity and Trade-offs:** While CQRS offers benefits in terms of
   flexibility and scalability, it also introduces additional complexity,
   particularly in terms of system architecture, data synchronization, and
   consistency management. Teams adopting CQRS must carefully evaluate the
   trade-offs and complexities involved to ensure they align with the project's
   requirements and constraints.

By embracing CQRS principles, we aim to design systems that are better suited to
evolving business needs, provide enhanced performance and scalability, and
maintain a clear separation of concerns between command and query processing.

### Conway's Law

In this repository, we embrace Conway's Law as a guiding principle in our
software development practices. Conway's Law states that the structure of an
organization will reflect in the design of its systems. By organizing our
codebase into modules and components that correspond to the various teams and
departments within our organization, we foster a natural alignment between our
software architecture and our organizational structure. This approach not only
enhances communication and collaboration but also promotes autonomy and
ownership
