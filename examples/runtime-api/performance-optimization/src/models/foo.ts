import { model } from '@modern-js/runtime/model';

export interface FooState {
  a: string;
  b: string;
}

const fooModel = model('foo').define({
  state: {
    a: '',
    b: '',
  },
  actions: {
    setA(state, payload) {
      state.a = payload;
    },
    setB(state, payload) {
      state.b = payload;
    },
  },
});

export default fooModel;
