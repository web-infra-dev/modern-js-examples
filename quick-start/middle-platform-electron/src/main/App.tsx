import React from 'react';
import { Button } from 'antd';
import bridge from '@modern-js/runtime/electron-bridge';

const App: React.FC = () => (
  <div>
    <div>This is a landing page. </div>
    <Button onClick={() => bridge.openWindow('console')}>Go to console</Button>
    <Button onClick={() => bridge.openWindow('upgrade')}>Go to upgrade</Button>
    <webview
      src={'https://www.baidu.com'}
      id="webview1"
      // @ts-expect-error
      nodeintegration="true"
      preload={bridge.getWebviewPreloadJs()}
      style={{
        width: '100%',
        height: 300,
      }}></webview>
  </div>
);

export default App;
