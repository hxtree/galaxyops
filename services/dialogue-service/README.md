# @cats-cradle/dialogue-service

This services manages the dialogue for the game. Dialogue files are stored in
Ink format. This allows for conditional choices between messages and for tags to
be passed to game engine.

Ink tags can be used for actorId, actorExpression/actorSprite, or other meta
data.

## Getting Started

Dialogue files can be viewed and edited using
[Inky Editor](https://github.com/inkle/inky).

## Resource Structure

```graphql
./public
  └─ en - # english language
    └─ acts
      └─ {act_name}
        ├─ dialogues - # ink files
        └─ audio - # audio
```

## References

- [Audio Voiceover AI](https://replicastudios.com/)
- [Directed graph](https://en.wikipedia.org/wiki/Directed_graph)
- [Ink](https://www.inklestudios.com/ink/)
- [Inkjs](https://github.com/y-lohse/inkjs)
- [Inky Editor Download](https://github.com/inkle/inky/releases/tag/0.14.1)
- [Inky Basics](https://www.youtube.com/watch?v=-nK-tQ_vc0Y)
