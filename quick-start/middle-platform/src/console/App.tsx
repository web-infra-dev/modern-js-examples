import React from 'react';
import { Route, Switch, Link } from '@modern-js/runtime/router';
import loadable from '@modern-js/runtime/loadable';

const Dashboard = loadable(() => import('./dashboard'));
const TableList = loadable(() => import('./tableList'));

const App: React.FC = () => (
  <div>
    <div>
      <Link to="/">Dashboard</Link> &nbsp;
      <Link to="/table">Table</Link>
    </div>
    <Switch>
      <Route path="/" exact={true}>
        <Dashboard />
      </Route>
      <Route path="/table">
        <TableList />
      </Route>
    </Switch>
  </div>
);

export default App;
