import {createStore} from 'redux'

const initialState = {counter: 0, showCounter: true}

const counterReducer = (state = initialState, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
			showCounter: state.showCounter,
		}
	}
	/*카운터를 고정된 수가아닌 엑션으로 들어온 값에따라 증가도록함*/
	if (action.type === 'increase'){
		return {
			counter: state.counter + action.amount,
			showCounter: state.showCounter,
		}
	}
	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		}
	}
	if (action.type === 'toggle') {
		return {
			counter: state.counter,
			showCounter: !state.showCounter,
		}
	}
	return state;
}

const store = createStore(counterReducer)
console.log(store.getState)

store.dispatch({
	type: 'increment',
})
store.dispatch({
	type: 'decrement',
})

export default store

