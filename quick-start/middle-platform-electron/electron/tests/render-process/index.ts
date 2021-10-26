// test render services

import TestDriver from '@modern-js/electron-test';

let testDriver: TestDriver | null = null;

jest.setTimeout(100000);

beforeAll(async () => {
  testDriver = (global as  any).testDriver;
  // 当窗口 main 加载完毕
  await testDriver?.whenReady('main');
});

describe('test render process services', () => {
  it('test render func', async () => {
    const data = 'test render func';
    // 测试窗口中注册的函数 testRenderFunc
    const result = await testDriver?.call({
      funcName: 'testRenderFunc',
      winName: 'main',
      args: [data]
    })
    expect(result).toEqual(data);
  })
})
