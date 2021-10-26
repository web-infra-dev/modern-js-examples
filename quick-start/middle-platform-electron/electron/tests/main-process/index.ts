// test main services

import TestDriver from '@modern-js/electron-test';

let testDriver: TestDriver | null = null;

jest.setTimeout(100000);

beforeAll(async () => {
  testDriver = (global as  any).testDriver;
  await testDriver?.whenReady();
});

describe('test main process services', () => {
  it('test window count', async () => {
    const windowsCount = await testDriver?.call({
      funcName: 'getWindowCount',
    })
    expect(windowsCount).toEqual(1);
  });
})
