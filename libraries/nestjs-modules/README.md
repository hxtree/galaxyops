# @cats-cradle/nestjs-modules

NestJsModules contains select reusable injectable NestJs modules for use in
other packages, mainly pertaining to AWS workflows.

## Modules

The modules are specific to workloads running on Amazon Web Services (AWS) and
are as follows:

- **SnsService**: A service for publishing AWS SNS messages.
- **S3Service**: A service for interacting with objects in AWS S3.
- **MessageService**: A service that uses a schema abstraction layer on top of
  SnsService to make publishing, subscribing, and testing events that adhere to
  a schema even easier.
- **MongooseModule** In terms of object modeling, Mongoose is preferred over
  TypeORM due to TypeORM's limited support for MongoDB, which is more suited for
  relational database management systems (RDMS), making it somewhat cumbersome
  for MongoDB usage. Additionally, employing an ORM like TypeORM may introduce
  unnecessary complexity, aligning with the lambdalith architectural style.
- **rootMongooseModule**: Makes interacting and testing with persistent data in
  MongoDB using Mongoose easier. Do not use this inside tests.
- **rootMongooseTestModule**: Makes testing Mongoose easier using a
  MongoMemoryServer. Invoke `closeInMongodConnection` to close connection after
  each test or after all test within a file depending on need to clear test
  data.

## TODO

- Add a feature to make it easy to subscribe to events.

## Documentation

- [Jest Using with MongoDB](https://jestjs.io/docs/mongodb)
- [Mongodb-memory-server](https://github.com/nodkz/mongodb-memory-server)
- [NestJS Mongoose Example](https://github.com/nestjs/nest/tree/master/sample/14-mongoose-base)
- [NestJS Configuration](https://docs.nestjs.com/techniques/configuration#getting-started)
