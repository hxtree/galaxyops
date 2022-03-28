# Coding Standards

All coding standards are written to conform to [RFC2119](https://datatracker.ietf.org/doc/html/rfc2119).

## Directory Structure

1. All folder names SHOULD be snake case or kebab case.

Good:
```
black-and-white
black
```

Bad:
```
blackandwhite
BlackAndWhtite
```

## Typescript

1. Typescript filenames MUST use Pascal case.

Good:
```
BlackAndWhite.ts
```

Bad:
```
blackandwhite.ts
black-and-white.ts
```

2. Typescript documents SHOULD use single quotes; not double quotes.

Good:
```
let x = 'yes';
```

Bad:
```
let x = "yes";
```

3. Typescript files SHOULD adhere to Eslint settings.
