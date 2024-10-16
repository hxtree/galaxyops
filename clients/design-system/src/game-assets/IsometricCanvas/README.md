# Isometric Render

## Stateless

The isometric render is agnostic of animation and state. It's possible for grass
to wave, etc. animation - render agnostic of animation, set by other state -
agnostic of animation set by engine

## Grid

The grid contains the x,y,z location of sprites.

## CollisionTable

The collisionTable determines where a player can move and what sound effects
play when a character moves there.

## Features

Contain grid and sprite specific logic. For example, if a grid has a trap. Or if
a sprite represents water and requires the player to swim to navigate it.

```json
{
  "properties": {
    "ambientSound": "dungeon.mp3", // Example property, like ambient sound for the area
    "lightLevel": 0.5, // Example property, such as light level
    "difficulty": "medium" // Example property, like difficulty level of the area
  },
  "grid": [
    // z [x [y "<spriteMap><spriteId> ] ],
    [
      ["f2", "b2"],
      ["f1", "b3"]
    ],
    [
      ["f0", "b1"],
      ["f3", "b0", "stair1"]
    ]
  ],
  "spriteMaps": {
    "b": "barrel-4x4.png",
    "f": "forest-40x4.png",
    "stair1": "stair-2x4.png"
  },
  "collisionTable": {
    "f0": { "type": "surface", "soundEffect": "forest1.wav" },
    "f1": { "type": "surface", "soundEffect": "sand2.wav" },
    "f2": { "type": "surface", "soundEffect": "snow1.wav" },
    "f3": { "type": "surface", "soundEffect": "tall-grass5.wav" },
    "f4": { "type": "surface", "soundEffect": "stone5.wav" },
    "f5": { "type": "surface", "skill": "water", "soundEffect": "water2.wav" },
    "b0": { "type": "obstacle", "collision": true },
    "b1": { "type": "obstacle", "collision": true },
    "b2": { "type": "obstacle", "collision": true },
    "b3": { "type": "obstacle", "collision": true },
    "stair1": {
      "type": "stair",
      "direction": "NE", // Allowed direction to climb
      "collision": {
        "default": true, // Default is obstacle
        "NE": false, // Not an obstacle from NE direction
        "SW": true // Is an obstacle from SW direction
      }
    }
  },
  "features": {
    "f5": [{ "animate": "swimming" }],
    "0,0,0": [
      { "type": "trap", "damage": "1d5", "effect": "fire" },
      { "type": "special", "name": "puzzle", "description": "Solve the puzzle" }
    ],
    "1,1,1": [{ "type": "stair", "direction": "NE" }],
    "2,2,1": [
      { "type": "hang", "direction": "SW" } // Hanging point at (x=2, y=2, z=1)
    ],
    "3,3,0": [
      { "type": "climb", "direction": "NW" } // Climbing point at (x=3, y=3, z=0)
    ]
  }
}
```

## Tags

Tags are inferred based on the spritemap name. The rendering engine will if a
spritemap contains for example walls based on the filename.

| tag  | purpose                                             |
| ---- | --------------------------------------------------- |
| wall | use for autohiding sprites that collide with camera |

## Autohide Obstructive Walls

Auto hide walls based on the direction of the camera. for example, if the camera
s = show | h = hide | 0 = empty.

```txt
s s s s s
s 0 0 h 0
s h 0 h h
0 h 0 0 h
s 0 0 0 h
s 0 0 0 h
s h h h h
```
