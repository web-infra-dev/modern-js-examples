import {
  webviewPreloadApis,
  exposeInMainWorld,
} from '@modern-js/runtime/electron-webview';
import { testServices } from '@modern-js/electron-test/webview';

export const apis = testServices({
  ...webviewPreloadApis,
  testWebviewFunc: (data: string) => data,

});

exposeInMainWorld(apis);
