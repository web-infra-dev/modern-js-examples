import { model } from '@modern-js/runtime/model';

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
      const res = await fetch(
        'https://lf3-static.bytednsdoc.com/obj/eden-cn/beeh7uvzhq/users.json',
      );
      return res.json();
    },
  },
});
