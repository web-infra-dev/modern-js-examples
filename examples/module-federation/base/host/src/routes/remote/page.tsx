import { lazyLoadComponentPlugin } from '@module-federation/modern-js/react';
/**
 * When you declare the remote component in module-federation.config.ts
 * You can also directly import the component from the remote package
 * But it will flash the page when use SSR and the provider has css
 * For detail, please see https://module-federation.io/practice/frameworks/modern/index.html#css-flickering-issue
 */
// import { Button } from 'remote/Button';
import {
  type ModuleFederation,
  getInstance,
  loadRemote,
} from '@module-federation/modern-js/runtime';
import React from 'react';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
const instance: ModuleFederation = getInstance()!;
instance.registerPlugins([lazyLoadComponentPlugin()]);

const Button = instance.createLazyComponent({
  loader: () => loadRemote('remote/Button'),
  loading: 'loading...',
  export: 'Button',
  fallback: ({ error }) => {
    return (
      <div>
        <div>Fallback</div>
        <div>{error.message}</div>
      </div>
    );
  },
});

const Index = (): JSX.Element => {
  return (
    <div>
      <Button />
    </div>
  );
};

export default Index;
