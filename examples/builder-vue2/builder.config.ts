import { defineConfig } from '@modern-js/builder-cli';
import { builderPluginVue2 } from '@modern-js/builder-plugin-vue2';

// https://modernjs.dev/builder/en/api/index.html
export default defineConfig({
  builderPlugins: [builderPluginVue2()],
  html: {
    template: './src/template/index.html',
  },
});
