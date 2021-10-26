import {
  exposeInMainWorld,
  browserWindowPreloadApis,
} from '@modern-js/runtime/electron-render';

import { testServices } from '@modern-js/electron-test/render';
import { join } from 'path';

const { callMain } = browserWindowPreloadApis;

export const apis = testServices({
  ...browserWindowPreloadApis,
  testRenderFunc: (data: string) => data,
  openWindow: (winName: string) => {
    return callMain('openWindow', winName);
  },
  getWebviewPreloadJs: () =>
    join(
      'file://',
      __dirname,
      '..',
      'webview',
      process.env.NODE_ENV === 'development' ? 'index.dev.js' : 'index.js',
    ),
});

exposeInMainWorld(apis);


