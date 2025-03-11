import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

const isLocal = process.env.IS_LOCAL === 'true';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  server: {
    port: 3051,
  },
  runtime: {
    router: true,
  },
  output: {
    assetPrefix: isLocal ? 'http://127.0.0.1:3051' : '/',
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
    moduleFederationPlugin(),
  ],
});
