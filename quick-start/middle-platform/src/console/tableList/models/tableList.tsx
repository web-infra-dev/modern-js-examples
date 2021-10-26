import { model } from '@modern-js/runtime/model';
import users from '@api/users';

type State = {
  data: {
    key: string;
    name: string;
    age: number;
    country: string;
  }[];
};

export default model<State>('tableList').define({
  state: {
    data: [],
  },
  actions: {
    load: {
      fulfilled(state, payload) {
        state.data = payload;
      },
    },
  },
  effects: {
    async load() {
      const data = await users();
      return data;
    },
  },
});
