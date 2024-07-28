# @galaxyops/dice-simulator

`@galaxyops/dice-simulator` is a versatile JavaScript library for simulating
dice rolls. It supports various dice notations and provides a straightforward
API to interact with dice outcomes.

## Installation

You can install `@galaxyops/dice-simulator` via npm:

```bash
npm install @galaxyops/dice-simulator
```

## Usage

The `@galaxyops/dice-simulator` library provides a `Turn` class to simulate dice
rolls. Here’s a basic example:

```js
import { Turn } from '@galaxyops/dice-simulator';

// Create a new Turn instance with a six-sided die (d6)
const turn = new Turn('d6');

// Roll the die
const total = turn.roll();

console.log('Roll Result:', total); // e.g., 4

// Get potential outcomes
console.log('Minimum Potential:', turn.minPotential()); // 1
console.log('Average Outcome:', turn.averageOutcome); // 3.5
console.log('Maximum Potential:', turn.maxPotential()); // 6
```

### Dice Notation

The `Turn` class supports standard dice notation. For example:

- `d4` for a four-sided die
- `d6` for a six-sided die
- `d10` for a ten-sided die
- `d20` for a twenty-sided die
- `10d%` for ten one-hundred-sided die
- `3d4+2` for three four-sided die plus two
- `1d2+10*4` for a coin toss plus ten times four

Turn has a second optional parameter called luck to be passed which influences
roll outcome over time. This allows a character to equipment to grant them luck
overall, or for a affliction to decrease luck overall in a game engine.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file
for details.
