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

// Person {firstName: "Bob Gravy", visits: 43, passed: true }
const mockPerson = MockFactory.create<Person>(Person, { passed: true });
```

## Documentation

- [F.I.R.S.T Principles of Testing](https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6>6)
- [Faking vsing vs Stubbing](https://www.educative.io/answers/what-is-faking-vs-mocking-vs-stubbinghttps://www.educative.io/answers/what-is-faking-vs-mocking-vs-stubbing)
- [fakerJs](https://fakerjs.dev/api/date.html#date)
- [class-transformer](https://github.com/typestack/class-transformer/tree/master)
- [class-validator](https://github.com/typestack/class-validator)
