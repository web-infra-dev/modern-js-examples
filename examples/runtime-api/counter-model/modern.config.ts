import { appTools, defineConfig } from '@modern-js/app-tools';
import { testingPlugin } from '@modern-js/plugin-testing';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    state: true,
    router: true,
  },
  plugins: [appTools(), testingPlugin()],
});
