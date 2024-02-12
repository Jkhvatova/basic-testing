// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const testList = generateLinkedList([1, 2, 3]);
    expect(testList).toStrictEqual({
      value: 1,
      next: { value: 2, next: { value: 3, next: { value: null, next: null } } },
    });
  });
  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const result = generateLinkedList([2, 3, 5, 7, 11]);
    expect(result).toMatchInlineSnapshot(`
      {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": null,
                  "value": null,
                },
                "value": 11,
              },
              "value": 7,
            },
            "value": 5,
          },
          "value": 3,
        },
        "value": 2,
      }
    `);
  });
});
