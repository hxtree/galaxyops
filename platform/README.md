# platform

The platform give teams the tools and automation capabilities necessary to
perform and manage continuous delivery. It contains packages that are related to
laying the foundations for other services.

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
