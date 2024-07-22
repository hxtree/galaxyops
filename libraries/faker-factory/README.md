# @galaxyops/faker-factory

FakerFactory creates fakes of classes using class-validator decorators for
testing purposes.

It creates a faker object by first inferring each property's type based the
class-validator decorator. Next, it changes the object to a schema then it
generates fake data for each property. Lastly, the faked object is instantiated
and returned.

## Getting Started

Create a fake by calling the FakerFactory.

```typescript
import { FakerFactory } from '@galaxyops/faker-factory';
import { Person } from './person.ts';

const fakerPerson = await FakerFactory.create<Person>(Person, { passed: true });
```

```typescript
// person.ts or any class that uses class-validator decorators
import {
  IsString,
  IsInt,
  IsBoolean,
  IsUUID,
  IsCurrency,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class Person {
  @IsUuid();
  public id: string;

  @IsString()
  @Length(0,50)
  @IsOptional()
  public firstName: string;

  @IsCurrency()
  public currency: string;

  @IsInt()
  @Min(0)
  public visits: number;

  @IsBoolean()
  public passed: boolean;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Person)
  public guests: Person[];
}
```

```ts
// result
// console.log(fakerPerson);
{
  "id": "4cb85e06-1060-4bed-8224-14ec39e0dfa9",
  "firstName": "irure in",
  "currency": "887.56",
  "visits": 24235,
  "passed": true
}
```

## Settings

FakerFactory accepts a third optional parameter for settings. Settings are used
to change the way the FakerFactory works. Adjusting the settings can be useful
for when writing unit tests on optional fields.

| Property    | Description                            | Possible Values        |
| ----------- | -------------------------------------- | ---------------------- |
| probability | probability for faking optional fields | 0, ... 0.5, ... 1      |
| optionals   | whether to fake optional fields        | true, false, undefined |

```typescript
const Person = await FakerFactory.create<Person>(
  Person,
  {},
  { optionals: true },
);
```

## Opinions

In typescript object data can be automatically faked based on either: the
property name, property typehint, separate schema, or the decorator schema.

Property names should remain somewhat consistent and fakes can be generated
based on them, this is how [Intermock](https://github.com/google/intermock)
works. However, it is unreasonable to maintain such a many-to-many relationship
for faking purposes.

Generating values based on property typehinting is less then ideal currently in
typescript due to compiled code being type agnostic and the special tsc
requirement to add such a feature.

Generating fakes purely based on separate schema such as
[AJV](https://www.npmjs.com/package/ajv),
[JIO](https://www.npmjs.com/package/joi), or
[validatorjs](https://www.npmjs.com/package/validatorjs) works but it is less
readable than a purely decorator based approach.

A class-validator decorators and schema base approach was chosen for the
following reasons:

- Decorators are already present when using class-validation.
- Faker data should not just be fake, it should be valid and meet
  class-validator requirements.
- If a class-validator requires a string length faker data should meet that
  requirement.
- It is easy to create new class-validator decorators and extend functionality.

## References

- [F.I.R.S.T Principles of Testing](https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6)
- [Fake vs Mock](https://medium.com/@june.pravin/mocking-is-not-practical-use-fakes-e30cc6eaaf4e)
- [Faking vs Mocking vs Stubbing](https://www.educative.io/answers/what-is-faking-vs-mocking-vs-stubbinghttps://www.educative.io/answers/what-is-faking-vs-mocking-vs-stubbing)
- [fakerJs](https://fakerjs.dev/api/date.html#date)
- [class-transformer](https://github.com/typestack/class-transformer/tree/master)
- [class-validator](https://github.com/typestack/class-validator)
- [class-validator jsonschema](https://github.com/epiphone/class-validator-jsonschema)
