# Object State Management

The game's save and load functionality operate as follows: Each dynamic game
element, such as player units, enemies, buildings, destructible scenery, or
projectiles, is associated with a concise class. These classes encapsulate
essential variables, such as position, health, current target, and status.

## Save Process

When the player initiates a save (or autosave occurs), the system iterates
through all relevant units and objects. It collects their variables into
instances of their respective classes and organizes these instances into arrays.
The save game file, contains arrays for each object type and general game
information like level number and game time.

```typescript
function saveGame(): void {
  let tempSave: SaveGame = new SaveGame();

  // Create a list to hold all unit saves
  let savedUnits: UnitSave[] = [];

  // Iterate through each unit, saving important variables
  allGameUnits.forEach((unit: GUnit) => {
    let tempUnit: UnitSave = new UnitSave();
    tempUnit.health = unit.health;
    tempUnit.posX = unit.posX;
    tempUnit.posY = unit.posY;
    tempUnit.posZ = unit.posZ;
    savedUnits.push(tempUnit);
    // Repeat for each type.
  });

  tempSave.units = savedUnits;
  tempSave.levelID = gameGlobal.levelID;
  tempSave.playerID = playerID;

  // Save 'tempSave' to a file or registry using IO or PlayerPrefs
  // ...
}
```

## Load Process

Loading operates in reverse. The script traverses each array, instantiating
objects with the saved variables. Once complete, it clears the loading screen.

```typescript
function loadGame(saveGame: SaveGame): void {
  // Instantiate level and player camera
  instantiate(
    gameGlobal.levels[saveGame.levelID].prefab,
    new Vector3(0, 0, 0),
    transform.rotation,
  );
  let cam: GameObject = instantiate(
    playerCamera,
    gameGlobal.levels[saveGame.levelID].camPos[saveGame.playerID],
    quaternionIdentity,
  );
  let id: number = saveGame.playerID;

  // Iterate through saved units, instantiate, and set variables
  saveGame.units.forEach((unit: UnitSave) => {
    let unitPos: Vector3 = new Vector3(unit.posX, unit.posY, unit.posZ);
    let temp: GameObject = instantiate(unitPrefab, unitPos, quaternionIdentity);

    // In a real scenario, save and load rotation or line of sight for a smaller save file
    temp.GetComponent<UnitVariables>().health = unit.health;
    temp.playerID = id;
  });

  // Hide the loading screen if active
  if (GUI.loadingScreen.isActive()) {
    GUI.loadingScreen.isActive(false);
  }
}
```
