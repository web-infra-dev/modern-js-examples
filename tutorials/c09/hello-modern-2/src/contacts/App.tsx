import { useState } from 'react';
import { List, Radio, RadioChangeEvent } from 'antd';
import { Route, Switch, useHistory } from '@modern-js/runtime/router';
import { Helmet } from '@modern-js/runtime/head';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import './styles/utils.css';
import Item from './components/Item';

const getAvatar = (users: Array<{ name: string; email: string }>) =>
  users.map(user => ({
    ...user,
    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,
  }));

const mockData = getAvatar([
  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },
  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },
  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },
  { name: 'Davis', email: '"t.kqkoj@utlkwnpwk.nu' },
]);

const mockArchivedData = getAvatar([
  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },
  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },
]);

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
          <List
            dataSource={mockData}
            renderItem={info => <Item key={info.name} info={info} />}
          />
        </Route>
        <Route path="/archives" exact={true}>
          <Helmet>
            <title>Archives</title>
          </Helmet>
          <List
            dataSource={mockArchivedData}
            renderItem={info => <Item key={info.name} info={info} />}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
