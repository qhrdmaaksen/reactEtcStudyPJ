const redux = require('redux')

/*현재의 state 와 action 을 받게될 리듀서 함수*/
const counterReducer = (state = {counter: 0}, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
		};
	}
	if (action.type === 'decrement'){
		return {
			counter: state.counter - 1,
		}
	}
	return state;/*다른 action 이라면 변하지 않은 state return*/
}

/*리덕스 라이브러리에서 온것이며 저장소 생성함
* -counterReducer 가 store 의 저장소를 변경할 것임을 명시*/
const store = redux.createStore(counterReducer)
console.log(store.getState())

/*reducer 가 저장소 구독*/
const counterSubscriber = () => {
	/*getState 는 createStore 로 생성된 저장소에서 사용할 수 있는 method
	* -getState 는 업데이트 된 후 최신 상태 스냅샷을 제공할 것임
	* -구독 함수는 state 가 update 될때마다 trigger 되면 getState 를 통해 최신 상태 스냅샷을 얻음*/
	const latestStore = store.getState()
	console.log(latestStore)
}
/*subscribe 를 호출해서 리덕스가 구독함수를 인식하고 state 가 update 될때마다 함수를 실행하도록함함
* -subscribe 메소드는 counterSubscriber 함수를 취함
* -리덕스는 데이터와 저장소가 변경될때마다 counterSubscriber 함수를 실행하게해줌*/
store.subscribe(counterSubscriber)

/*증가 action 발송*/
store.dispatch({
	type: 'increment', /*type 은 고유한 문자열이여야함*/
})
/*감소 action 발송*/
store.dispatch({
	type: 'decrement',
})
