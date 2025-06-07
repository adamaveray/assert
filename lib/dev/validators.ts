import { type AnyFunction, type Constructor, type Falsy, type Truthy } from '../../types.ts';
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
} from '../assertions.ts';

export function asNullable<T>(value: T, message?: string): T & (null | undefined) {
  if (process.env.NODE_ENV !== 'production') {
    assertNullable(value, message);
  }
  return value as T & (null | undefined);
}

export function asNonNullable<T>(value: T, message?: string): NonNullable<T> {
  if (process.env.NODE_ENV !== 'production') {
    assertNonNullable(value, message);
  }
  return value as NonNullable<T>;
}

export function asTruthy<T>(value: T, message?: string): Truthy<T> {
  if (process.env.NODE_ENV !== 'production') {
    assertTruthy(value, message);
  }
  return value as Truthy<T>;
}

export function asFalsy<T>(value: T, message?: string): T & Falsy {
  if (process.env.NODE_ENV !== 'production') {
    assertFalsy(value, message);
  }
  return value as T & Falsy;
}

export function asInstanceOf<TValue, TClass>(
  value: TValue,
  classType: Constructor<TClass>,
  message?: string,
): TValue & TClass {
  if (process.env.NODE_ENV !== 'production') {
    assertInstanceOf(value, classType, message);
  }
  return value as TValue & TClass;
}

export function asString<T>(value: T, message?: string): T & string {
  if (process.env.NODE_ENV !== 'production') {
    assertString(value, message);
  }
  return value as T & string;
}

export function asNumber<T>(value: T, message?: string): T & number {
  if (process.env.NODE_ENV !== 'production') {
    assertNumber(value, message);
  }
  return value as T & number;
}

export function asBoolean<T>(value: T, message?: string): T & boolean {
  if (process.env.NODE_ENV !== 'production') {
    assertBoolean(value, message);
  }
  return value as T & boolean;
}

export function asSymbol<T>(value: T, message?: string): T & symbol {
  if (process.env.NODE_ENV !== 'production') {
    assertSymbol(value, message);
  }
  return value as T & symbol;
}

export function asBigInt<T>(value: T, message?: string): T & bigint {
  if (process.env.NODE_ENV !== 'production') {
    assertBigInt(value, message);
  }
  return value as T & bigint;
}

export function asObject<T>(value: T, message?: string): T & object {
  if (process.env.NODE_ENV !== 'production') {
    assertObject(value, message);
  }
  return value as T & object;
}

export function asFunction<T>(value: T, message?: string): T & AnyFunction {
  if (process.env.NODE_ENV !== 'production') {
    assertFunction(value, message);
  }
  return value as T & AnyFunction;
}

export function asArray<T>(value: T, message?: string): T & unknown[] {
  if (process.env.NODE_ENV !== 'production') {
    assertArray(value, message);
  }
  return value as T & unknown[];
}

export function asUndefined<T>(value: T, message?: string): undefined {
  if (process.env.NODE_ENV !== 'production') {
    assertUndefined(value, message);
  }
  return value as undefined;
}
