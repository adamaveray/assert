import { type AnyFunction, type Constructor, type Falsy, type Truthy } from '../types.ts';

import {
  assertArray,
  assertBigInt,
  assertBoolean,
  assertFalsy,
  assertFunction,
  assertInstanceOf,
  assertNonNullable,
  assertNullable,
  assertNumber,
  assertObject,
  assertString,
  assertSymbol,
  assertTruthy,
  assertUndefined,
} from './assertions.ts';

export function asNullable<T>(value: T, message?: string): T & (null | undefined) {
  assertNullable(value, message);
  return value;
}

export function asNonNullable<T>(value: T, message?: string): NonNullable<T> {
  assertNonNullable(value, message);
  return value;
}

export function asTruthy<T>(value: T, message?: string): Truthy<T> {
  assertTruthy(value, message);
  return value;
}

export function asFalsy<T>(value: T, message?: string): T & Falsy {
  assertFalsy(value, message);
  return value;
}

export function asInstanceOf<TValue, TClass>(
  value: TValue,
  classType: Constructor<TClass>,
  message?: string,
): TValue & TClass {
  assertInstanceOf(value, classType, message);
  return value;
}

export function asString<T>(value: T, message?: string): T & string {
  assertString(value, message);
  return value;
}

export function asNumber<T>(value: T, message?: string): T & number {
  assertNumber(value, message);
  return value;
}

export function asBoolean<T>(value: T, message?: string): T & boolean {
  assertBoolean(value, message);
  return value;
}

export function asSymbol<T>(value: T, message?: string): T & symbol {
  assertSymbol(value, message);
  return value;
}

export function asBigInt<T>(value: T, message?: string): T & bigint {
  assertBigInt(value, message);
  return value;
}

export function asObject<T>(value: T, message?: string): T & object {
  assertObject(value, message);
  return value;
}

export function asFunction<T>(value: T, message?: string): T & AnyFunction {
  assertFunction(value, message);
  return value;
}

export function asArray<T>(value: T, message?: string): T & unknown[] {
  assertArray(value, message);
  return value;
}

export function asUndefined<T>(value: T, message?: string): undefined {
  assertUndefined(value, message);
  return value;
}
