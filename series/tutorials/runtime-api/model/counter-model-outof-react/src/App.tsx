import { useModel, useStore, Store } from "@modern-js/runtime/model";
import { useMemo } from "react";
import countModel from "./models/count";

let store:Store;
function setStore(s: Store) { store = s }; 
function getStore() { return store }; 
 
setInterval(() => {
  const store = getStore();
  const [, actions] = store.use(countModel);
  actions.add();
}, 1000)

function Counter() {
  const [state] = useModel(countModel);
  const store = useStore();

  useMemo(()=> {
    setStore(store)
  }, [store])

  return (
    <div>
      <div>counter: {state.value}</div>
    </div>
  );
}

export default function App() {
  return <Counter/>
}

