import { useState } from 'react';
import { upperCase } from '@/index';

const Component = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <div>result: {upperCase(value)}</div>
    </div>
  );
};

export const YourStory = () => <Component />;

export default {
  title: 'Your Stories',
};
