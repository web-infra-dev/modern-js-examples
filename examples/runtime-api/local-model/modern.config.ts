import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    state: true,
    router: true,
  },
  plugins: [appTools()],
});
