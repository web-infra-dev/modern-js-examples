import { defineConfig } from '@modern-js/builder-cli';
import { builderPluginVue } from '@modern-js/builder-plugin-vue';

// https://modernjs.dev/builder/en/api/index.html
export default defineConfig({
  builderPlugins: [builderPluginVue()],
  html: {
    template: './src/template/index.html',
  },
});
