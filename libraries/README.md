# Libraries

Source code has only two types executable and non-executable. Non-executable
libraries

Configuration contains files like tsconfig.json, package.json, envs, yamls.
These files better to be stored separately from source code. It will keep your
large project clean and readable.

I will explain these two concepts more at below.

Here is an example of a typescript microservice project:

Lib libraries/domain/

"paths" : { "@libs/_" ["libs/_"], "@services/_":["services/_],
"@shared/_":["shared/_] }

```


https://cloud.google.com/appengine/docs/legacy/standard/java/designing-microservice-api#using_strong_contracts

each API version

/auth-service/v1/

contracts/domain/src/v1/

Owned by the service that is depended on


Service Endpoint Contracts

Microservice API Patterns (MAP)


File structure whise how do these look inside the service

Queries -> API/Rest/POJO
  query / find, findBy, findAll, get. has

Commands -> Fires off a SNS -> SQS
  subscribe
    Dommain Module
  Create
  update
  delete
    A command can fire off another command but should not call itself from within service

each service

get-user.query.ts

create-user.command.ts


controller/
```
