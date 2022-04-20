import {createStore} from 'vuex';

export interface State {
  count: number;
}

export const useCounter = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
  },
});

export default useCounter;
