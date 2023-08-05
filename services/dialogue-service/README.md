# @cats-cradle/dialogue-service

This services manages the dialogue for the game. Dialogue files are stored in
Ink format. This allows for conditional choices between messages and for tags to
be passed to game engine.

Ink tags can be used for actorId, actorExpression/actorSprite, or other meta
data.

## Getting Started

Dialogue files can be viewed and edited using
[Inky Editor](https://github.com/inkle/inky).

## Ideas

The following private repo raw ideas related to the game. Established
contributors should ask for access.

- [Rough Ideas](https://github.com/hxtree/cats-cradle-ideas)

## Resources Structure

```graphql
./public
  └─ en - # english language
    └─ acts
      └─ {act_name}
        ├─ dialogues - # dialogue (*.ink) files
        └─ audio - # audio (*.mp3) files
```

## Credits

- Opening screenplay by Ethan Goodwin.
- Train screenplay by Kion.

## References

- [LangChain](https://js.langchain.com/docs/modules/chains/) Large Language
  Models Chaining
- [Audio Voiceover AI](https://replicastudios.com/)
- [Real Time Voice Cloning](https://github.com/CorentinJ/Real-Time-Voice-Cloning)
- [Directed graph](https://en.wikipedia.org/wiki/Directed_graph)
- [Ink](https://www.inklestudios.com/ink/)
- [Inkjs](https://github.com/y-lohse/inkjs)
- [Inky Editor Download](https://github.com/inkle/inky/releases/tag/0.14.1)
- [Inky Basics](https://www.youtube.com/watch?v=-nK-tQ_vc0Y)
