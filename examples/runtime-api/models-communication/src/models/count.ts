import { model } from '@modern-js/runtime/model';

const stepModel = model('step').define({
  state: 1
});

const counterModel = model('count').define((context, { use, onMount }) => {
  const [,,subscribeStep] = use(stepModel);

  onMount(() => {
    return subscribeStep(() => {
      console.log(`Subscribe in counterModel: stepModel change to ${use(stepModel)[0]}`)
    });
  });

  return {
    state: {
      value: 1
    },
    actions: {
      add(state) {
        const step = use(stepModel)[0]

        return {
          ...state,
          value: state.value + step
        };
      }
    }
  }
});

export { stepModel, counterModel };
