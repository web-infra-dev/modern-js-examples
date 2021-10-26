import { createStore } from '@modern-js/runtime/model';
import contactsModel from './contacts';

const mockItem = {
  avatar: '',
  name: '李华',
  age: '16',
  email: 'lihua@bytedance.com',
  archived: false,
};

describe('test contracts model', () => {
  it('actions works well', async () => {
    const store = createStore();
    const [state, actions] = store.use(contactsModel);

    state.items.push(mockItem);
    expect(state.items.length).toBe(1);
    expect(state.items[0].archived).toBeFalsy();

    await actions.archive('lihua@bytedance.com');
    expect(state.items[0].archived).toBeTruthy();
  });
});
