import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier'; // To disable ESLint rules that conflict with Prettier

export default [
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: { sourceType: 'module' }, // Only include src files
  },
  {
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      eqeqeq: 'off',
      'no-unused-vars': 'error',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'no-unused-expressions': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
  },
  {
    ignores: ['dist/**/*', '.node_modules/*'], // Ignore dist directory
  },
  pluginJs.configs.recommended, // ESLint recommended config for JS
  ...tseslint.configs.recommended, // TypeScript recommended config
  prettierConfig, // Disable conflicting ESLint rules
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error', // Enforce Prettier formatting as errors
    },
  },
];
