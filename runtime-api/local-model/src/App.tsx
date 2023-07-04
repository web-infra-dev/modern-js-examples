import { useModel, useLocalModel } from '@modern-js/runtime/model';
import countModel from './models/count';

function LocalCounter() {
  const [state, actions] = useLocalModel(countModel);

  return (
    <div>
      <div>local counter: {state.value}</div>
      <button onClick={() => actions.add()}>add</button>
    </div>
  );
}

function Counter() {
  const [state, actions] = useModel(countModel);

  return (
    <div>
      <div>counter: {state.value}</div>
      <button onClick={() => actions.add()}>add</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Counter />
      <LocalCounter />
    </div>
  );
}
