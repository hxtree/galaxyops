# Service Endpoint Contracts

Contracts are a part of the Microservice API Patterns (MAP). Contracts are used
for communication between microservices. Contracts are owned by the service that
is depended on.

## Updating Contracts

**WARNING: DO NOT MODIFY SUBFOLDERS.**

All contracts are automatically generated.

1. Bring up the service with openapi endpoint

2. Generate the contract

```bash
openapi-generator-cli generate
```

## Guidelines

Each API version, e.g. `/auth-service/v1/`

Each services contracts should adhere to the following:

```
Queries
* API/Rest/POJO
  query / find, findBy, findAll, get. has
e.g. get-user.query.ts


Commands
* Raises event SNS -> SQS
* A command can fire off another command but should not call itself from within service

  subscribe
  create
  update
  delete

e.g. create-user.command.ts
```

# Documentation

- https://openapi-generator.tech/docs/configuration/
- https://openapi-generator.tech/docs/generators/typescript-axios/
- https://cloud.google.com/appengine/docs/legacy/standard/java/designing-microservice-api#using_strong_contracts
