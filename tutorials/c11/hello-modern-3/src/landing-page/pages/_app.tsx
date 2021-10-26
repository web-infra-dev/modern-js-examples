import { ComponentType } from 'react';
import { NavLink } from '@modern-js/runtime/router';

const App = ({ Component, ...pageProps }: { Component: ComponentType }) => (
  <div>
    <h2>Nav:</h2>
    <ul>
      <li>
        <NavLink
          to="/"
          exact={true}
          activeStyle={{
            color: '#f60',
          }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/docs"
          activeStyle={{
            color: '#f60',
          }}>
          Docs
        </NavLink>
      </li>
    </ul>
    <h2>Content:</h2>
    <Component {...pageProps} />
  </div>
);

export default App;
