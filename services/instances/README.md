# cats-cradle/instances

[![GitHub Stars](https://img.shields.io/github/stars/hxtree/cats-cradle?style=social)](https://github.com/hxtree/cats-cradle/stargazers)

This service tracks instances. A instance is a unique Id used to define
boundaries of other systems. Other than when it was created and whether it
exists, not much else is managed by this service.

For example, when playing a game each user could be assigned to an instance. If
two or more players were assigned to the same instance, they would share the
game experience. Meaning what happens in one users game would happen in the
others user game.

This concept can be applied to many other business use cases, but the service is
primarily useful for maintaining isolation of data that spans multiple services.
