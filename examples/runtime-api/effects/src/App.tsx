import { useEffect } from 'react';
import { useModel } from '@modern-js/runtime/model';
import todoModel from './model/todo';

function Todo() {
  const [state, actions] = useModel(todoModel);

  useEffect(() => {
    // @ts-expect-error
    actions.load();
  }, []);

  if (state.loading) {
    return <div>loading....</div>;
  }

  return (
    <div>
      <div>
        {state.items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return <Todo />;
}
