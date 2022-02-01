# Monorepo
Playground

```
rush update --recheck
```


# How to add a new package
```
rush add -p typescript --dev
rush add -p @rushstack/heft-jest-plugin --dev
rush add -p @rushstack/heft --dev
rush add -p @types/node --dev
rush add -p aws-cdk
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
* Picked heft node rig as many projects will have same configuraiton

Thinking about:
https://nestjs.com/


Additional Docs:
https://docs.aws.amazon.com/cdk/v2/guide/cli.html
https://rushjs.io/