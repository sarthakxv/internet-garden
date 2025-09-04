// eslint.config.mjs
// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['.next/**', 'node_modules/**', 'out/**', 'dist/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    plugins: { '@next/next': nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      // Preserve existing custom rule
      'import/no-anonymous-default-export': 'off'
    }
  },
  prettier,
  {
    languageOptions: {
      parserOptions: {
        project: true, // auto-detect tsconfig.json
      }
    },
    rules: {
      // Add project-specific overrides here
    }
  }
];
