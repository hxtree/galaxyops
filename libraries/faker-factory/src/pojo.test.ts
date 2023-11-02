import { isPojo, toPojo } from './pojo';

class TestClass {
  a: string;

  b() {
    return this.a;
  }
}

describe('toPojo', () => {
  it('should convert complex object into plain old javascript object', () => {
    const sut = new TestClass();
    sut.a = 'Test';

    expect(toPojo(sut)).toEqual({ a: 'Test' });
  });
});

describe('isPojo', () => {
  it('should return false for non-pojo', () => {
    const sut = new TestClass();
    sut.a = 'Test';

    expect(isPojo(sut)).toBe(false);
  });

  it('should return true for pojo', () => {
    const sut = { a: 'Test' };

    expect(isPojo(sut)).toBe(true);
  });
});
