import { model } from '@modern-js/runtime/model';
import users from '@api/users'

type State = {
  data: {
    key: string;
    name: string;
    age: string;
    country: string;
    archived: boolean;
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

        return state;
      },
    }
  },
  effects: {
    async load() {
      const data = await users();
      return data;
    },
  },
});
