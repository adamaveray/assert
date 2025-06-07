import { test, describe, expect } from 'bun:test';

import AssertionError from '../lib/AssertionError.ts';
import {
  asArray,
  asBigInt,
  asBoolean,
  asFalsy,
  asFunction,
  asInstanceOf,
  asNonNullable,
  asNullable,
  asNumber,
  asObject,
  asString,
  asSymbol,
  asTruthy,
  asUndefined,
} from '../lib/validators.ts';

import { falsyValues, truthyValues, wrapForEach } from './utils.ts';

describe('asNullable', () => {
  test.each([null, undefined])('should return the value when it is nullable', (value) => {
    expect<null | undefined>(asNullable(value)).toBe(value);
  });

  test.each(['string', 0, false, {}])('should throw when value is not nullable', (value) => {
    expect(() => asNullable(value)).toThrow(AssertionError);
  });
});

describe('asNonNullable', () => {
  test.each([null, undefined])('should throw when value is nullable', (value) => {
    expect(() => asNonNullable(value)).toThrow(AssertionError);
  });

  test.each(['string', 0, false, {}])('should return the value when it is not nullable', (value) => {
    expect(asNonNullable(value)).toBe(value);
  });
});

describe('asTruthy', () => {
  test.each(wrapForEach(truthyValues))('should return the value when it is truthy', (value) => {
    expect(asTruthy(value)).toBe(value);
  });

  test.each(wrapForEach(falsyValues))('should throw when value is falsy', (value) => {
    expect(() => asTruthy(value)).toThrow(AssertionError);
  });
});

describe('asFalsy', () => {
  test.each(wrapForEach(falsyValues))('should return the value when it is falsy', (value) => {
    expect(asFalsy(value) as unknown).toBe(value);
  });

  test.each(wrapForEach(truthyValues))('should throw when value is truthy', (value) => {
    expect(() => asFalsy(value)).toThrow(AssertionError);
  });
});

describe('asInstanceOf', () => {
  class TestClass {}
  const instance = new TestClass();

  test('should return the value when it is an instance of the class', () => {
    expect(asInstanceOf(instance, TestClass)).toBe(instance);
  });

  test.each([{}, null, undefined])('should throw when value is not an instance of the class', (value) => {
    expect(() => asInstanceOf(value, TestClass)).toThrow(AssertionError);
  });
});

describe('asString', () => {
  test.each(['', 'hello'])('should return the value when it is a string', (value) => {
    expect(asString(value)).toBe(value);
  });

  test.each([123, null, undefined, {}])('should throw when value is not a string', (value) => {
    expect(() => asString(value)).toThrow(AssertionError);
  });
});

describe('asNumber', () => {
  test.each([0, 123, -123, 123.456])('should return the value when it is a number', (value) => {
    expect(asNumber(value)).toBe(value);
  });

  test.each(['123', null, undefined, {}])('should throw when value is not a number', (value) => {
    expect(() => asNumber(value)).toThrow(AssertionError);
  });
});

describe('asBoolean', () => {
  test.each([true, false])('should return the value when it is a boolean', (value) => {
    expect(asBoolean(value)).toBe(value);
  });

  test.each([0, 1, 'true', null, undefined])('should throw when value is not a boolean', (value) => {
    expect(() => asBoolean(value)).toThrow(AssertionError);
  });
});

describe('asSymbol', () => {
  // eslint-disable-next-line symbol-description -- Testing both described and undescribed symbols
  test.each([Symbol(), Symbol('test')])('should return the value when it is a symbol', (value) => {
    expect(asSymbol(value)).toBe(value);
  });

  test.each(['string', null, undefined, {}])('should throw when value is not a symbol', (value) => {
    expect(() => asSymbol(value)).toThrow(AssertionError);
  });
});

describe('asBigInt', () => {
  test.each([BigInt(0), BigInt(123)])('should return the value when it is a bigint', (value) => {
    expect(asBigInt(value)).toBe(value);
  });

  test.each([123, '123', null, undefined])('should throw when value is not a bigint', (value) => {
    expect(() => asBigInt(value)).toThrow(AssertionError);
  });
});

describe('asObject', () => {
  test.each([{}, [['hello', 'world']], new Date()])('should return the value when it is an object', (value) => {
    expect(asObject(value)).toBe(value);
  });

  test.each([null, undefined, 'string', 123])('should throw when value is not an object', (value) => {
    expect(() => asObject(value)).toThrow(AssertionError);
  });
});

describe('asFunction', () => {
  test.each([(): void => {}, function testFunction(): void {}, Date])(
    'should return the value when it is a function',
    (value) => {
      expect(asFunction(value)).toBe(value);
    },
  );

  test.each([{}, null, undefined, 'string'])('should throw when value is not a function', (value) => {
    expect(() => asFunction(value)).toThrow(AssertionError);
  });
});

describe('asUndefined', () => {
  test('should return the value when it is undefined', () => {
    expect(asUndefined(undefined)).toBe(undefined);
  });

  test.each([null, '', 0, false])('should throw when value is not undefined', (value) => {
    expect(() => asUndefined(value)).toThrow(AssertionError);
  });
});

describe('asArray', () => {
  const emptyArray = [] as unknown[];
  const nonEmptyArray = [1, 2, 3];

  test.each([[emptyArray], [nonEmptyArray]])('should return the value when it is an array', (value) => {
    expect(Array.isArray(value)).toBe(true);
    expect(asArray(value)).toBe(value);
  });

  test.each([{}, null, undefined, 'string'])('should throw when value is not an array', (value) => {
    expect(() => asArray(value)).toThrow(AssertionError);
  });
});
