import bridge from '@modern-js/runtime/electron-bridge';
import { IUpdateProgressInfo } from '@modern-js/runtime/electron-render';
import { Switch, Route } from '@modern-js/runtime/router';
import { useEffect, useState } from 'react';

// callToBroadCast();
const App: React.FC = () => {
  const [progress, setProgress] = useState<IUpdateProgressInfo | null>();
  const [err, setErr] = useState('');
  useEffect(() => {
    const idleListener = bridge.updateService.onUpdateIdle(() => {
      window.alert('暂无可用更新版本');
    });
    const updateProgressListener = bridge.updateService.onUpdateProgress(
      (_progress: IUpdateProgressInfo) => {
        console.log('升级进度信息:', _progress);
        setProgress(_progress);
      },
    );
    const updateErrorListener = bridge.updateService.onUpdateError(
      (_err: any) => {
        console.error('升级失败:', _err);
        setErr(_err.message);
      },
    );
    const updateDoneListener = bridge.updateService.onUpdateDone(() => {
      console.error('升级完成, 重启');
      const res = confirm('是否重启?');
      if (res) {
        bridge.updateService.restartAndInstall();
      }
    });
    return () => {
      // 解除监听
      idleListener.dispose();
      updateProgressListener.dispose();
      updateErrorListener.dispose();
      updateDoneListener.dispose();
    };
  }, []);
  return (
    <Switch>
      <Route exact={true} path="/">
        <div>
          <div className="font-bold">升级流程测试</div>
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => {
                bridge.startToUpdate(
                  'xxxx',
                );
              }}>
              开始检测升级
            </button>
            <div>
              <p>下载速度：{progress?.percent}</p>
              <p>总体大小：{progress?.total}</p>
              <p>已下载：{progress?.transferred}</p>
            </div>
            {err && <div>{err}</div>}
          </div>
        </div>
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  );
};

export default App;
