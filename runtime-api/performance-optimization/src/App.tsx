import { useModel } from "@modern-js/runtime/model";
import barModel from "./models/bar";
import fooModel from "./models/foo";

function ComponentA() {
  // 通过传入 selector 函数，只返回 a 状态给组件
  const [stateA] = useModel(fooModel, (state) => state.a);

  return <div>{stateA}</div>;
}

// reselect 优化示例
function ComponentB() {
  const [state, actions] = useModel(fooModel);
  const [{ combineA }] = useModel(barModel);
  return (
    <div>
      <div>a: {state.a}</div>
      <div>b: {state.b}</div>
      <div>combineA: {combineA}</div>
      <button
        onClick={() => {
          actions.setA(`${state.a}a`);
        }}
      >
        SetA
      </button>
      <button
        onClick={() => {
          actions.setB(`${state.b}b`);
        }}
      >
        SetB
      </button>
    </div>
  );
}

export default function App() {
  return <ComponentA />;
  // return <ComponentB />;
}
