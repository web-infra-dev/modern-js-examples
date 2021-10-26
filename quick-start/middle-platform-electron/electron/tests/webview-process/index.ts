import TestDriver from '@modern-js/electron-test';

let testDriver: TestDriver | null = null;

const webviewId1 = 'webview1';

beforeAll(() => {
  testDriver = new TestDriver({
    cwd: process.cwd(),
    envs: {
      TEST_FOLDER: 'webviewBridge',
    },
  });
  return Promise.all(
    [webviewId1].map(async x => {
      await testDriver?.whenReady('main', {
        webviewId: x,
      });
      await testDriver?.call({
        funcName: 'webviewService.addWebview',
        winName: 'main',
        args: [x, true],
      });
    }),
  );
});

afterAll(() => {
  testDriver?.stop();
})

describe('test webview bridge', () => {
  it('test webview registerServices again', async () => {
    const msg1 = 'this is msg from webview';
    
    const result = await testDriver?.call({
      funcName: 'webviewService.callWebview',
      winName: 'main',
      args: [webviewId1, 'testWebviewFunc', msg1],
    });

    expect(result).toBe(msg1);

  });
});
