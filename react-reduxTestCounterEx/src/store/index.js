import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  /*reducers 가 아닌 reducer, 이유는 createStore 와 configureStore 둘 중에서 무엇을 사용하든,
	리덕스에는 전역 상태를 담당하는 단 하나의주요 리듀서 함수만 있어야 해서
	* -모든 리듀서 메서드를 갖추고있는 counterSlice.reducer 는 전역 state 를 담당하는 주요 리듀서로 사용가능
	* --만약 규모가 큰 앱에 slice 가 여러개라면 리듀서 key value 대신 객체를 설정해서 그 객체 안에 원하는 대로 속성 이름을 정하며
	* ---key value 를 설정해서 프로퍼티들의 값이 또다른 리듀서 함수가 됨, 결국 리듀서 맵을 생성하는 것이며 맵은 주요 리듀서의 값이되고
	* ----보이진 않지만 configureStore 의 모든 리듀서를 하나의 큰 리듀서로 병합함
	*/
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});
/*createSlice 함수의 리듀서 영역에 있는 메서드 이름과 매칭
* -actions 의 객체에서 이런 key 에 접근할 수 있으며 그러면 리듀서 메서드에 접근할 필요가 없어짐, 대신에 Redux toolkit 에 의해
* --자동으로 생성된 메서드가 생기고 그 메서드가 호출되면 액션 객체가 생성될 것이며 이런 메스드는 액션 생성자라고 불림
* ---액션 객체를 생성해주며 이런 객체는 이미 액션마다 다른 고유 식별자와 함께 type 프로퍼티를 가지고 있음, 안 보이게 뒤에서 자동으로 생성됨
그래서 액션 식별자에 대해 신경 쓸 필요 없어짐 직접 액션 객체를 생성할 필요가 없음 단지 createSlice 의 actions key 및 객체를 사용하면 됨
* 액션 생성자 매서드를 실행해서 리듀서 메서드와 이름이 같으면 액션을 전달하며 그러면 최종적으로 서로 다른 매서드를 작동키는 원리*/
export default store;
