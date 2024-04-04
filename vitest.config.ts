import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    includeSource: ['src/**/*.spec.ts'],
    exclude: [...configDefaults.exclude],
    globals: true,
  },
  resolve: {
    alias: {
      '@modules/': '/src/modules/',
      '@shared/': '/src/shared/',
      '@tests/': '/src/tests/',
      '@env/': '/src/env/',
      '@infra/': '/src/infra/',
      '@functions/': '/src/functions/',
    },
  },
});
