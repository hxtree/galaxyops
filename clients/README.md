# Clients

This directory contains frontend client applications. Each client connects to
backend services, often through a dedicated Backend for Frontend (BFF).

## React

React **SHOULD** be selected as a framework for clients.

## Guidelines

- **Dependency on Backend Services**: Clients rely on backend services for data
  and functionality. Ensure that necessary backend services are deployed and
  accessible before deploying frontend clients.

- **Interaction with Backend for Frontend (BFF)**: Clients typically interact
  with backend services through a dedicated BFF. Ensure that the appropriate BFF
  is configured and accessible for each client application.

- **User Interface**: Client applications should primarily focus on providing a
  user-friendly interface and user experience. They may utilize frameworks and
  libraries to achieve this goal.

- **Independence**: Each client application should be independent and should not
  have dependencies on other client applications. Modifications to a client
  application should be confined to its project folder and configuration files
  within this directory.

- **Twelve Factor App:** Applications **MUST** be designed to run as a service.
  To avoid common systemic problems in modern application development, layers
  **MUST** be constructed around twelve factor app principles Code **MUST** be
  agnostic of environment. [https://12factor.net/](https://12factor.net/)

- **MACH Architecture:** Overall this repository adheres to a
  Microservices-based, API-first, Cloud-native, and Headless architecture.

### Vite

We have moved off of Webpack and NextJs. Vercel packages should be avoided. Vite
is the prefered due to speed and developer experience.
