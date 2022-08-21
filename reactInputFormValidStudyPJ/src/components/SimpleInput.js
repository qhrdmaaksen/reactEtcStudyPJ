import {useState, useRef, useEffect} from 'react';
import '../index.css'
const SimpleInput = (props) => {

	/*input 을 ref 로 설정함으로써 필요할 때 input 요소로부터 값을 읽음*/
	const nameInputRef = useRef()

	const [enteredName, setEnteredName] = useState('')

	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)

	const [enteredNameTouched, setEnteredNameTouched] = useState(false)

	useEffect(()=> {
		if(enteredNameIsValid){
			console.log('valid')
		}
	}, [enteredNameIsValid])

	const nameInputChangeHandler = (event) => {
		/*event.target 이 입력 값이 되고 키 입력마다 해당 함수가 작동해 enteredName state update*/
		setEnteredName(event.target.value)
	}

	const formSubmissionHandler = (event) => {
		/*onSubmit 에있는 함수에는 기본 값 방지를 필수로 걸어두자
		* -*/
		event.preventDefault()

		setEnteredNameTouched(true) /*FORM 이 제출되는 순간 입력값이 사용자가 확인했기에 건드려졌다고 볼 수 있음*/
		/*.trim()을 이용해 입력 값의 처음부터 끝 사이에 있는 공백문자를 없앨 수 있음
		* 입력된이름의 유효성 검사*/
		if (enteredName.trim() === ''){
			setEnteredNameIsValid(false)
			return ; /*빈 문자열일 경우 실행되지않도록 return 하여 함수의 뒷부분을 실행되지않도록함*/
		}
		setEnteredNameIsValid(true)

		/*nameInputChangeHandler Fn 에 의해 마지막으로 저장된 name 콘솔 출력*/
		console.log('formSubmissionHandler ::: ', enteredName)
		/*input 요소는 자바스크립트의 객체처럼 작동하며 이 input 요소는 항상 value 라는 프로퍼티을 가지며 이 값은 현재 이 입력창에 입력된 값*/
		const enteredValue= nameInputRef.current.value
		console.log('formSubmissionHandler ref ::: ', enteredValue)

		/*ref 를 사용해 초기화하는 방법은 DOM 을 직접 조작하는 것으로 바닐라 js 를 이용해 DOM 에 접근해 무언가 변경하는 것이며 보통 지양해야 하는 방법*/
		/*nameInputRef.current.value=""*/

		setEnteredName('')
	}

	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

	/*입력 값이 true/false 라면 css 의 form-control invalid 로*/
	const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' :'form-control'

	return (
			<form onSubmit={formSubmissionHandler}>
				<div className={nameInputClasses}>
					<label htmlFor='name'>Your Name</label>
					<input
							ref={nameInputRef}
							value={enteredName}
							type='text'
							id='name'
							onChange={nameInputChangeHandler}/>
				</div>
				{nameInputIsInvalid && <p className="error-text">이름 입력란이 비어있습니다. 이름을 입력해주세요.</p>}
				<div className="form-actions">
					<button>Submit</button>
				</div>
			</form>
	);
};

export default SimpleInput;