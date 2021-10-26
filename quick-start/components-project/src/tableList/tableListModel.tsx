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
        return { data: payload };
      },
    },
  },
  effects: {
    async load() {
      const data = await (
        await fetch(
          'https://lf3-static.bytednsdoc.com/obj/eden-cn/beeh7uvzhq/users.json',
        )
      ).json();
      return data;
    },
  },
});
