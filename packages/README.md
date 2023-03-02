# packages

This directory contains deployable organization packages. Each folder contains a
package consisting of the source code and the IaC to deploy the package as one
or more services.

---

> **Note** `platform/` MUST be deployed prior to deploying `packages/` .

---

> **Note** Projects within this folder should contain the business logic. Each
> project MUST be independent of any other project. Deleting or adding a project
> SHOULD only involve changing `rush.json` and the actual project folder.

---

> **Warning** As to prevent interservice dependencies, packages within this
> folder MUST not contain any interconnected platform constructs that are used
> as the fundamental bases to make multiple applications work. Instead, those
> should be placed in elsewhere.

---
