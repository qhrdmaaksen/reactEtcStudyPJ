import {useReducer, useState} from 'react'

/*초기 입력 상태*/
const initialInputState = {
	value: '',
	isTouched: false,
}

/*reducer 에는 2 개의 인자 필요, 이전 state 와 리액트에 의해 전달되는 action
* -action 은 code 에 전달되어 최종적으로 새로운 state 반환*/
const inputStateReducer = (state, action) => {
	if (action.type === 'INPUT') {
		return {value: action.value, isTouched: state.isTouched}
	}
	/*focus 를 잃은 경우 사용자가 입력칸을 건드렸단 의미로 true 로 새로운 객체 설정*/
	if (action.type === 'BLUR') {
		return {isTouched: true, value: state.value}
	}
	if (action.type === 'RESET') {
		return {isTouched: false, value: ''}
	}
	return {
		value: '',
		isTouched: false,
	}
}

const useInput02 = (validateValue) => {
	const [inputState, dispatch] =useReducer(inputStateReducer, initialInputState)

	/* reducer 사용함에 따라 주석처리
	const [enteredValue, setEnteredValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);*/

	const valueIsValid = validateValue(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	const inputChangeHandler = (event) => {
		dispatch({
			type: 'INPUT',
			value: event.target.value,
		})
		/*reducer 사용함에 따라 주석처리 setEnteredValue(event.target.value)*/
	}
	const inputBlurHandler = () => {
		dispatch({
			type: 'BLUR',
		})
		/*reducer 사용함에 따라 주석처리 setIsTouched(true)*/
	}

	const reset = () => {
		dispatch({
			type: 'RESET',
		})
		/*reducer 사용함에 따라 주석처리
		setEnteredValue('')
		setIsTouched(false)*/
	}

	return {
		value: inputState.value,
		hasError,
		valueIsValid,
		reset,
		inputChangeHandler,
		inputBlurHandler,
	}
}
export default useInput02;