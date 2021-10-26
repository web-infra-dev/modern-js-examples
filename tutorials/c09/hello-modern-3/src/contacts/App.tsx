import { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { Route, Switch, useHistory } from '@modern-js/runtime/router';
import { Helmet } from '@modern-js/runtime/head';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import './styles/utils.css';
import AllContacts from './components/AllContacts';
import ArchivedContacts from './components/ArchivedContacts';

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
      <Switch>
        <Route path="/" exact={true}>
          <Helmet>
            <title>All</title>
          </Helmet>
          <AllContacts />
        </Route>
        <Route path="/archives" exact={true}>
          <Helmet>
            <title>Archives</title>
          </Helmet>
          <ArchivedContacts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
