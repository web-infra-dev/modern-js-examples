import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import { ComponentType } from 'react';

const App = ({ Component, ...pageProps }: { Component: ComponentType }) => (
  <div>
    <Component {...pageProps} />
  </div>
);

export default App;
