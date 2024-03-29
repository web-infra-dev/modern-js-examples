import { model } from '@modern-js/runtime/model';

const countModel = model('count').define({
  state: {
    value: 1,
  },
  actions: {
    add(state) {
      return {
        ...state,
        value: state.value + 1,
      };
    },
  },
});

export default countModel;
