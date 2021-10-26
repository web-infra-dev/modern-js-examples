import { defineConfig } from '@modern-js/app-tools';

export default defineConfig({
  plugins: [
    {
      cli: require.resolve('foo-plugin'),
    },
  ],
});
