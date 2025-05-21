import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  tools: {
    babel(_, { addPlugins }) {
      addPlugins([
        [
          'babel-plugin-react-compiler',
          {
            target: '18',
          },
        ],
      ]);
    },
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
  ],
});
