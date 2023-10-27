# libraries

Libraries are packages written specifically to be dependencies used in more than
three packages.

```graphql
./*
  └─ libraries - # resources indented for use in three or more services.
     └─ api-client - # openapi generated clients.
```

Source code has only two types executable and non-executable. Non-executable
libraries configuration and files are better stored separately in the library
directory or platform away from source code as to keep code clean and readable.

> **Note**: It is essential to adhere to a structured release process with
> packages that serve as dependencies for other packages within this monorepo.
> Begin by creating a single pull request to update the library package. Only
> after this change has been published, should a separate change that increment
> the versions of packages that depend on the updated one be made. This approach
> ensures clear and organized version management within the monorepo.

## Documentation

- [Rule of three](<https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)>)
