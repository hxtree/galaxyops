# Architecture Guidelines

The guide below describes guidelines applicable to repository.

## Folder Structure

```graphql
./*
  ├─ clients - # user facing clients.
  ├─ common - # rushjs common folder; contains scripts, commands, etc.
  ├─ docs - # repo wide documentation.
  ├─ libraries - # resources indented for use in three or more packages.
  │  └─ api-client - # openapi generated clients.
  ├─ packages - # contains deployable microservices.
  │  └─ ./**/*
  │     ├─ bin - # binary file that invokes stack.
  │     ├─ src - # source code.
  │     └─ stack - # CDK deployment code.
  ├─ platform - # fundamental bases for other applications.
  │  ├─ aws-org-formation - # AWS account provisioning, SSO, etc.
  │  ├─ constructs - # Custom AWS constructs used in package deployments.
  │  ├─ eslint-config - # eslint configurations.
  │  ├─ rigs - # rushjs heft rigs.
  │  └─ lambda-layers - # serverless lambda layers.
  └─ tests - # e2e tests.
```

## MACH Architecture

Overall this repository adheres to a Microservices-based, API-first,
Cloud-native, and Headless architecture.

## Infrastructure as a Service

AWS was selected a single IaaS provider. This project assumes it will fail
before AWS does. Vendor lockin/buyin allows leveraging numerous undifferentiated
services. For this project that outweighs being cloud agnostic.

## Monorepo

The project is designed as a monorepo instead of polyrepo. Apps will be mostly
serverless microservices and a monorepo is believed to help streamline changes.

## Monorepo Manager

Microsoft backed Rush was selected over Nx, Lerna, etc. for monorepo management.

## Typescript

Javascript was selected as a base language for microservices due to its
performance and omnipresence. Microsoft backed Typescript compiling is used for
Javascript. Typescript offers typehinting, easies in maintenance, and code
readability.

## File Structure

Parent project folder structure mimics that of Microsoft Rushstack. As for
individual package files, generally files that change together should stay
together. Structure code by feature.

## Package Manager

PNPM was selected for as the Javascript package manager over Yarn and NPM. Yarn
workspaces are not supported in Rush, which would be the primary motivation
behind using Yarn. Microsoft purchased NPM, but it remains infamous. PNPM uses
symlinks which helps minimize dependency storage.

## Heft

Rush Heft was selected to build Typescript projects mainly because it
accompanies Rush. Heft Node Rig was selected as many projects will have same
configuration.

## AWS CDK

AWS CDK was selected instead of
[Serverless Framework](https://github.com/serverless-stack/serverless-stack).
When it comes down to it, SST is an unnecessary and incomplete abstraction
layer. SST live lambda development works using serverless website. There does
not appear to be a need to add a reliance on SST. SST future plans, incentives,
and kickback are questionable.

## AWS SSO

AWS SSO was selected for authentication over hard coded credentials for easy of
maintenance and security.

## Documentation

Documentation as code is desired. Documentation should be maintained where it
will be looked for. Tsdoc was selected as a standard for writing Typescript
documentation. Typedoc was selected to compile documentation as code.

## Deployments

`rush deploy` is intentionally not used. It copies files from projects to a
deployment folder including applicable dependencies. Instead apps deploy
themselves using CDK stacks via `rushx deploy`.

## NestJS

NestJS was selected as a framework for building server-side applications. It
comes with dependency injection, swagger integration for generating OpenAPI
spec, is decorator based, and is sponsored as an open collective project.

## Mobile Client

There is a healthy marketplace for mobile games to making frontend mobile
according to
[app revenue sources](https://www.businessofapps.com/data/app-revenues/).
Healthy enough where using a frontend mobile client makes sense. Mobile clients
now feature adequate hardware unlike in 2005.

### Unreal for Mobile Client

Although the server side uses JS based microservices, etc. there isn't much of a
marketplace for a JS game client. ThreeJS is neat library for generating 3D
graphics but it is not a game engine. It is best to use established tools
designed for game design as to focus on what matters. The primary choices known
are Unreal and Unity and both would seemingly help reduce barrier to marketplace
entry. If the mobile games was 2D, Unity would be a primary choice. Unreal comes
with partially everything needed for a 3D game. Building a for Android is much
easier using Unity but Unreal can do it too. As to increase velocity but
avoiding the need to write indifferent 3D code, Unreal was selected.

## 3D

The original tech demo engine was built as an isometric game engine. However
creating a isometric spritemap for each object becomes time consuming and
difficult to manage changes. It is easier to generate frames using 3D.
Performance of 3D on mobile has drastically improved in the last 20 years.
