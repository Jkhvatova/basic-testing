// Uncomment the code below and write your tests
import { InsufficientFundsError, TransferFailedError, getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const testAccount = getBankAccount(500);
    expect(testAccount.getBalance()).toBe(500);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const testAccount = getBankAccount(500);
    const testAmount = 700;
    expect(() => testAccount.withdraw(testAmount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const testFromAccount = getBankAccount(500);
    const testToAccount = getBankAccount(100);
    const testAmount = 700;
    expect(() => testFromAccount.transfer(testAmount, testToAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const testAccount = getBankAccount(500);
    expect(() => testAccount.transfer(500, testAccount)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    // Write your test here
  });

  test('should withdraw money', () => {
    // Write your test here
  });

  test('should transfer money', () => {
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
