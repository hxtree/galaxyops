# @org-package

This directory contains deployable organization packages. Each folder contains a
package consisting of the source code and the IaC to deploy the package as one
or more services.

---

As to prevent interservice dependencies, these packages MUST not contain any
interconnected platform contructs that are used as the fundemental bases to make
multiple applications work. Instead, those should be placed in platform.
