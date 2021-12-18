# Monorepo
Playground

```
rush update
```

# Test a App
```
cd apps/helloworld
rushx test
```

# Architectural Assumptions

* Picked monorepo as apps will be primarly Truescript serverless microservices.
* Picked Microsoft backed Rush over Nx, Lerna, etc. although Rush not without 404 in docs.  
* Picked PNPM over Yarn and NPM. Yarn workspaces are not supported in Rush. NPM is infamous.
* Picked AWS exclusively for cloud provider vs cloud agnostic. Project assumes it will fail before AWS. 
* Picked Rush Heft to build Typescript projects because it was accompanied Rush.

Thinking about:
https://nestjs.com/
