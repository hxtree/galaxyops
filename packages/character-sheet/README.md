# @org-package/character-sheet

![Lifecycle](https://img.shields.io/badge/lifecycle-unstable-red)

Maintains in game characters, including whatever details, notes, game
statistics, and background information a character needs during game play. This
includes attributes, skills, disciplines, etc.

## Stacks

- [Swagger](http://localhost:3000/api/) (localhost only)
- Lambda
- ApiGateway

## External Dependencies

- MongoDB

## Features:

- **Components**: structs of plain old data. Components have no functions. Base
  class with sub class. Helper function for access info. Nothing else. They mean
  different things to different systems at different points in time.

- **Archetype**: A chosen set of components that an entity of a certain type
  will have.

## References

- [Data Oriented Design](https://stackoverflow.com/questions/53977182/interfaces-in-data-oriented-design/54483503#54483503)
- [Entity Component System and Netcode](https://www.youtube.com/watch?v=zrIY0eIyqmI)
- [Character states](https://rivalslib.com/workshop_guide/art/anticipation_action_recovery.html#fast-transitions)

## Guidelines

- Implmentation MUST avoid infringing on patent
  ["Method and system for improved performance of a video game engine"](https://patents.google.com/patent/US10599560B2/en)
