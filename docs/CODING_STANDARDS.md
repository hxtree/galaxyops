# Coding Standards

All coding standards are written to conform to
[RFC2119](https://datatracker.ietf.org/doc/html/rfc2119).

## Typescript

1. All Typescript apps SHOULD use single quotes (not double quotes) excluding
   third party libraries.

   Good:

   ```typescript
   let x = 'yes';
   ```

   Bad:

   ```typescript
   let x = 'yes';
   ```

2. Typescript files SHOULD adhere to Eslint settings.

### Directory Structure

1. Typescript filenames MUST use Pascal case.

   Good:

   ```bash
   BlackAndWhite.ts
   ```

   Bad:

   ```bash
   blackandwhite.ts
   black-and-white.ts
   ```

2. All folder names SHOULD be snake case or kebab case.

   Good:

   ```bash
   black-and-white
   black
   ```

   Bad:

   ```bash
   blackandwhite
   BlackAndWhtite
   ```
