import { model, handleEffect } from '@modern-js/runtime/model';

const todoModel = model('todo').define(() => {
  return {
    state: {
      items: [],
      loading: false,
      error: null,
    },
    actions: {
      load: handleEffect({ result: 'items' }),
    },
    effects: {
      async load() {
        return new Promise(resolve => {
          setTimeout(() => resolve(['Lerna ModernJS']), 2000);
        });
      },
    },
  };
});

export default todoModel;
