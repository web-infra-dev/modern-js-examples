import { useModel, useStaticModel } from '@modern-js/runtime/model';
import searchModel from './models/search';

function Input() {
  const [state, actions] = useModel(searchModel);

  return (
    <div>
      <label>Keyword: </label>
      <input
        onChange={(e)=>{
          actions.setValue(e.target.value);
        }
      } value={state.input}/>
    </div>
  );
}

const mockSearch = (input:string) => {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve(`${input}-result`)
    }, 50)
  })
}

function Search() {
  // 这里注意不要解构 state
  const [state] = useStaticModel(searchModel);

  return (
    <div>
      <button
        onClick={async ()=>{
          const result = await mockSearch(state.input);
          console.log(result)
        }}
      >Search</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Input />
      <Search />
    </div>
  );
}
