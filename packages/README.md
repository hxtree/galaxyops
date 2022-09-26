# @org-packages

Contains deployable organization packages. Each package may deploy one or more
services.

As to prevent interservice dependencies, these packages MUST not contain any
interconnected platform contructs that are used as the fundemental bases to make
multiple applications work. Instead, those should be placed in platform.
