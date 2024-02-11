# Middleware

This directory houses middleware services, which act as intermediaries between
backend services and frontend clients, facilitating communication and
coordination within the application architecture.

## Guidelines

- **Dependency on Backend Services**: Middleware services may rely on backend
  services located elsewhere in the project. Ensure that necessary backend
  services are deployed before deploying middleware services.

- **Business Logic**: Middleware services should primarily focus on mediating
  communication and optimizing data flow between frontend and backend layers.
  They are tailored to the specific needs of the frontend application.

- **Independence**: Each middleware service must operate independently and
  should not have dependencies on other middleware services. When adding a new
  middleware service, modifications should be confined to the project folder and
  configuration files within this directory.

- **Uniform Structure**: Each subfolder within this directory represents a
  middleware service package, containing source code and any necessary
  infrastructure configurations. The structure adheres to the following pattern:
