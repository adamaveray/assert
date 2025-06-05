# @averay/assert

A collection of runtime TypeScript assertion functions to ensure strict type safety without relying on TypeScript type assertion statements.

## Usage

The library consists of two parts – **"assertions"** and **"validators"**. **Assertions** ensure a condition is true – e.g. a value is non-nullable – throwing an error otherwise. **Validators** run a corresponding assertion then return the original, now-validated value.

Both assertions and validators provide "dev" alternates which, when run under a `NODE_ENV=production` environment, will bypass the actual assertions, effectively making them no-ops. Bundlers that support this environment-aware tree shaking can therefore eliminate the library in production builds.

## Example

```ts
const values: string[] = getExampleValues();
const index: number = getExampleIndex();

// Without this library
const selectedItem = values[index]!;

// With this library's assertions
import { assertNonNullable } from '@averay/assert';
const selectedItem = values[index];
assertNonNullable(selectedItem, 'The item at the specified index must be set.');

// With this library's validators
import { asNonNullable } from '@averay/assert';
const selectedItem = asNonNullable(values[index], 'The item at the specified index must be set.');
```

---

[MIT Licenced](./LICENCE)
