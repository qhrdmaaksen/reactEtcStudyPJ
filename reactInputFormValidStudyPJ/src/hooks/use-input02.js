import {useState} from 'react'

const useInput02 = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validateValue(enteredValue);
	const hasError = !valueIsValid && isTouched;

	const inputChangeHandler = (event) => {
		setEnteredValue(event.target.value)
	}
	const inputBlurHandler = () => {
		setIsTouched(true)
	}

	const reset = () => {
		setEnteredValue('')
		setIsTouched(false)
	}

	return {
		value: enteredValue,
		hasError,
		valueIsValid,
		reset,
		inputChangeHandler,
		inputBlurHandler,
	}
}
export default useInput02;