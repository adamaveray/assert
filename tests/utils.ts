export const truthyValues = ['hello world', true, {}, 1, -1, 1n] as const;
export const falsyValues = [null, undefined, false, Number.NaN, 0, -0, 0n] as const;

export function wrapForEach<T>(values: readonly T[]): [value: T][] {
  return values.map((value) => [value]);
}
