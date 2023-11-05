import { pascalCase } from './pascalCase';

describe('pascalCase', () => {
  it.each([
    ['hello_world___example', 'HelloWorldExample'],
    ['happyFlower--Case', 'HappyFlowerCase'],
    [
      'go to the location where the rivers starts',
      'GoToTheLocationWhereTheRiversStarts',
    ],
    ['good-person12@example.com', 'GoodPerson12ExampleCom'],
    ['>>>> HEAD', 'HEAD'],
    ['mock-API-endpoint-344', 'MockAPIEndpoint344'],
  ])(
    'should get string as %s as %s',
    async (inputString: string, expectedString: string) => {
      const pascalString = pascalCase(inputString);
      expect(pascalString).toEqual(expectedString);
    },
  );
});
