import { createPlugin } from '@modern-js/core';

export default createPlugin(() => ({
  commands: ({ program }) => {
    program.command('foo').action(() => {
      // do somethings
      console.info('foo');
    });
  },
}));
