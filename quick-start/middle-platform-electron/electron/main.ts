import { app } from 'electron';
import Runtime, { winService, lifecycleService } from '@modern-js/runtime/electron-main';
import { testServices } from '@modern-js/electron-test/main';
import { join } from 'path';
import type { WindowConfig } from '@modern-js/runtime/electron-main';

app.commandLine.appendSwitch('ignore-certificate-errors');

const IS_DEV = !app.isPackaged;

// preload js for browserwindow to provide native apis for render-process
const PRELOAD_JS = join(
  __dirname,
  'preload',
  'browserWindow',
  IS_DEV ? 'index.dev.js' : 'index.js',
);

// windows config
const commonConfig = {
  webPreferences: {
    nodeIntegration: true,
    preload: PRELOAD_JS,
    webviewTag: true,
    contextIsolation: false,
    enableRemoteModule: true,
  },
};


export const windowsConfig: WindowConfig[] = [
  {
    name: 'main',
    options: commonConfig,
  },
  {
    name: 'console',
    options: commonConfig,
  },
  {
    name: 'upgrade',
    options: commonConfig,
  },
];

const services = {
  openWindow: (winName: string) => {
    return winService.createWindow({
      name: winName,
    })
  },
  getWindowCount: () => {
    return winService.getWindows().length;
  }
};

testServices({
  ...services,
  lifecycleService,
  winService
});

const runtime = new Runtime({
  windowsConfig,
  mainServices: services,
});

app.whenReady().then(async () => {
  await runtime.init();
  winService.createWindow({
    name: 'main',
  })

});



