import { type AnyFunction, type Constructor, type Falsy, type Truthy } from '../../types.ts';
import {
  assert as innerAssert,
  assertArray as innerAssertArray,
  assertBigInt as innerAssertBigInt,
  assertBoolean as innerAssertBoolean,
  assertFalsy as innerAssertFalsy,
  assertFunction as innerAssertFunction,
  assertInstanceOf as innerAssertInstanceOf,
  assertNonNullable as innerAssertNonNullable,
  assertNullable as innerAssertNullable,
  assertNumber as innerAssertNumber,
  assertObject as innerAssertObject,
  assertString as innerAssertString,
  assertSymbol as innerAssertSymbol,
  assertTruthy as innerAssertTruthy,
  assertUndefined as innerAssertUndefined,
} from '../assertions.ts';

export function assert(value: boolean, message?: string): asserts value {
  if (process.env.NODE_ENV !== 'production') {
    innerAssert(value, message);
  }
}

export function assertNullable(value: unknown, message?: string): asserts value is null | undefined {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertNullable(value, message);
  }
}

export function assertNonNullable(value: unknown, message?: string): asserts value is NonNullable<typeof value> {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertNonNullable(value, message);
  }
}

export function assertTruthy<T>(value: T, message?: string): asserts value is Truthy<T> {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertTruthy(value, message);
  }
}

export function assertFalsy(value: unknown, message?: string): asserts value is Falsy {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertFalsy(value, message);
  }
}

export function assertInstanceOf<T>(value: unknown, classType: Constructor<T>, message?: string): asserts value is T {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertInstanceOf(value, classType, message);
  }
}

export function assertString(value: unknown, message?: string): asserts value is string {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertString(value, message);
  }
}

export function assertNumber(value: unknown, message?: string): asserts value is number {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertNumber(value, message);
  }
}

export function assertBoolean(value: unknown, message?: string): asserts value is boolean {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertBoolean(value, message);
  }
}

export function assertArray(value: unknown, message?: string): asserts value is unknown[] {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertArray(value, message);
  }
}

export function assertSymbol(value: unknown, message?: string): asserts value is symbol {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertSymbol(value, message);
  }
}

export function assertBigInt(value: unknown, message?: string): asserts value is bigint {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertBigInt(value, message);
  }
}

export function assertObject(value: unknown, message?: string): asserts value is object {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertObject(value, message);
  }
}

export function assertFunction(value: unknown, message?: string): asserts value is AnyFunction {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertFunction(value, message);
  }
}

export function assertUndefined(value: unknown, message?: string): asserts value is undefined {
  if (process.env.NODE_ENV !== 'production') {
    innerAssertUndefined(value, message);
  }
}
