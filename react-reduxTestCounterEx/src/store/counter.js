import { createSlice } from '@reduxjs/toolkit';

/*export const INCREMENT = 'increment';
export const INCREASE = 'increase';
export const DECREMENT = 'decrement';
export const TOGGLE = 'toggle';*/

const initialCounterState = { counter: 0, showCounter: true };

/*createSlice 는 객체를 인자로 생성함
 * -아래에선 인증 state 와 counter state 를 다룸
 * -모든 slice 는 이름이 있어야하며, 초기상태 설정해야함
 * -reducer 추가해야함 리듀서는 객체 혹은 맵이라 할 수 있음*/
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    /*이 메서드들은 나중에 리덕스에 의해 호출되고 현재 상태를 받음
     * -상태를 직접 변경할수있게함(내부적으론 알아서 변경할수없는 코드로 반환함 툴킷이)*/
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

/* createSlice 를 사용하며 필요 없어진 로직
const counterReducer = (state = initialCounterState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  /!*카운터를 고정된 수가아닌 엑션으로 들어온 값에따라 증가도록함*!/
  if (action.type === INCREASE) {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === TOGGLE) {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};*/

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
