# @galaxyops/validation-schemas

Contains standard class-validator decorators and custom decorators for use
primarily in defining and validating data used in game design.

```typescript
import {
  validateSync,
  ValidationError,
  IsDiceNotation,
} from '@galaxyops/validation-schemas';

class Turn {
  @IsDiceNotation()
  public diceNotation: string;
}

let turn = new Turn();
turn.diceNotation = '1d6+4';

const errors: ValidationError[] = validateSync(testClass);

// outputs 0
console.log(errors.length);
```

All validation decorators should be supported by
[@galaxyops/faker-factory](https://www.npmjs.com/package/@galaxyops/faker-factory)
enabling automatic generation of fakes.

## References

- [validatorjs](https://validatejs.org/)
- [class-validator](https://github.com/typestack/class-validator)
