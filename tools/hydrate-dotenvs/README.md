# Hydrate-dotenvs

## Overview

Hydrate-dotenvs is a script designed to streamline the process of populating
`.env` files within a monorepo setup. It searches for `.env.dist` files across
the project structure and automatically creates corresponding `.env` files with
predefined values. This tool is useful for setting up environment configurations
consistently across multiple packages or services.

## Features

- Automatically creates `.env` files from `.env.dist` templates.
- Populates `.env` files with predefined values for environment variables.
- Works recursively across directories to ensure all relevant `.env.dist` files
  are processed.
- Simplifies setup and configuration management in a monorepo environment.

## Example

Assume you have a monorepo with various services, each containing `.env.dist`
files:

```
/project-root
│
├── service1
│   ├── .env.dist
│   └── ...
│
├── service2
│   ├── .env.dist
│   └── ...
│
└── shared
    ├── .env.dist
    └── ...
```

Running `hydrate-dotenvs` will create `.env` files:

```
/project-root
│
├── service1
│   ├── .env.dist
│   ├── .env
│   └── ...
│
├── service2
│   ├── .env.dist
│   ├── .env
│   └── ...
│
└── shared
    ├── .env.dist
    ├── .env
    └── ...
```

## License

This project is licensed under the MIT License - see the LICENSE file for
details.
