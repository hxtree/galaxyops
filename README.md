# Monorepo
Playground

# Architectural Assumptions

* Picked monorepo as apps will be primarly Truescript serverless microservices.
* Picked Microsoft backed Rush over Nx, Lerna, etc. although Rush not without 404 in docs.  
* Picked PNPM over Yarn and NPM. Yarn workspaces are not supported in Rush. NPM is infamous.
* Picked AWS exclusively for cloud provider vs cloud agnostic. Project assumes it will fail before AWS. 


Playing around with
* Heft 
> Heft is a config-driven toolchain that invokes other popular tools such as TypeScript, ESLint, Jest, Webpack, and API Extractor. You can use it to build web applications, Node.js services, command-line tools, libraries, and more. Heft builds all your JavaScript projects the same way: A way that works.

Thinking about:
https://nestjs.com/
https://jestjs.io/ 