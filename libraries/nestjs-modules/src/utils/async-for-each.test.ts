import { asyncForEach } from './async-for-each';

// Mock an asynchronous function
const mockAsyncFunction = jest.fn();

describe('asyncForEach', () => {
  it('should iterate over an array and call the asynchronous callback for each element', async () => {
    const myArray = [1, 2, 3, 4];

    // Mock the asynchronous callback function
    const mockCallback = jest
      .fn()
      .mockImplementation(async (element: number) => {
        // Simulate an asynchronous operation
        await mockAsyncFunction(element);
      });

    // Execute the asyncForEach function
    await asyncForEach(myArray, mockCallback);

    // Verify that the callback was called for each element in the array
    expect(mockCallback).toHaveBeenCalledTimes(myArray.length);

    // Verify that the asynchronous function was called for each element in the array
    myArray.forEach((element) => {
      expect(mockAsyncFunction).toHaveBeenCalledWith(element);
    });
  });
});
