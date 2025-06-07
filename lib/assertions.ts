import { type AnyFunction, type Constructor } from '../types.ts';

import AssertionError from './AssertionError.ts';

export function assert(value: boolean, message?: string): asserts value {
  if (!value) {
    throw new AssertionError(message);
  }
}

export function assertNullable(value: unknown, message?: string): asserts value is null | undefined {
  assert(value == null, message);
}

export function assertNonNullable<T>(value: T, message?: string): asserts value is NonNullable<T> {
  assert(value != null, message);
}

export function assertInstanceOf<T>(value: unknown, classType: Constructor<T>, message?: string): asserts value is T {
  assert(value instanceof classType, message);
}

export function assertString(value: unknown, message?: string): asserts value is string {
  assert(typeof value === 'string', message);
}

export function assertNumber(value: unknown, message?: string): asserts value is number {
  assert(typeof value === 'number', message);
}

export function assertBoolean(value: unknown, message?: string): asserts value is boolean {
  assert(typeof value === 'boolean', message);
}

export function assertSymbol(value: unknown, message?: string): asserts value is symbol {
  assert(typeof value === 'symbol', message);
}

export function assertBigInt(value: unknown, message?: string): asserts value is bigint {
  assert(typeof value === 'bigint', message);
}

export function assertObject(value: unknown, message?: string): asserts value is object {
  assert(value !== null && typeof value === 'object', message);
}

export function assertFunction(value: unknown, message?: string): asserts value is AnyFunction {
  assert(typeof value === 'function', message);
}

export function assertUndefined(value: unknown, message?: string): asserts value is undefined {
  assert(value === undefined, message);
}

export function assertArray(value: unknown, message?: string): asserts value is unknown[] {
  assert(Array.isArray(value), message);
}
