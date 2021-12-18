import { HelloWorld } from './index';

test('Check for Hello, World', () => {
    expect(HelloWorld.message).toBe('Hello, World');
});