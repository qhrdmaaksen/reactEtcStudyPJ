import { createSlice, configureStore } from '@reduxjs/toolkit';

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
/*===============로그인 인증 관련 로직===============*/
const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
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

const store = configureStore({
  /*reducers 가 아닌 reducer, 이유는 createStore 와 configureStore 둘 중에서 무엇을 사용하든,
  리덕스에는 전역 상태를 담당하는 단 하나의주요 리듀서 함수만 있어야 해서
  * -모든 리듀서 메서드를 갖추고있는 counterSlice.reducer 는 전역 state 를 담당하는 주요 리듀서로 사용가능
  * --만약 규모가 큰 앱에 slice 가 여러개라면 리듀서 key value 대신 객체를 설정해서 그 객체 안에 원하는 대로 속성 이름을 정하며
  * ---key value 를 설정해서 프로퍼티들의 값이 또다른 리듀서 함수가 됨, 결국 리듀서 맵을 생성하는 것이며 맵은 주요 리듀서의 값이되고
  * ----보이진 않지만 configureStore 의 모든 리듀서를 하나의 큰 리듀서로 병합함
  */
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
/*createSlice 함수의 리듀서 영역에 있는 메서드 이름과 매칭
* -actions 의 객체에서 이런 key 에 접근할 수 있으며 그러면 리듀서 메서드에 접근할 필요가 없어짐, 대신에 Redux toolkit 에 의해
* --자동으로 생성된 메서드가 생기고 그 메서드가 호출되면 액션 객체가 생성될 것이며 이런 메스드는 액션 생성자라고 불림
* ---액션 객체를 생성해주며 이런 객체는 이미 액션마다 다른 고유 식별자와 함께 type 프로퍼티를 가지고 있음, 안 보이게 뒤에서 자동으로 생성됨
그래서 액션 식별자에 대해 신경 쓸 필요 없어짐 직접 액션 객체를 생성할 필요가 없음 단지 createSlice 의 actions key 및 객체를 사용하면 됨
* 액션 생성자 매서드를 실행해서 리듀서 메서드와 이름이 같으면 액션을 전달하며 그러면 최종적으로 서로 다른 매서드를 작동키는 원리*/
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
