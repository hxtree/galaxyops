# @org-library/mock-factory

Mock factory creates fakes of types based on decorators for testing purposes. It
allows for partial specific properties.

```typescript
export class Person {
  @IsString()
  public firstName: string;

  @IsNumber()
  public visits: number;

  @IsBoolean()
  public passed: boolean;
}

mockPerson = MockFactory.create<Person>(Person, { passed: true });
```

## Documentation

- <https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6>6>
- <https://www.educative.io/answers/what-is-faking-vs-mocking-vs-stubbinghttps://www.educative.io/answers/what-is-faking-vs-mocking-vs-stubbing>
- <https://fakerjs.dev/api/date.html#date>
- <https://github.com/typestack/class-transformer/tree/master>
- <https://github.com/typestack/class-validator>
