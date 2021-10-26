
declare module '@modern-js/electron-runtime' {
  export type BrowserWindowApis = typeof import('../electron/preload/browserWindow').apis;
}

