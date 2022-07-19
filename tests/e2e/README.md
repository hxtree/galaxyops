# @org-tests/tests-e2e
![Lifecycle](https://img.shields.io/badge/lifecycle-unstable-red)

End-to-end tests built using `microsoft/playwright`. 

## Getting Started

1. Install Playwright and dependencies:

    ```
    npm init playwright@latest
    sudo npx playwright install-deps
    ```


2. Common Commands:

    ```
    npx playwright test
        Runs the end-to-end tests.

    npx playwright test --project=chromium
        Runs the tests only on Desktop Chrome.

    npx playwright test example
        Runs the tests in a specific file.

    npx playwright test --debug
        Runs the tests in debug mode.

    npx playwright codegen
        Auto generate tests with Codegen.
    ```

# Architectural Assumptions:

* Playwright was selected for end to end tests due to its support for Webkit. 
* Cypress was not selected due to Cypress lack of Safari/Webkit support. 
* Selenium was not selected as to adhere to a ubiquitous language, Typescript.