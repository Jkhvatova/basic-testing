// Uncomment the code below and write your tests
import { doStuffByInterval, doStuffByTimeout } from '.';

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
    const testCallback = jest.fn();
    const testInterval = 1000;
    jest.spyOn(global, 'setInterval');
    doStuffByInterval(testCallback, testInterval);
    expect(setInterval).toHaveBeenCalledWith(testCallback, testInterval);
    jest.restoreAllMocks();
  });

  test('should call callback multiple times after multiple intervals', () => {
    const testCallback = jest.fn();
    const testInterval = 1000;
    doStuffByInterval(testCallback, testInterval);
    expect(testCallback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(testInterval);
    for (let i = 1; i < 10; i++) {
      jest.advanceTimersByTime(testInterval);
    }
    expect(testCallback).toHaveBeenCalledTimes(10);
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
