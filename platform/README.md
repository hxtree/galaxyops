# Platform

## Curated List of Recommend Packages

At a base level a platform can just a curated list of perfered packages.

### Logging

[Pino](https://github.com/pinojs/pino)

```
rush add --package pino
```

Use "err" namespace to serialize error namespace.

```
try {
 ...
} catch (err) {
  logger.info('message', {err});
}
```

https://getpino.io/#/docs/api?id=serializers-object
https://bobbyhadz.com/blog/typescript-object-is-of-type-unknown

### Database

MongoDB Atlas. [Register](https://www.mongodb.com/cloud/atlas/register)

- NoSQL is built more for scaling than RDS in general.
  [Sega](https://www.mongodb.com/blog/post/sega-hardlight-migrates-atlas-simplify-ops-improve-experience-mobile-gamers).
- There are vastly more repos using MongoDB than DynamoDB, although there are
  some interesting DynamoDB projections out there like
  [Dynamoose](https://dynamoosejs.com/guide/Item) making key pair access easier.
- Presently, MongoDB Shared free for ever clusters seems slightly more appealing
  than [1 month of AWS DocumentDB](https://aws.amazon.com/documentdb/pricing/).
- MongoDB can be ran locally if needed.
- MongoDB is scalable and used in high-performance video games. e.g.

### Object Modeling

Mongoose

- TypeORM has poor support for MongoDB; it's more for RDMS. Using and ORM is a
  bit too lambdalith.
