# platform

The platform give teams the tools and automation capabilities necessary to
perform and manage continuous delivery. It contains packages that are related to
laying the foundations for other services.

## Empowering Teams

Platforms goal is to empower teams. If a team needs to rely on another team to
make a change that slows down the application development life cycle, this is
unacceptable.

This separation of concerns between dev and ops teams is commonly seen in
enterprises. This introduces numerous problems. Instead Ops in ment to provide a
platform to enable Dev to focus on writting code that matters.

Dev should not be limited by Ops infulstructure, and be forced to add logic to
the same ball of mud. The should be empowered to release software. It's better
for platform to provide a L3 construct than to ship code it doesn't understand.

## Ephemeral Environments

Furthermore, ephemeral environments **MUST** facilitate parallel development and
testing, enabling multiple teams to work on different features simultaneously
without interfering with each other. This parallelization **MUST** accelerate
development cycles and enhance collaboration, ultimately leading to faster
time-to-market and improved software quality.

Data necessary for setting up a service should move uphill from one environment
to the next through migrations. Software engineers should not require access to
production to do their job.

```graphql
./*
  └─ platform - # fundamental bases for other applications.
     ├─ aws-org-formation - # AWS account provisioning, SSO, etc.
     ├─ constructs - # Custom AWS constructs used in package deployments.
     ├─ eslint-config - # eslint configurations.
     ├─ rigs - # rushjs heft rigs.
     └─ lambda-layers - # serverless lambda layers.
```

> **Note**: It is essential to adhere to a structured release process with
> packages that serve as dependencies for other packages within this monorepo.
> Begin by creating a single pull request to update the platform package. Only
> after this change has been published, should a separate change that increment
> the versions of packages that depend on the updated one be made. This approach
> ensures clear and organized version management within the monorepo.

- **Platform as a Service (PaaS):** Leveraging a PaaS foundation simplifies
  infrastructure management and allows developers to focus on writing code
  without worrying about the underlying infrastructure.
