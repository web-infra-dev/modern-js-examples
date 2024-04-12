import {
  moduleTools,
  defineConfig,
  ModuleConfigParams,
} from '@modern-js/module-tools';
import type { UserConfigExport } from '@modern-js/core';

const config: UserConfigExport<ModuleConfigParams> = {
  plugins: [moduleTools()],
  buildPreset: 'npm-library',
};
export default defineConfig(config);
