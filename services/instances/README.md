# cats-cradle/instances

[![GitHub Stars](https://img.shields.io/github/stars/hxtree/galaxyops?style=social)](https://github.com/hxtree/galaxyops/stargazers)

This service tracks instances. A instance is a unique Id used to define
boundaries of other systems. Other than when it was created and whether it
exists, not much else is managed by this service.

For example, when playing a game each user could be assigned to an instance. If
two or more players were assigned to the same instance, they would share the
game experience. Meaning what happens in one users game would happen in the
others user game.

This concept can be applied to many other business use cases, but the service is
primarily useful for maintaining isolation of data that spans multiple services.

## Time

Time is displayed to the User using a HT format.

HT stands for Hadean Time which is the time period in which the universe began,
5 billion years ago.

Time progresses in reverse. The "-" before the time period indicates that it is
a count down until our universe begins.

Time Format:

-00E-053-0125HT

Game time is always be going. There should be no downtime while accessing menus.
When a player select a character and goes into their equipment menu they adjust
it live with while the majority of the screen is visible.

A pause feature may be used but would freeze all players menu in a game
instance.

## World Story

The world itself has a story line that progress independently of individual
questions. When world story line progresses all players are notified.
