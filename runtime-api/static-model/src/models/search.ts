import { model } from '@modern-js/runtime/model';

const searchModel = model('search').define({
  state: {
    input: '',
  },
  actions: {
    setValue(state, keyword) {
      state.input = keyword;
    },
  },
});

export default searchModel;
