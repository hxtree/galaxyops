# @cats-cradle/validation-decorators

Contains standard class-validator decorators and custom decorators for use
primarly in validation data in game design.

```typescript
import {
  validateSync,
  ValidationError,
  IsDiceNotation,
} from '@cats-cradle/validation-decorators';

class Turn {
  @IsDiceNotation()
  public property: string;
}

let turn = new Turn();
turn.diceNotation = '1d6+4';

const errors: ValidationError[] = validateSync(testClass);

// outputs 0
console.log(errors.length);
```

All validation decorators should be supported by `@cats-cradle/FakerFactory`
enabling automatic generation of fakes.

## Documentation

- [validatorjs](https://validatejs.org/)
- [class-validator](https://github.com/typestack/class-validator)
