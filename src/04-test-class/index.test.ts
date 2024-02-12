// Uncomment the code below and write your tests
import {
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
  getBankAccount,
} from '.';

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
    const testAmount = 500;
    const testDeposit = 700;
    const testAccount = getBankAccount(testAmount);
    testAccount.deposit(testDeposit);
    expect(testAccount.getBalance()).toBe(testAmount + testDeposit);
  });

  test('should withdraw money', () => {
    const testAmount = 700;
    const testWithdrawal = 500;
    const testAccount = getBankAccount(testAmount);
    testAccount.withdraw(testWithdrawal);
    expect(testAccount.getBalance()).toBe(testAmount - testWithdrawal);
  });

  test('should transfer money', () => {
    const testFromAmount = 500;
    const testToAmount = 100;
    const testFromAccount = getBankAccount(testFromAmount);
    const testToAccount = getBankAccount(testToAmount);
    const testTransferAmount = 200;
    testFromAccount.transfer(testTransferAmount, testToAccount);
    expect(testFromAccount.getBalance()).toBe(
      testFromAmount - testTransferAmount,
    );
    expect(testToAccount.getBalance()).toBe(testToAmount + testTransferAmount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const testAccount = getBankAccount(500);
    const testAmount = 50;
    const mockFetchBalance = jest.fn().mockResolvedValue(testAmount);
    testAccount.fetchBalance = mockFetchBalance;

    const result = await testAccount.fetchBalance();
    expect(typeof result).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const testAccount = getBankAccount(500);
    const testAmount = 50;
    const mockFetchBalance = jest.fn().mockResolvedValue(testAmount);
    testAccount.fetchBalance = mockFetchBalance;
    await testAccount.synchronizeBalance();
    expect(testAccount.getBalance()).toBe(testAmount);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const testAccount = getBankAccount(500);
    const mockFetchBalance = jest.fn().mockResolvedValue(null);
    testAccount.fetchBalance = mockFetchBalance;
    await expect(testAccount.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
