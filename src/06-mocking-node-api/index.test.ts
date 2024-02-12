// Uncomment the code below and write your tests
import { doStuffByTimeout } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const testCallback = jest.fn();
    const testTimeout = 1000;
    jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(testCallback, testTimeout);
    expect(setTimeout).toHaveBeenCalledWith(testCallback, testTimeout);
    jest.restoreAllMocks();
  });

  test('should call callback only after timeout', () => {
    const testCallback = jest.fn();
    const testTimeout = 1000;
    doStuffByTimeout(testCallback, testTimeout);
    expect(testCallback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(testTimeout);
    expect(testCallback).toHaveBeenCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    // Write your test here
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
