import { Switch, Route, Link } from '@modern-js/runtime/router';
import { useModuleApps } from '@modern-js/runtime';

import './App.css';

const App: React.FC = () => {
  const {
    Dashboard,
    TableList
  } = useModuleApps();

  return (
    <div>
      <div>
        <Link to="/dashboard">Dashboard</Link> &nbsp;
        <Link to="/table">Table</Link>
      </div>
      <Switch>
        <Route path="/dashboard" exact={true}>
          <Dashboard />
        </Route>
        <Route path="/table">
          <TableList/>
        </Route>
      </Switch>
    </div>
  );
};


export default App;
