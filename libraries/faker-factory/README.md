# @org-library/faker-factory

faker factory creates fakes of classes for testing purposes.

It creates a faker object by first inferring each property's type based the
decorator. Next, it generate fake data for the property based on the type.
Lastly it returns the object.

## Example

```typescript
export class Person {
  @IsUuid();
  public id: string;

  @IsString()
  public firstName: string;

  @IsCurrency()
  public currency: string;

  @IsNumber()
  public visits: number;

  @IsBoolean()
  public passed: boolean;
}

const fakerPerson = await fakerFactory.create<Person>(Person, { passed: true });

```

```json
{
  "id": "4cb85e06-1060-4bed-8224-14ec39e0dfa9",
  "firstName": "irure in",
  "currency": "887.56",
  "visits": -91521537.9856908,
  "passed": true
}
```

## Assumptions

In typescript object data can be faked based on either: the decorator, the
property name, or property typehint.

Although property names should remain somewhat consistant, it is unreasonable
many to many relationship to maintain. Generating values based on typehinting is
less then ideal due to special tsc requirements and compiled code being type
agnostic.

Using class validator decorators and schema are ideal for this repository as
decorators are already used for validation and object mapping. faker data should
be valid and meet class validator requirements. If a class validator requires a
string length faker data should meet that requirement. New decorators are easy
to add. It is for these reasons decorators were choosen.

## Documentation

- [F.I.R.S.T Principles of Testing](https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6>6)
- [Fake vs Mock](https://medium.com/@june.pravin/mocking-is-not-practical-use-fakes-e30cc6eaaf4e)
- [Faking vs Mocking vs Stubbing](https://www.educative.io/answers/what-is-faking-vs-mocking-vs-stubbinghttps://www.educative.io/answers/what-is-faking-vs-mocking-vs-stubbing)
- [fakerJs](https://fakerjs.dev/api/date.html#date)
- [class-transformer](https://github.com/typestack/class-transformer/tree/master)
- [class-validator](https://github.com/typestack/class-validator)
- [class-validator jsonschema](https://github.com/epiphone/class-validator-jsonschema)

## TODO

- [ ] Optional parameters
- [ ] Itergrate with swagger e.g.
- <https://www.reddit.com/r/Python/comments/n4giff/automatic_fake_json_data_creation_from_schema/>
- <https://github.com/subeeshcbabu-zz/swagmock>
