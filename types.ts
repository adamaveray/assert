export type Constructor<T> = new (...args: any[]) => T;
export type AnyFunction = (...args: unknown[]) => unknown;

/**
 * (Also includes Number.NaN which cannot be explicitly declared separate from `number` in a type, and `document.all` which is DOM-context-only and deprecated.)
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
export type Falsy = null | undefined | false | 0 | 0n | ''; // eslint-disable-line @typescript-eslint/no-magic-numbers -- Values direct from the spec.
export type Truthy<T> = Exclude<T, Falsy>;
