import {createStore} from 'redux'

const counterReducer = (state = {counter: 0}, action) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
		}
	}
	/*카운터를 고정된 수가아닌 엑션으로 들어온 값에따라 증가도록함*/
	if (action.type === 'increase'){
		return {
			counter: state.counter + action.amount,
		}
	}
	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
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

