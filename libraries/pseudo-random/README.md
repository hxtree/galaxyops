# @cats-cradle/pseudo-random

This Pseudo-Random Number Generator Library is a TypeScript library that
provides a collection of pseudo-random number generators useful for various
applications. These generators offer flexibility and control over the
distribution of generated numbers, making them ideal for scenarios where
traditional sequential numbers might reveal sensitive information or impact user
experience.

## Features

**ObfuscateCounter**: Generate obfuscated counters for use in scenarios like
invoice numbers, where you want to avoid revealing the total count or providing
a predictable sequence.

**FisherYatesShuffle**: Implement the Fisher-Yates shuffle algorithm to
randomize elements in a sequence, suitable for scenarios like ticket numbers or
any situation where order randomness is desired.

## Installation

Install the library using npm:

```bash
npm install @cats-cradle/pseudo-random
```

## Usage

### ObfuscateCounter

```typescript
import { ObfuscateCounter } from 'pseudo-random-library';

const obfuscateCounter = new ObfuscateCounter();
const invoiceNumber = obfuscateCounter.run('12345678');
console.log('Obfuscated Invoice Number:', invoiceNumber);
// Example Output: Obfuscated Invoice Number: 17509326
```

### FisherYatesShuffle

```typescript
import { FisherYatesShuffle } from 'pseudo-random-library';

const fisherYatesShuffle = new FisherYatesShuffle();
const randomizedTicketNumber = fisherYatesShuffle.run(
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
);
console.log('Randomized Ticket Number:', randomizedTicketNumber);
// Example Output: Randomized Ticket Number: KJHFVXMBWTZQNGLOAUSYCDPIRE
```

## Use Cases

**Invoice Numbers**: Generate obfuscated invoice numbers to protect sensitive
information and avoid revealing the total count.

**Ticket Numbers**: Randomize ticket numbers to prevent predicting sales or
determining the order of placement.

## Contribution

Contributions are welcome! If you have suggestions, bug reports, or want to add
new features, please open an issue or submit a pull request.

## License

This library is licensed under the [MIT License](./LICENSE).
