# @org-library/mock-factory

Mock factory creates fakes of classes for testing purposes.

It creates a mock object by first inferring each property's type based the
decorator. Next, it generate fake data for the property based on the type.
Lastly it returns the object.

```typescript
export class Person {
  @IsString()
  public firstName: string;

  @IsNumber()
  public visits: number;

  @IsBoolean()
  public passed: boolean;
}

// Person {firstName: "Bobgravy", visits: 43, passed: true }
const mockPerson = MockFactory.create<Person>(Person, { passed: true });
```

## Assumptions

Object data can be faked to the correct type based on either decorator, property
name, or property typehint. Decorator was choosen over the other two. Although
property names should remain somewhat consistant, it is unreasonable many to
many relationship to maintain. Generating values based on typehinting is less
then ideal due to special tsc requirements and compiled code being type
agnostic. Decorators are ideal for this repository as decorators are already
used for validation and object mapping.

## Documentation

- [F.I.R.S.T Principles of Testing](https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6>6)
- [Faking vs Mocking vs Stubbing](https://www.educative.io/answers/what-is-faking-vs-mocking-vs-stubbinghttps://www.educative.io/answers/what-is-faking-vs-mocking-vs-stubbing)
- [fakerJs](https://fakerjs.dev/api/date.html#date)
- [class-transformer](https://github.com/typestack/class-transformer/tree/master)
- [class-validator](https://github.com/typestack/class-validator)

## TODO

It would be nice to be able to generate fake recusive objects data for unit
tests.

- <https://github.com/google/intermock/blob/master/src/lib/generators.ts>

It would be nice to be able to intergrate with swagger. e.g.

- <https://www.reddit.com/r/Python/comments/n4giff/automatic_fake_json_data_creation_from_schema/>
