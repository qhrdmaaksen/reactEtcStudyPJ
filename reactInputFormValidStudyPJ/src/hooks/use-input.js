import {useState} from 'react';

/*이 훅을 이용해 입력값과 입력 창이 건드려졌는지에 대한 상태를 다룰것임, 이 둘을 조합해 유효성을 검증하도록할 것임*/
const useInput = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	/*simpleInput.js 에서 useInput()에 정의된 함수가 validateValue 의 인자로 입력되며 useInput 에서 다루는
	* --함수의 value 가 되어 실행됨됨
	* -함수를 다른 함수의 입력 값으로 넣는 js 문법*/
	const valueIsValid = validateValue(enteredValue)

	/*이 검증 로직의 경우 하드코딩이 되어있으면 안되고 훅이 사용되는 곳에서 어떤 로직을 사용할지 가져와야 함
	const valueIsValid = enteredValue.trim() !== '';*/
	/*hasError 는 valueIsValid 가 false 이면서 isTouched 가 true 인 경우에 true 가 되어서 에러를 보일지 결정*/
	const hasError = !valueIsValid && isTouched;

	/*키 입력마다 유효성 검증 로직*/
	const valueChangeHandler = (event) => {
		/*event.target 이 입력 값이 되고 키 입력마다 해당 함수가 작동해 enteredName state update*/
		setEnteredValue(event.target.value)
	}

	/*입력란에 클릭 후 아무 것도 입력하지 않은 상태로 입력란을 벗어난 경우 inValid 처리*/
	const InputBlurHandler = () => {
		/*입력창에서 포커스를 잃었다는건 사용자가 건드렸다는 의미라서 true */
		setIsTouched(true)
		/*.trim()을 이용해 입력 값의 처음부터 끝 사이에 있는 공백문자를 없앨 수 있음
		* 입력된이름의 유효성 검사*/
	}

	/*초기화 함수*/
	const reset = () => {
		setEnteredValue('')
		setIsTouched(false)
	}

	return {
		value: enteredValue,
		valueIsValid,
		hasError,
		reset,
		valueChangeHandler,
		InputBlurHandler,
	}
}
export default useInput;