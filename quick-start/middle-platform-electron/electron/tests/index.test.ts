
/**
 * @jest-environment @modern-js/electron-test/dist/js/node/testEnvironment.js
 */

import './main-process';
import './render-process';
import './webview-process';

jest.setTimeout(100000);

