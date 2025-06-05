import { type AnyFunction, type Constructor } from '../types.ts';

import {
  assertArray,
  assertBigInt,
  assertBoolean,
  assertFunction,
  assertInstanceOf,
  assertNonNullable,
  assertNullable,
  assertNumber,
  assertObject,
  assertString,
  assertSymbol,
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
