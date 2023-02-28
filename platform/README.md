# platform

The platform give teams the tools and automation capabilities necessary to
perform and manage continuous delivery. It contains packages that are related to
laying the foundations for other services.

## Curated List of Recommend Packages

At a base level a platform can be a curated list of preferred packages such as
the one below.

### Database

MongoDB Atlas. [Register](https://www.mongodb.com/cloud/atlas/register)

- NoSQL is built more for scaling than RDS in general.
  [Sega](https://www.mongodb.com/blog/post/sega-hardlight-migrates-atlas-simplify-ops-improve-experience-mobile-gamers).
- There are vastly more repos using MongoDB than DynamoDB. Although there are
  some interesting DynamoDB projects out there that make key pair access easier
  such as [Dynamoose](https://dynamoosejs.com/guide/Item).
- Presently, MongoDB Shared free forever clusters seems slightly more appealing
  than [1 month of AWS DocumentDB](https://aws.amazon.com/documentdb/pricing/).
- MongoDB can be ran locally, if needed.
- MongoDB is scalable and used in high-performance video games.

### Object Modeling

Mongoose

- TypeORM has poor support for MongoDB; it's more for RDMS.
- Using an ORM is a bit too lambdalith.

### Logging

[Pino](https://github.com/pinojs/pino)

```bash
rush add --package pino
```

Use "err" namespace to properly serialize error namespace.

```typescript
try {
 ...
} catch (err) {
  logger.info('message', {err});
}
```

- <https://getpino.io/#/docs/api?id=serializers-object>
- <https://bobbyhadz.com/blog/typescript-object-is-of-type-unknown>
