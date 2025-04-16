import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
  ],
  server: {
    baseUrl: '/modern-js-deploy-csr', // It should be replaced with your repository name
  },
  output: {
    minify: false,
    assetPrefix: '/modern-js-deploy-csr/', // It should be replaced with your repository name
  },
});
