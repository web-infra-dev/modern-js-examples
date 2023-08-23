import { createStore } from '@modern-js/runtime/model';
import countModel from './count';

describe('test model', () => {
  it('count value should plus one after add', () => {
    const store = createStore();
    const [state, { add }] = store.use(countModel);

    expect(state).toEqual({ value: 1 });

    add();

    expect(store.use(countModel)[0]).toEqual({ value: 2 });
  });
});
