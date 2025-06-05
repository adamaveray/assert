import { test, describe, expect } from 'bun:test';

import AssertionError from '../lib/AssertionError.ts';
import {
  assert,
  assertNullable,
  assertNonNullable,
  assertInstanceOf,
  assertString,
  assertNumber,
  assertBoolean,
  assertSymbol,
  assertBigInt,
  assertObject,
  assertFunction,
  assertUndefined,
  assertArray,
} from '../lib/assertions.ts';

describe('assert', () => {
  test('should not throw when value is true', () => {
    expect(() => {
      assert(true);
    }).not.toThrow();
  });

  test('should throw when value is false', () => {
    expect(() => {
      assert(false);
    }).toThrow(AssertionError);
  });

  test('should throw with custom message when provided', () => {
    const message = 'Custom error message';
    expect(() => {
      assert(false, message);
    }).toThrow(new AssertionError(message));
  });
});

describe('assertNullable', () => {
  test.each([null, undefined])('should not throw when value is nullable', (value) => {
    expect(() => {
      assertNullable(value);
    }).not.toThrow();
  });

  test.each(['string', 0, false, {}])('should throw when value is not nullable', (value) => {
    expect(() => {
      assertNullable(value);
    }).toThrow(AssertionError);
  });
});

describe('assertNonNullable', () => {
  test.each([null, undefined])('should throw when value is nullable', (value) => {
    expect(() => {
      assertNonNullable(value);
    }).toThrow(AssertionError);
  });

  test.each(['string', 0, false, {}])('should not throw when value is not nullable', (value) => {
    expect(() => {
      assertNonNullable(value);
    }).not.toThrow();
  });
});

describe('assertInstanceOf', () => {
  class TestClass {}

  test('should not throw when value is an instance of the class', () => {
    expect(() => {
      assertInstanceOf(new TestClass(), TestClass);
    }).not.toThrow();
  });

  test.each([{}, new Date(), null, undefined])('should throw when value is not an instance of the class', (value) => {
    expect(() => {
      assertInstanceOf(value, TestClass);
    }).toThrow(AssertionError);
  });
});

describe('assertString', () => {
  test.each(['', 'hello'])('should not throw when value is a string', (value) => {
    expect(() => {
      assertString(value);
    }).not.toThrow();
  });

  test.each([123, null, undefined, {}])('should throw when value is not a string', (value) => {
    expect(() => {
      assertString(value);
    }).toThrow(AssertionError);
  });
});

describe('assertNumber', () => {
  test.each([0, 123, -123, 123.456])('should not throw when value is a number', (value) => {
    expect(() => {
      assertNumber(value);
    }).not.toThrow();
  });

  test.each(['123', null, undefined, {}])('should throw when value is not a number', (value) => {
    expect(() => {
      assertNumber(value);
    }).toThrow(AssertionError);
  });
});

describe('assertBoolean', () => {
  test.each([true, false])('should not throw when value is a boolean', (value) => {
    expect(() => {
      assertBoolean(value);
    }).not.toThrow();
  });

  test.each([0, 1, 'true', null, undefined])('should throw when value is not a boolean', (value) => {
    expect(() => {
      assertBoolean(value);
    }).toThrow(AssertionError);
  });
});

describe('assertSymbol', () => {
  // eslint-disable-next-line symbol-description -- Testing both described and undescribed symbols
  test.each([Symbol(), Symbol('test')])('should not throw when value is a symbol', (value) => {
    expect(() => {
      assertSymbol(value);
    }).not.toThrow();
  });

  test.each(['string', null, undefined, {}])('should throw when value is not a symbol', (value) => {
    expect(() => {
      assertSymbol(value);
    }).toThrow(AssertionError);
  });
});

describe('assertBigInt', () => {
  test.each([BigInt(0), BigInt(123)])('should not throw when value is a bigint', (value) => {
    expect(() => {
      assertBigInt(value);
    }).not.toThrow();
  });

  test.each([123, 'string', null, undefined])('should throw when value is not a bigint', (value) => {
    expect(() => {
      assertBigInt(value);
    }).toThrow(AssertionError);
  });
});

describe('assertObject', () => {
  test.each([{}, [['hello world']], new Date()])('should not throw when value is an object', (value) => {
    expect(() => {
      assertObject(value);
    }).not.toThrow();
  });

  test.each([null, undefined, 'string', 123])('should throw when value is not an object', (value) => {
    expect(() => {
      assertObject(value);
    }).toThrow(AssertionError);
  });
});

describe('assertFunction', () => {
  test.each([() => {}, function testFunction() {}, Date])('should not throw when value is a function', (value) => {
    expect(() => {
      assertFunction(value);
    }).not.toThrow();
  });

  test.each([{}, null, undefined, 'string'])('should throw when value is not a function', (value) => {
    expect(() => {
      assertFunction(value);
    }).toThrow(AssertionError);
  });
});

describe('assertUndefined', () => {
  test('should not throw when value is undefined', () => {
    expect(() => {
      assertUndefined(undefined);
    }).not.toThrow();
  });

  test.each([null, '', 0, false])('should throw when value is not undefined', (value) => {
    expect(() => {
      assertUndefined(value);
    }).toThrow(AssertionError);
  });
});

describe('assertArray', () => {
  const emptyArray = [] as unknown[];
  const nonEmptyArray = [1, 2, 3];

  test.each([[emptyArray], [nonEmptyArray]])('should not throw when value is an array', (value) => {
    expect(() => {
      assertArray(value);
    }).not.toThrow();
  });

  test.each([{}, null, undefined, 'string'])('should throw when value is not an array', (value) => {
    expect(() => {
      assertArray(value);
    }).toThrow(AssertionError);
  });
});
