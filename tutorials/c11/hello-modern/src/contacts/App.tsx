import { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { Route, useHistory } from '@modern-js/runtime/router';
import { Helmet } from '@modern-js/runtime/head';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import './styles/utils.css';
import Contacts from './components/Contacts';

function App() {
  const history = useHistory();
  const [currentList, setList] = useState(history.location.pathname || '/');
  const handleSetList = (e: RadioChangeEvent) => {
    const { value } = e.target;
    setList(value);
    history.push(value);
  };

  return (
    <div className="container lg mx-auto">
      <div className="h-16 p-2 flex items-center justify-center">
        <Radio.Group onChange={handleSetList} value={currentList}>
          <Radio value="/">All</Radio>
          <Radio value="/archives">Archives</Radio>
        </Radio.Group>
      </div>
        <Route path="/" exact={true}>
          <Helmet>
            <title>All</title>
          </Helmet>
          <Contacts source="items" />
        </Route>
        <Route path="/archives" exact={true}>
          <Helmet>
            <title>Archives</title>
          </Helmet>
          <Contacts source="archived" />
        </Route>
    </div>
  );
}

export default App;
