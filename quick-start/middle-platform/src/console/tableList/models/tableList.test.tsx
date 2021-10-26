import { createStore } from '@modern-js/runtime/model';
import tableListModel from './tableList';

jest.mock('@api/users', () => [
  { key: 1, name: 'modernjs', age: 12, country: 'China' },
]);

describe('test model', () => {
  it('basic usage', async () => {
    const store = createStore();

    const [state, { load }] = store.use(tableListModel);

    expect(state.data).toEqual([]);

    await load();

    expect(store.use(tableListModel)[0].data.length).toEqual(1);
  });
});
