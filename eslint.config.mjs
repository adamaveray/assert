import { globals, makeEslintConfig } from '@averay/codeformat';

export default [
  ...makeEslintConfig({ tsconfigPath: './tsconfig.json' }),
  {
    rules: {
      '@typescript-eslint/naming-convention': 'off',
      'unicorn/no-useless-undefined': 'off',
    },
  },
  {
    files: ['lib/**/*.ts'],
    languageOptions: { globals: { ...globals.browser, ...globals.es2025 } },
    rules: {
      'no-extra-boolean-cast': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      'import/prefer-default-export': 'off',
      'sonarjs/function-return-type': 'off',
      'sonarjs/prefer-regexp-exec': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-spread': 'off',
    },
  },
  {
    files: ['lib/dev/**/*.ts'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2025, process: true },
    },
    rules: {
      'no-process-env': 'off',
    },
  },
  {
    files: ['tests/**/*.ts'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2025, process: true },
    },
    rules: {
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },
];
