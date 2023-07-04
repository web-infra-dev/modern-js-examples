import { model } from "@modern-js/runtime/model";
import { createSelector } from "reselect";
import fooModel, { FooState } from "./foo";

interface BarState {
  value: string;
}

interface CombineState {
  foo: FooState;
  bar: BarState;
}

const selectCombineA = createSelector(
  (state: CombineState) => state.bar.value,
  (state: CombineState) => state.foo.a,
  (barState, fooState) => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return barState + fooState;
  }
);

const barModel = model<BarState>("bar").define({
  state: {
    value: "bar",
  },
  computed: {
    combineA: [
      fooModel,
      (state, fooState: FooState) => {
        return selectCombineA({
          foo: fooState,
          bar: state,
        });
      },
    ],
  },
  actions: {
    setValue(state, payload) {
      state.value = payload;
    },
  },
});

export default barModel;
