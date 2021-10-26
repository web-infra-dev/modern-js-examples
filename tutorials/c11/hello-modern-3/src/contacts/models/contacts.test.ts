import { createStore } from '@modern-js/runtime/testing';
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
    expect(store.use(contactsModel)[0].items.length).toBe(1);
    expect(store.use(contactsModel)[0].items[0].archived).toBeFalsy();

    await actions.archive('lihua@bytedance.com');
    expect(store.use(contactsModel)[0].items[0].archived).toBeTruthy();
  });
});
